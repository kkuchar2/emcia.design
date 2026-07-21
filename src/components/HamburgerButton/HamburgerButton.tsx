import React from 'react';

import styled from 'styled-components';

interface HamburgerButtonProps {
    onClick?: () => void;
    navbarOpened?: boolean;
}

interface StyledHamburgerButtonProps {
    $navbarOpened: boolean;
    $gap?: number;
}

const StyledHamburgerButton = styled.button<StyledHamburgerButtonProps>`
    align-items: center;
    font-size: 16px;
    height: 60px;
    width: 60px;
    position: fixed;
    top: 50px;
    right: calc(40px - (var(--scrollbar-width) * var(--scrollbar-width-multiplier)));
    transform: translateY(-50%);
    z-index: 5;
    margin: 0;
    padding: 0;
    display: block;
    border: none;
    background: transparent;
    -webkit-tap-highlight-color: transparent;
    mix-blend-mode: ${({ $navbarOpened }) => ($navbarOpened ? 'unset' : 'difference')};
    opacity: var(--navbar-opacity);
    transition: opacity 0.8s ease;
    outline: none;

    &:hover {
        cursor: pointer;

        > span {
            background-color: ${({ $navbarOpened }) => ($navbarOpened ? '#2c2c2c' : '#ffffff')};
        }
    }

    &:focus-visible {
        border-radius: 4px;
        box-shadow: 0 0 0 2px ${({ $navbarOpened }) => ($navbarOpened ? '#2c2c2c' : '#f1f1f1')};
    }

    @media (min-width: 1024px) {
        display: none;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;

        > span {
            transition: none;
        }
    }
`;

const StyledHamburgerButtonTopLine = styled.span<StyledHamburgerButtonProps>`
    width: 50%;
    height: 2px;
    position: absolute;
    left: 50%;
    top: ${({ $navbarOpened, $gap }) => (!$navbarOpened ? `calc(50% - ${$gap}px)` : '50%')};
    transform: ${({ $navbarOpened }) => ($navbarOpened ? 'translateX(-50%) rotate(-45deg)' : 'translateX(-50%) rotate(0deg)')};
    background-color: ${props => (props.$navbarOpened ? '#2c2c2c' : '#dfdfdf')};
    transition: all 0.3s cubic-bezier(0.68, 0.25, 0.265, 0.55);
`;

const StyledHamburgerButtonBottomLine = styled.span<StyledHamburgerButtonProps>`
    width: 50%;
    height: 2px;
    position: absolute;
    top: ${({ $navbarOpened, $gap }) => (!$navbarOpened ? `calc(50% + ${$gap}px)` : '50%')};
    left: 50%;
    transform: ${({ $navbarOpened }) => ($navbarOpened ? 'translateX(-50%) rotate(45deg)' : 'translateX(-50%) rotate(0deg)')};
    background-color: ${props => (props.$navbarOpened ? '#2c2c2c' : '#dfdfdf')};
    transition: all 0.3s cubic-bezier(0.68, -0.25, 0.265, 0.55);
`;

export const HamburgerButton = (props: HamburgerButtonProps) => {
    const { onClick, navbarOpened = false } = props;

    return <StyledHamburgerButton
        type={'button'}
        aria-label={navbarOpened ? 'Close menu' : 'Open menu'}
        aria-expanded={navbarOpened}
        aria-controls={'mobile-navigation'}
        title={navbarOpened ? 'Close menu' : 'Open menu'}
        onClick={onClick}
        $navbarOpened={navbarOpened}
    >
        <StyledHamburgerButtonTopLine aria-hidden={true} $navbarOpened={navbarOpened} $gap={5}/>
        <StyledHamburgerButtonBottomLine aria-hidden={true} $navbarOpened={navbarOpened} $gap={5}/>
    </StyledHamburgerButton>;
};
