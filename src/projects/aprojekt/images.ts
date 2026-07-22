import type { ShowcaseImage } from 'components/pages/ProjectShowcasePage';

const CDN_BASE = 'https://cdn.static.kkucharski.com/emcia.design/aprojekt';

/** Animated modules served as GIF with 256 / 512 / 1024 / full variants. */
const GIF_INDICES = new Set([3, 17, 19, 20, 22, 23]);

const TOTAL_IMAGES = 24;

const SIZES = '(max-width: 1400px) 100vw, 1400px';

/** Intrinsic pixel sizes from source modules (used for aspect-ratio placeholders). */
const DIMENSIONS: Record<number, { width: number; height: number }> = {
  1: { width: 2800, height: 1922 },
  2: { width: 2800, height: 2306 },
  3: { width: 1400, height: 1564 },
  4: { width: 2800, height: 1404 },
  5: { width: 2800, height: 1412 },
  6: { width: 2800, height: 3278 },
  7: { width: 2800, height: 4142 },
  8: { width: 2800, height: 2644 },
  9: { width: 2800, height: 2806 },
  10: { width: 2800, height: 2352 },
  11: { width: 2800, height: 2876 },
  12: { width: 2800, height: 2750 },
  13: { width: 2800, height: 2754 },
  14: { width: 2800, height: 3112 },
  15: { width: 2800, height: 2284 },
  16: { width: 2800, height: 3360 },
  17: { width: 1400, height: 672 },
  18: { width: 2800, height: 580 },
  19: { width: 1400, height: 784 },
  20: { width: 1400, height: 854 },
  21: { width: 2800, height: 700 },
  22: { width: 1400, height: 842 },
  23: { width: 1400, height: 1320 },
  24: { width: 2800, height: 4068 },
};

function pad(index: number): string {
  return String(index).padStart(2, '0');
}

function withDimensions(index: number, image: Omit<ShowcaseImage, 'width' | 'height'>): ShowcaseImage {
  const { width, height } = DIMENSIONS[index];
  return { ...image, width, height };
}

function buildGifImage(index: number): ShowcaseImage {
  const id = pad(index);
  const url = (suffix: string) => `${CDN_BASE}/aprojekt-${id}-${suffix}.gif`;

  return withDimensions(index, {
    index,
    src: url('full'),
    srcSet: [
      `${url('256w')} 256w`,
      `${url('512w')} 512w`,
      `${url('1024w')} 1024w`,
      `${url('full')} 1400w`,
    ].join(', '),
    sizes: SIZES,
  });
}

function buildWebpImage(index: number): ShowcaseImage {
  const id = pad(index);
  const url = (suffix: string) => `${CDN_BASE}/aprojekt-${id}-${suffix}.webp`;

  return withDimensions(index, {
    index,
    src: url('full'),
    srcSet: [
      `${url('256w')} 256w`,
      `${url('512w')} 512w`,
      `${url('1024w')} 1024w`,
      `${url('2048w')} 2048w`,
      `${url('full')} 2800w`,
    ].join(', '),
    sizes: SIZES,
  });
}

export const aprojektImages: ShowcaseImage[] = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => {
    const index = i + 1;
    return GIF_INDICES.has(index) ? buildGifImage(index) : buildWebpImage(index);
  },
);
