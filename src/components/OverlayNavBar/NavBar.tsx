import { NavBarItem } from 'components/OverlayNavBar/NavBarItem';
import { useScreenWidth } from 'hooks/use-screen';
import React, { useMemo } from 'react';

import { INavbarConfig } from '../../projectConfig';

interface NavbarProps {
    className?: string;
}

export const NavBar = (props: INavbarConfig & NavbarProps) => {

    const { className, ...config } = props;

    const screenWidth = useScreenWidth();

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem key={index} {...item}/>);
    }, [screenWidth]);

    return <div className={className}>
        {items}
    </div>;
};