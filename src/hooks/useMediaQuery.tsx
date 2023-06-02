import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (width: number): boolean => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: MediaQueryListEvent) => {
        setTargetReached(e.matches);
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${width}px)`);
        media.addEventListener('change', updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, [width, updateTarget]);

    return targetReached;
};