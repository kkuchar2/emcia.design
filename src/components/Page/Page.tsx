import React from 'react';

import { scaleUp } from 'components/Circles/keyframes';
import { NavBar } from 'components/NavBar/NavBar';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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

const Circle = styled.div`
  position: absolute;
  width: 160vh;
  height: 160vh;
  border-radius: 50%;
  background: #ffffff;
  right: calc(50% + 80px);
  bottom: calc(50% - 80vh);
  display: none;

  @media (max-height: 768px) {
    width: 100vw;
    height: 100vw;
    bottom: calc(50% - 70vw);
  }

  @media (min-width: 1024px) {
    display: block;
    animation: ${scaleUp} 2200ms cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  }
`;

export const Page = (props: PageProps) => {

    const { component: Component, pageProps } = props;

    const router = useRouter();

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
        {router.pathname === '/contact' ?
            <div className={'fixed top-0 left-0 z-0 h-screen w-screen'}>
                <Circle/>
            </div> : null}
        <NavBar/>
        <Component {...pageProps} />
    </div>;
};