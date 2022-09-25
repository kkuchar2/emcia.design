import React, {CSSProperties} from 'react';

import {SvgIcon, SvgIconProps} from 'components/SvgIcon/SvgIcon';

import {StyledIconLink} from './style';

interface SvgIconLinkProps {
    href: string;
    target?: string;
    style?: CSSProperties;
    iconStyle?: CSSProperties;
}

export const SvgIconLink = (props: SvgIconLinkProps & SvgIconProps) => {

    const { href, target, iconStyle, ...rest } = props;

    if (!href) {
        return null;
    }

    return <StyledIconLink href={href} target={target}>
        <SvgIcon style={iconStyle} {...rest}/>
    </StyledIconLink>;
};