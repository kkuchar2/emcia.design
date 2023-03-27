import React from 'react';

import { NavBar } from 'components/NavBar/NavBar';

const listener = (status) => {
    const remaining = status.limit.y - status.offset.y;
    const fullScroll = status.limit.y;
    const scale = remaining / fullScroll;
    document.documentElement.style.setProperty('--scale-bottom-circle', `${scale}`);

    // Set var with scroll position:
    document.documentElement.style.setProperty('--scroll-position', `${status.offset.y}px`);

    // Set var with scroll progress:
    const scrollProgress = status.offset.y / status.limit.y;
    document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}`);
};

interface PageProps {
    component: React.FC;
    pageProps: any;
}

export const Page = (props: PageProps) => {

    const { component: Component, pageProps } = props;

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            listener({
                offset: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                limit: {
                    x: document.body.scrollWidth - window.innerWidth,
                    y: document.body.scrollHeight - window.innerHeight
                }
            });
        });

        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return <div className={'w-full'}>
        <NavBar/>
        <Component {...pageProps} />
    </div>;
};