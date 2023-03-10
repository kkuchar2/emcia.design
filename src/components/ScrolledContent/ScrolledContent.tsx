import { EdgeEasingPlugin } from 'components/EdgeEasingPlugin';
import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import Scrollbar from 'smooth-scrollbar';

interface IScrolledContentProps {
    component: React.FC;
    pageProps: any;
    children: React.ReactNode;
}

const plugins = [EdgeEasingPlugin];

const options = {
    enableOnMobile: false,
    damping: 0.05,
    renderByPixels: false,
    alwaysShowTracks: false,
    continuousScrolling: true,
    plugins: {
        overscroll: {
            effect: 'bounce',
            damping: 0.1,
            maxOverscroll: 150,
        },
    }
};

const listener = (status) => {

    document.documentElement.style.setProperty('--navbar-top', `${-status.offset.y}px`);
    const remaining = status.limit.y - status.offset.y;
    const fullScroll = status.limit.y;
    const scale = remaining / fullScroll;
    document.documentElement.style.setProperty('--scale-bottom-circle', `${scale}`);
};

export const ScrolledContent = (props: IScrolledContentProps) => {

    const { component: Component, pageProps, children } = props;

    const scrollbarRef = useRef(null);

    React.useEffect(() => {
        let scrollbar = null;

        if (!isMobile || (isMobile && options.enableOnMobile)) {
            if (scrollbarRef.current && typeof window !== 'undefined') {

                if (plugins && plugins.length) {
                    Scrollbar.use(...plugins);
                }

                scrollbar = Scrollbar.init(scrollbarRef.current, options);

                if (listener && typeof listener === 'function') {
                    scrollbar.addListener(listener);
                }
            }
        }
        return () => {
            if (scrollbar && scrollbarRef.current) {
                if (listener && typeof listener === 'function') {
                    scrollbar.removeListener(listener);
                }
                scrollbar.destroy();
            }
        };
    }, []);

    return <div className={'relative w-full md:overflow-hidden'}>
        {children}
        <div ref={scrollbarRef} className={'relative w-full md:overflow-hidden'}>
            <div>
                <Component {...pageProps} />
            </div>
        </div>
    </div>;
};