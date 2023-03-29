import React from 'react';

import { NavBar } from 'components/NavBar/NavBar';

interface PageProps {
    component: React.FC;
    pageProps: any;
}

export const Page = (props: PageProps) => {

    const { component: Component, pageProps } = props;

    return <div className={'w-full'}>
        <NavBar/>
        <Component {...pageProps} />
    </div>;
};