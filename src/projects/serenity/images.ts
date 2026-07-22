import type { ShowcaseImage } from 'components/pages/ProjectShowcasePage';

const CDN_BASE = 'https://cdn.static.kkucharski.com/emcia.design/serenity';

/** Animated modules served as GIF with 256 / 512 / 1024 / full variants. */
const GIF_INDICES = new Set([25, 26, 27, 28, 29]);

const TOTAL_IMAGES = 34;

const SIZES = '(max-width: 1400px) 100vw, 1400px';

/** Intrinsic pixel sizes from source modules (used for aspect-ratio placeholders). */
const DIMENSIONS: Record<number, { width: number; height: number }> = {
  1: { width: 2800, height: 2000 },
  2: { width: 2800, height: 1728 },
  3: { width: 2800, height: 1120 },
  4: { width: 2800, height: 3400 },
  5: { width: 2800, height: 2328 },
  6: { width: 2800, height: 1430 },
  7: { width: 2800, height: 1358 },
  8: { width: 2800, height: 1416 },
  9: { width: 2800, height: 1864 },
  10: { width: 2800, height: 3578 },
  11: { width: 2800, height: 2364 },
  12: { width: 2800, height: 1514 },
  13: { width: 2800, height: 1696 },
  14: { width: 2800, height: 3072 },
  15: { width: 2800, height: 4330 },
  16: { width: 2800, height: 5486 },
  17: { width: 2800, height: 3794 },
  18: { width: 2800, height: 1558 },
  19: { width: 2800, height: 1060 },
  20: { width: 2800, height: 1566 },
  21: { width: 2800, height: 4108 },
  22: { width: 2800, height: 3038 },
  23: { width: 2800, height: 3704 },
  24: { width: 2800, height: 1544 },
  25: { width: 1400, height: 1200 },
  26: { width: 1400, height: 1200 },
  27: { width: 1400, height: 1000 },
  28: { width: 1400, height: 1200 },
  29: { width: 1400, height: 1200 },
  30: { width: 2800, height: 1280 },
  31: { width: 2800, height: 1544 },
  32: { width: 2800, height: 3058 },
  33: { width: 2800, height: 2920 },
  34: { width: 2800, height: 1336 },
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
  const url = (suffix: string) => `${CDN_BASE}/serenity-${id}-${suffix}.gif`;

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
  const url = (suffix: string) => `${CDN_BASE}/serenity-${id}-${suffix}.webp`;

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

export const serenityImages: ShowcaseImage[] = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => {
    const index = i + 1;
    return GIF_INDICES.has(index) ? buildGifImage(index) : buildWebpImage(index);
  },
);
