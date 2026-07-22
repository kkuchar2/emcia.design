#!/usr/bin/env python3
"""Scrape Behance gallery projects into ordered image lists (+ optional max-res download)."""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any
from urllib.parse import unquote, urlparse

USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)
IMAGE_TYPES = {"ImageModule", "image"}
# Prefer original upload over derived CDN sizes.
SIZE_FOLDER_PRIORITY = (
    "source",
    "max_3840",
    "2800",
    "fs",
    "hd",
    "1400",
    "max_1200",
    "disp",
)


def parse_gallery_url(url: str) -> tuple[str, str]:
    """Return (project_id, slug) from a Behance gallery URL."""
    path = urlparse(url).path.strip("/")
    parts = path.split("/")
    # gallery/<id>/<slug>
    if len(parts) >= 3 and parts[0] == "gallery" and parts[1].isdigit():
        return parts[1], parts[2]
    raise ValueError(f"Not a Behance gallery URL: {url}")


DIR_NAME_BY_ID = {
    "156628655": "serenity",
    "164216181": "aprojekt",
    "170657341": "sciecielo",
}


def default_dir_name(project_id: str, slug: str) -> str:
    if project_id in DIR_NAME_BY_ID:
        return DIR_NAME_BY_ID[project_id]
    slug = unquote(slug).lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug.split("-")[0] if slug else f"project-{project_id}"


def fetch_html(url: str, timeout: int = 60) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="replace")


def extract_images_from_dom(html: str) -> list[dict[str, str]]:
    """Fallback for partial HTML scrapes that only contain rendered image modules."""
    pattern = re.compile(
        r'<img[^>]+src="(https://mir-s3-cdn-cf\.behance\.net/project_modules/[^"]+)"'
        r'[^>]*?(?:srcset="([^"]*)")?',
        re.IGNORECASE,
    )
    images: list[dict[str, str]] = []
    seen: set[str] = set()
    for src, srcset in pattern.findall(html):
        candidates = [src]
        if srcset:
            for part in srcset.split(","):
                url = part.strip().rsplit(" ", 1)[0].strip()
                if url:
                    candidates.append(url)
        # Pick largest by size-folder priority / numeric folder hint.
        best_url = max(candidates, key=_url_quality_key)
        filename = best_url.rstrip("/").rsplit("/", 1)[-1]
        # Dedupe by basename (same asset, different CDN folders).
        if filename in seen:
            continue
        seen.add(filename)
        images.append(
            {
                "module_id": "",
                "filename": filename,
                "url": best_url,
                "width": "",
                "folder": folder_from_url(best_url),
            }
        )
    return images


def _url_quality_key(url: str) -> tuple[int, int, int]:
    folder = folder_from_url(url)
    base = re.sub(r"(_webp|_opt_1)$", "", folder)
    try:
        prio = SIZE_FOLDER_PRIORITY.index(base)
    except ValueError:
        prio = len(SIZE_FOLDER_PRIORITY)
    m = re.match(r"(\d+)", base)
    width_hint = int(m.group(1)) if m else 0
    if base == "source":
        width_hint = 10_000
    elif base == "max_3840":
        width_hint = 3840
    elif base == "fs":
        width_hint = 1920
    webp_penalty = 1 if "_webp" in folder else 0
    return (width_hint, -prio, -webp_penalty)


def load_project_json(html: str) -> dict[str, Any]:
    scripts = re.findall(
        r'<script[^>]*type="application/json"[^>]*>(.*?)</script>',
        html,
        re.DOTALL,
    )
    for raw in scripts:
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            continue
        project = (data.get("project") or {}).get("project")
        if isinstance(project, dict) and project.get("modules"):
            return project
    raise RuntimeError("Could not find Behance project JSON with modules")


def folder_from_url(url: str) -> str:
    # .../project_modules/<folder>/<file>
    parts = urlparse(url).path.strip("/").split("/")
    try:
        i = parts.index("project_modules")
        return parts[i + 1]
    except (ValueError, IndexError):
        return ""


def pick_largest(all_available: list[dict[str, Any]]) -> dict[str, Any] | None:
    if not all_available:
        return None

    # Prefer original source file when present.
    for item in all_available:
        url = item.get("url") or ""
        if folder_from_url(url) == "source":
            return item

    def score(item: dict[str, Any]) -> tuple[int, int, int]:
        url = item.get("url") or ""
        folder = folder_from_url(url)
        # Strip _webp / _opt_1 for priority matching.
        base = re.sub(r"(_webp|_opt_1)$", "", folder)
        try:
            prio = SIZE_FOLDER_PRIORITY.index(base)
        except ValueError:
            prio = len(SIZE_FOLDER_PRIORITY)
        width = int(item.get("width") or 0)
        # Prefer non-webp at same size (original encoding / gif fidelity).
        webp_penalty = 1 if "_webp" in folder else 0
        return (-width, prio, webp_penalty)

    return sorted(all_available, key=score)[0]


