import React from 'react';

import Link from 'next/link';

import { useMainContext } from '../../MainContext';
import { INavBarItem } from '../../portfolioConfig.types';

import styles from './NavBarItem.module.scss';

interface INavbarItemProps {
    index: number;
}

export const NavBarItem = (item: INavBarItem & INavbarItemProps) => {

    const { title, link, index } = item;

    const { navbarOpened } = useMainContext();

    return <Link className={`${styles.navbarItem} ${navbarOpened ? styles.navbarOpened : styles.navbarClosed}`}
        href={link}
        title={title}
        style={{ '--index': index } as React.CSSProperties}>
        {title.toLowerCase()}
    </Link>;
};