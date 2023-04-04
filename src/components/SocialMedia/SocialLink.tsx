import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { ISocialIcon, ISocialItem } from '../../portfolioConfig.types';

const StyledIcon = styled.div`
  display: flex;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all .2s ease;

  @media (min-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;

const SocialIcon = (props: ISocialIcon) => {
    const { src, altText, scale } = props;
    return <StyledIcon>
        <img src={src} alt={altText} className={'h-10 w-10'} style={{
            transform: `scale(${scale})`,
        }}/>
    </StyledIcon>;
};

const StyledSocialLink = styled(Link)`
  background: transparent;
  padding: 10px;

  &:hover {

    ${StyledIcon} {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;

export const SocialLink = (socialItem: ISocialItem) => {
    const { link, icon } = socialItem;

    return <StyledSocialLink {...link}>
        <SocialIcon {...icon}/>
    </StyledSocialLink>;
};