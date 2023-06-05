import React from 'react';

import styles from './HamburgerButton.module.scss';

interface HamburgerButtonProps {
    onClick?: () => void;
    navbarOpened?: boolean;
}

export const HamburgerButton = (props: HamburgerButtonProps) => {

    const { onClick, navbarOpened } = props;

    return <button className={`${styles.hamburgerButton} ${navbarOpened ? styles.navbarOpened : ''}`}
        title={'Menu'} name={'Menu'} onClick={onClick}>
        <span className={`${styles.topLine} ${navbarOpened ? styles.navbarOpened : ''}`}/>
        <span className={`${styles.bottomLine} ${navbarOpened ? styles.navbarOpened : ''}`}/>
    </button>;
};