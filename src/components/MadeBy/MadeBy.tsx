import React from 'react';

import styled from 'styled-components';

const StyledMadeBy = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  color: #F1F1F1;
`;

const StyledYear = styled.div`
  display: flex;
  gap: 1px;
`;

export const MadeBy = () => {
    return <StyledMadeBy>
        <StyledYear>
            <div className={'text-sm'}>{'©'}</div>
            <div className={'text-sm'}>{'2022'}</div>
        </StyledYear>
        <div className={'text-sm'}>{'Emilia Markiewicz'}</div>
    </StyledMadeBy>;
};