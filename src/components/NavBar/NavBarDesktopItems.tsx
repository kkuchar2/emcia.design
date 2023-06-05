import React, { useMemo } from 'react';

import { NavBarItem } from 'components/NavBar/NavBarItem';

import { INavbarConfig } from '../../portfolioConfig.types';

import styles from './NavBarDesktopItems.module.scss';

export const NavBarDesktopItems = (props: INavbarConfig) => {

    const { ...config } = props;

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem index={index} key={index} {...item}/>);
    }, []);

    return <div className={styles.navbarDesktopItems}>
        {items}
    </div>;
};