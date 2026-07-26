'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'emcia-chunk-reload';
const MAX_RELOADS = 2;

function isChunkLoadError(reason: unknown): boolean {
  if (!reason) return false;
  if (typeof reason === 'string') {
    return /Loading chunk [\d]+ failed|ChunkLoadError|Failed to fetch dynamically imported module/i.test(
      reason,
    );
  }
  if (typeof reason === 'object') {
    const err = reason as { name?: string; message?: string };
    if (err.name === 'ChunkLoadError') return true;
    if (err.message && isChunkLoadError(err.message)) return true;
  }
  return false;
}

function tryReload(source: string) {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const count = raw ? Number.parseInt(raw, 10) || 0 : 0;
    if (count >= MAX_RELOADS) return;
    sessionStorage.setItem(STORAGE_KEY, String(count + 1));
    console.warn(`[deploy-recover] ${source} — reloading (${count + 1}/${MAX_RELOADS})`);
    const delay = 800 + count * 1200;
    window.setTimeout(() => {
      window.location.reload();
    }, delay);
  } catch {
    // sessionStorage unavailable
  }
}

/**
 * Soft recovery for deploy cutover / version-skew ChunkLoadError and CSS MIME failures.
 */
export function DeployRecover() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      if (isChunkLoadError(event.error) || isChunkLoadError(event.message)) {
        tryReload('window.error');
      }
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadError(event.reason)) {
        tryReload('unhandledrejection');
      }
    };
    const onAssetError = (event: Event) => {
      const el = event.target;
      if (!(el instanceof HTMLElement)) return;
      if (el.tagName === 'SCRIPT' || el.tagName === 'LINK') {
        const href =
          (el as HTMLScriptElement).src || (el as HTMLLinkElement).href || '';
        if (href.includes('/_next/static/')) {
          tryReload('asset-error');
        }
      }
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);
    // capture phase so we see resource load failures
    window.addEventListener('error', onAssetError, true);

    // Successful boot — clear reload counter after a short healthy window
    const okTimer = window.setTimeout(() => {
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    }, 15_000);

    return () => {
      window.clearTimeout(okTimer);
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
      window.removeEventListener('error', onAssetError, true);
    };
  }, []);

  return null;
}
