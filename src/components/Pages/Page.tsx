import React, { useEffect } from 'react';

import { NavBar } from 'components/NavBar/NavBar';
import { isScrollbarVisible, setScrollbarWidthMultiplier } from 'hooks/use-scrollbar-width';

interface PageProps {
    component: React.FC;
    pageProps: any;
}

export const Page = (props: PageProps) => {

    const { component: Component, pageProps } = props;

    useEffect(() => {
        setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
    }, [Component]);

    return <div className={'w-full'}>
        <NavBar/>
        <Component {...pageProps} />
    </div>;
};