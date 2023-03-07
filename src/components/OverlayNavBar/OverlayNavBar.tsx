import { NavBarItem } from 'components/NavBar/NavBarItem';
import { useScreenWidth } from 'hooks/use-screen';
import React, { useMemo } from 'react';

import { INavbarConfig } from '../../projectConfig';

interface OverlayNavbarProps {
    className?: string;
}

export const OverlayNavBar = (props: INavbarConfig & OverlayNavbarProps) => {

    const { className, ...config } = props;

    const screenWidth = useScreenWidth();

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem key={index} {...item}/>);
    }, [screenWidth]);

    return <div className={className}>
        {items}
    </div>;
};