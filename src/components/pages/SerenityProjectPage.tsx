'use client';

import React from 'react';

import { ProjectShowcasePage } from 'components/pages/ProjectShowcasePage';
import { serenityImages } from 'projects/serenity/images';

export const SerenityProjectPage = () => {
  return (
    <ProjectShowcasePage
      title={'serenity'}
      subtitle={
        'Candlemaker store mobile app — UI/UX case study connecting craftspeople with customers who value unique, high-quality products.'
      }
      images={serenityImages}
      galleryLabel={'Serenity project gallery'}
      atmosphere={'candle'}
    />
  );
};
