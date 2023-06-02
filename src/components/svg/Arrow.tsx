import React from 'react';

import { SvgIconProps } from 'components/svg/SvgIconProps';

interface ArrowProps extends SvgIconProps {
    strokeColor?: string;
}

export const Arrow = (props: ArrowProps) => {

    const { className, strokeColor = '#595959' } = props;

    return <svg className={className} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 310 256'} shapeRendering={'geometricPrecision'}>
        <line x1={'0'} y1={'128'} x2={'300'} y2={'128'}
            fill={'none'} stroke={strokeColor} strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'10'}/>
        <polyline points={'205 80 300 128 205 180'}
            fill={'none'} stroke={strokeColor} strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'10'}/>
    </svg>;
};