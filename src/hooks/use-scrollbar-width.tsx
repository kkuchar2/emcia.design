import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

export const setScrollbarWidthMultiplier = (value: number) => {
    document.documentElement.style.setProperty('--scrollbar-width-multiplier', `${value}`);
};

export const setScrollbarWidth = (value: number) => {
    document.documentElement.style.setProperty('--scrollbar-width', `${value}px`);
};

export const isScrollbarVisible = () => {
    return window.innerWidth > document.documentElement.clientWidth;
};

const useScrollbarWidth = () => {
    const pathname = usePathname();

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
            document.documentElement.style.setProperty('--navbar-opacity', '1');
        };

        const updateOnResize = () => {
            setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
        };

        window.addEventListener('resize', updateOnResize);

        updateVarScrollbarWidth();

        return () => {
            window.removeEventListener('resize', updateOnResize);
        };
    }, [pathname]);
};

export default useScrollbarWidth;