def extract_images(project: dict[str, Any]) -> list[dict[str, str]]:
    images: list[dict[str, str]] = []
    for module in project.get("modules") or []:
        typename = module.get("__typename") or module.get("type") or ""
        if typename not in IMAGE_TYPES and "imageSizes" not in module:
            continue
        sizes = module.get("imageSizes") or {}
        available = sizes.get("allAvailable") or []
        best = pick_largest(available)
        if not best or not best.get("url"):
            # Fallback: size_1400 / size_disp
            for key in ("size_1400", "size_disp", "size_max_1200"):
                node = sizes.get(key) or {}
                if node.get("url"):
                    best = node
                    break
        if not best or not best.get("url"):
            continue
        url = best["url"]
        filename = url.rstrip("/").rsplit("/", 1)[-1]
        images.append(
            {
                "module_id": str(module.get("id") or ""),
                "filename": filename,
                "url": url,
                "width": str(best.get("width") or ""),
                "folder": folder_from_url(url),
            }
        )
    return images


def extract_project_images(html: str) -> tuple[str, list[dict[str, str]]]:
    """Return (project_name, images). Uses JSON when present, else DOM fallback."""
    try:
        project = load_project_json(html)
        return project.get("name") or "", extract_images(project)
    except RuntimeError:
        images = extract_images_from_dom(html)
        if not images:
            raise
        return "", images


def write_list_file(path: Path, images: list[dict[str, str]], project_name: str, source_url: str) -> None:
    lines = [
        f"# {project_name}",
        f"# source: {source_url}",
        f"# count: {len(images)}",
        "# columns: index | filename | download_url | width | size_folder",
        "",
    ]
    for i, img in enumerate(images, 1):
        lines.append(
            f"{i:02d}\t{img['filename']}\t{img['url']}\t{img['width']}\t{img['folder']}"
        )
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def download_file(url: str, dest: Path, timeout: int = 120) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=timeout) as resp, dest.open("wb") as out:
        out.write(resp.read())


def download_images(
    images: list[dict[str, str]],
    out_dir: Path,
    delay: float = 0.2,
) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    for i, img in enumerate(images, 1):
        ext = Path(img["filename"]).suffix.lower() or ".bin"
        dest = out_dir / f"{i:02d}{ext}"
        if dest.exists() and dest.stat().st_size > 0:
            print(f"  skip existing {dest.name}")
            continue
        print(f"  downloading {dest.name} <- {img['folder']}/{img['filename']}")
        try:
            download_file(img["url"], dest)
        except urllib.error.HTTPError as exc:
            print(f"  ERROR {exc.code} for {img['url']}", file=sys.stderr)
        if delay:
            time.sleep(delay)


def process_url(
    url: str,
    root: Path,
    dir_name: str | None,
    do_download: bool,
    save_html: bool,
) -> Path:
    project_id, slug = parse_gallery_url(url)
    folder = dir_name or default_dir_name(project_id, slug)
    out_dir = root / folder
    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"Fetching {url}")
    html = fetch_html(url)
    if save_html:
        (out_dir / "index.html").write_text(html, encoding="utf-8")

    project_name, images = extract_project_images(html)
    if not images:
        raise RuntimeError(f"No image modules found for {url}")

    list_path = out_dir / "files.txt"
    write_list_file(list_path, images, project_name or folder, url)
    print(f"Wrote {list_path} ({len(images)} images)")

    if do_download:
        images_dir = out_dir / "images"
        print(f"Downloading max-res into {images_dir}")
        download_images(images, images_dir)

    return out_dir


def process_local_html(
    html_path: Path,
    out_dir: Path,
    source_url: str,
    do_download: bool,
) -> Path:
    html = html_path.read_text(encoding="utf-8", errors="replace")
    project_name, images = extract_project_images(html)
    if not images:
        raise RuntimeError(f"No image modules found in {html_path}")
    out_dir.mkdir(parents=True, exist_ok=True)
    list_path = out_dir / "files.txt"
    write_list_file(list_path, images, project_name or out_dir.name, source_url)
    print(f"Wrote {list_path} ({len(images)} images)")
    if do_download:
        images_dir = out_dir / "images"
        print(f"Downloading max-res into {images_dir}")
        download_images(images, images_dir)
    return out_dir


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Extract ordered Behance project images and optionally download max resolution."
    )
    p.add_argument(
        "urls",
        nargs="*",
        help="Behance gallery URLs",
    )
    p.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parent,
        help="Root directory for project folders (default: behance/)",
    )
    p.add_argument(
        "--dir-name",
        help="Override output folder name (only when scraping a single URL)",
    )
    p.add_argument(
        "--download",
        action="store_true",
        help="Download largest available resolution into <project>/images/",
    )
    p.add_argument(
        "--save-html",
        action="store_true",
        help="Save fetched page as index.html in the project folder",
    )
    p.add_argument(
        "--from-html",
        type=Path,
        help="Parse a saved Behance HTML file instead of fetching",
    )
    p.add_argument(
        "--from-html-out",
        type=Path,
        help="Output directory when using --from-html",
    )
    p.add_argument(
        "--from-html-url",
        default="",
        help="Source URL label written into files.txt when using --from-html",
    )
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)

    if args.from_html:
        out = args.from_html_out or args.from_html.parent
        process_local_html(
            args.from_html,
            out,
            args.from_html_url or str(args.from_html),
            args.download,
        )
        return 0

    if not args.urls:
        build_parser().print_help()
        return 2

    if args.dir_name and len(args.urls) != 1:
        print("--dir-name requires exactly one URL", file=sys.stderr)
        return 2

    for url in args.urls:
        process_url(
            url,
            args.root,
            args.dir_name,
            args.download,
            args.save_html,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
