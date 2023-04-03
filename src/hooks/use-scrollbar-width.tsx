import { useEffect } from 'react';

import { useRouter } from 'next/router';

export const setScrollbarWidthMultiplier = (value: number) => {
    console.log('Setting scrollbar width multiplier to: ', value);
    document.documentElement.style.setProperty('--scrollbar-width-multiplier', `${value}`);
};

export const setScrollbarWidth = (value: number) => {
    document.documentElement.style.setProperty('--scrollbar-width', `${value}px`);
};

export const isScrollbarVisible = () => {
    return window.innerWidth > document.documentElement.clientWidth;
};

const useScrollbarWidth = () => {
    const router = useRouter();

    useEffect(() => {

        const updateVarScrollbarWidth = () => {
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.overflow = 'scroll';
            document.body.appendChild(outer);
            const inner = document.createElement('div');
            outer.appendChild(inner);
            setScrollbarWidth(outer.offsetWidth - inner.offsetWidth);
            setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
            outer.parentNode.removeChild(outer);
        };

        const updateOnResize = () => {
            setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
        };

        window.addEventListener('resize', updateOnResize);

        updateVarScrollbarWidth();

        return () => {
            window.removeEventListener('resize', updateOnResize);
        };
    }, [router.events]);
};

export default useScrollbarWidth;