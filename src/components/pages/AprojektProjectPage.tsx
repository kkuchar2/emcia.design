'use client';

import React from 'react';

import { ProjectShowcasePage } from 'components/pages/ProjectShowcasePage';
import { aprojektImages } from 'projects/aprojekt/images';

export const AprojektProjectPage = () => {
  return (
    <ProjectShowcasePage
      title={'aprojekt'}
      subtitle={
        'Fiber cables company website redesign — UI case study focused on responsive experience across devices.'
      }
      images={aprojektImages}
      galleryLabel={'Aprojekt project gallery'}
    />
  );
};
