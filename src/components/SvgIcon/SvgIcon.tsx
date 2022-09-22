import React, {CSSProperties} from "react";

import {StyledReactSVG} from "./style";

export interface SvgIconProps {
    icon: string;
    fill?: string;
    hoverFill?: string;
    color?: string;
    hoverColor?: string;
    style?: CSSProperties;
    className?: string;
}

export const SvgIcon = (props: SvgIconProps) => {

    const { icon, style, ...rest } = props;

    return <StyledReactSVG src={icon} style={style} {...rest} />;
};