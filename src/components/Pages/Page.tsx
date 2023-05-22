import React, { useEffect } from 'react';

import { NavBar } from 'components/NavBar/NavBar';
import { isScrollbarVisible, setScrollbarWidthMultiplier } from 'hooks/use-scrollbar-width';

import { PageProps } from '../../pages/_app';

interface GenericPageProps {
    component: React.ElementType<PageProps>;
    pageProps: PageProps;
}

export const Page = (props: GenericPageProps) => {

    const { component: Component, pageProps } = props;

    useEffect(() => {
        setScrollbarWidthMultiplier(isScrollbarVisible() ? 1 : 0);
    }, [Component]);

    return <div className={'w-full'}>
        <NavBar/>
        <Component {...pageProps} />
    </div>;
};