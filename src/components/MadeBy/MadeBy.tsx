import React from 'react';

import styled from 'styled-components';

const StyledMadeBy = styled.p`
  margin-top: 50px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  color: #F1F1F1;
`;

const StyledYear = styled.span`
  display: flex;
  gap: 1px;
`;

export const MadeBy = () => {
    const year = new Date().getFullYear();

    return <StyledMadeBy>
        <StyledYear>
            <span className={'text-sm'}>{'©'}</span>
            <span className={'text-sm'}>{year}</span>
        </StyledYear>
        <span className={'text-sm'}>{'Emilia Markiewicz'}</span>
    </StyledMadeBy>;
};
