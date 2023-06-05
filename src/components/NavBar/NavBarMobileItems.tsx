import React, { useMemo } from 'react';

import { NavBarItem } from 'components/NavBar/NavBarItem';

import { useMainContext } from '../../MainContext';
import { INavbarConfig } from '../../portfolioConfig.types';

import styles from './NavBarMobileItems.module.scss';

export const NavBarMobileItems = (props: INavbarConfig) => {

    const { ...config } = props;

    const { navbarOpened } = useMainContext();

    const items = useMemo(() => {
        return config.items.map((item, index) => <NavBarItem key={index} index={index} {...item}/>);
    }, []);

    return <div className={`${styles.navbarMobileItems} ${navbarOpened ? styles.opened : ''}`}>
        {items}
    </div>;
};