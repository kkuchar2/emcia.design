import React from 'react';

import styled from 'styled-components';

import { ICertificationItem } from '../../portfolioConfig.types';

const StyledCertificationItem = styled.div`
  color: #1e1e1e;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 60px;
  line-height: 1;
  letter-spacing: 0.03em;

  @media (min-width: 1024px) {
    grid-template-columns: 160px minmax(200px, 1fr);
  }
`;

const DesktopDate = styled.div`
  display: none;
  gap: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: #1E1E1E;

  @media (min-width: 1024px) {
    display: flex;
    height: 40px;
    align-items: center;
  }
`;

const MobileDate = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: #807F7F;
  margin-top: 12px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const CertTitle = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 40px;
`;

const CertName = styled.div`
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  font-weight: 300;
  margin-top: 0.2rem;
  color: #1E1E1E;

  @media (min-width: 1024px) {
    color: #807F7F;
  }
`;

const LeftSide = styled.div`

`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CertificationItem = (props: ICertificationItem) => {
    const { title, name, date } = props;

    return <StyledCertificationItem>
        <LeftSide>
            <DesktopDate>{date}</DesktopDate>
        </LeftSide>
        <RightSide>
            <CertTitle>{title}</CertTitle>
            <CertName>{name}</CertName>
            <MobileDate>{date}</MobileDate>
        </RightSide>
    </StyledCertificationItem>;
};