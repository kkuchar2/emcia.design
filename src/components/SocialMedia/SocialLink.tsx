import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { ISocialIcon, ISocialItem } from '../../portfolioConfig.types';

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f1f1f1;
  transition: all .2s ease;
  line-height: 0;
`;

const SocialIcon = (props: ISocialIcon) => {
    const { src, alt, scale } = props;
    return <StyledIcon>
        <Image
            src={src}
            alt={alt}
            width={35}
            height={35}
            style={{ transform: `scale(${scale})` }}/>
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