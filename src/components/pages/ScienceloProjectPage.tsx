'use client';

import React from 'react';

import { ProjectShowcasePage } from 'components/pages/ProjectShowcasePage';
import { scienceloImages } from 'projects/sciencelo/images';

export const ScienceloProjectPage = () => {
  return (
    <ProjectShowcasePage
      title={'sciencelo'}
      subtitle={
        'Educational platform landing page — UI case study. Scroll to view the full composition.'
      }
      images={scienceloImages}
      galleryLabel={'Sciencelo project gallery'}
      atmosphere={'sciencelo'}
    />
  );
};
