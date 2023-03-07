import { useEffect, useRef } from 'react';
import { ScrollbarPlugin } from 'smooth-scrollbar';
import { ScrollbarOptions } from 'smooth-scrollbar/interfaces';
import * as I from 'smooth-scrollbar/src/interfaces';

interface IUseSmoothScrollbarOptions extends ScrollbarOptions {
    enableOnMobile?: boolean;
}

const useSmoothScrollbar = (options: Partial<IUseSmoothScrollbarOptions>,
                            listener: I.ScrollListener,
                            plugins: (typeof ScrollbarPlugin)[]) => {

    const scrollbarRef = useRef(null);

    useEffect(() => {
        console.log('useSmoothScrollbar');

    }, [options, listener]);

    return scrollbarRef;
};

export default useSmoothScrollbar;