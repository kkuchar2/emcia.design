import React from 'react';

import styled from 'styled-components';

import { DribbleShot } from '../../portfolioConfig.types';

export const StyledDribbleShotItem = styled.div`

`;

interface DribbleShotItemProps {
    shot: DribbleShot
}

export const DribbleShotItem = (props: DribbleShotItemProps) => {

    const { shot } = props;

    const { name, link, image } = shot;

    return <StyledDribbleShotItem>
        <img src={image} alt={name}/>
    </StyledDribbleShotItem>;
};
