import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { ISocialItem } from '../../portfolioConfig.types';

const StyledSocialLink = styled(Link)`
  background: #ffffff;
  outline: none;
  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.2);
  }

  &:focus-visible {
    transform: scale(1.12);
    box-shadow: 0 0 0 2px #1e1e1e, 0 0 0 4px #f1f1f1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:focus-visible {
      transform: none;
    }
  }
`;

export const SocialLink = (socialItem: ISocialItem) => {
    const { link, icon } = socialItem;
    const { twStyle, width, height, component: SVGComponent } = icon;

    return <StyledSocialLink
        className={`flex items-center justify-center rounded-full bg-[#F1F1F1] ${twStyle}`}
        {...link}
    >
        <SVGComponent width={width} height={height} aria-hidden={true}/>
    </StyledSocialLink>;
};
