import type { ShowcaseImage } from 'components/pages/ProjectShowcasePage';

const CDN_BASE = 'https://cdn.static.kkucharski.com/emcia.design/sciencelo';

/** Animated modules served as GIF with 256 / 512 / 1024 / full variants. */
const GIF_INDICES = new Set([1, 2, 5]);

const TOTAL_IMAGES = 25;

const SIZES = '(max-width: 1400px) 100vw, 1400px';

/** Intrinsic pixel sizes from source modules (used for aspect-ratio placeholders). */
const DIMENSIONS: Record<number, { width: number; height: number }> = {
  1: { width: 1920, height: 1367 },
  2: { width: 1820, height: 1430 },
  3: { width: 2880, height: 1232 },
  4: { width: 2880, height: 1216 },
  5: { width: 1920, height: 478 },
  6: { width: 2880, height: 600 },
  7: { width: 2880, height: 1748 },
  8: { width: 2880, height: 1626 },
  9: { width: 2880, height: 1900 },
  10: { width: 2880, height: 1706 },
  11: { width: 2880, height: 1716 },
  12: { width: 2880, height: 986 },
  13: { width: 2880, height: 2156 },
  14: { width: 2880, height: 1344 },
  15: { width: 2880, height: 1312 },
  16: { width: 2880, height: 1324 },
  17: { width: 2880, height: 1788 },
  18: { width: 2880, height: 1608 },
  19: { width: 2880, height: 1728 },
  20: { width: 2880, height: 832 },
  21: { width: 2880, height: 480 },
  22: { width: 2880, height: 1468 },
  23: { width: 2880, height: 240 },
  24: { width: 2880, height: 1986 },
  25: { width: 2880, height: 1468 },
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
  const url = (suffix: string) => `${CDN_BASE}/sciencelo-${id}-${suffix}.gif`;

  return withDimensions(index, {
    index,
    src: url('full'),
    srcSet: [
      `${url('256w')} 256w`,
      `${url('512w')} 512w`,
      `${url('1024w')} 1024w`,
      `${url('full')} 1920w`,
    ].join(', '),
    sizes: SIZES,
  });
}

function buildWebpImage(index: number): ShowcaseImage {
  const id = pad(index);
  const url = (suffix: string) => `${CDN_BASE}/sciencelo-${id}-${suffix}.webp`;

  return withDimensions(index, {
    index,
    src: url('2048w'),
    srcSet: [
      `${url('256w')} 256w`,
      `${url('512w')} 512w`,
      `${url('1024w')} 1024w`,
      `${url('2048w')} 2048w`,
    ].join(', '),
    sizes: SIZES,
  });
}

export const scienceloImages: ShowcaseImage[] = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => {
    const index = i + 1;
    return GIF_INDICES.has(index) ? buildGifImage(index) : buildWebpImage(index);
  },
);
