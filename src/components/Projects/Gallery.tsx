import React, { useCallback } from 'react';

import { useScreenWidth } from 'hooks/use-screen';
import styled from 'styled-components';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DribbleShot } from '../../portfolioConfig.types';

import 'swiper/css';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: clamp(250px, 45vw, 600px);
  overflow: visible;
`;

const StyledSwiperSlide = styled(SwiperSlide)<{ image: string }>`
  display: grid;
  place-items: center;
  background-image: url(${props => props.image});
  background-size: cover;

  &:hover {
    cursor: pointer;
  }

  &.swiper-slide-active {
    transform: scale(1.1);
    z-index: 2;
    transition: transform 0.3s ease;
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  overflow: visible;
`;

interface GalleryCarouselProps {
    shots: DribbleShot[]
}

const GalleryCarousel = (props: GalleryCarouselProps) => {

    const { shots } = props;

    const screenWidth = useScreenWidth();

    const getSlidesPerView = useCallback(() => {
        if (screenWidth > 1920) {
            return 2.5;
        }
        if (screenWidth > 1280) {
            return 2.2;
        }
        if (screenWidth > 1024) {
            return 1.7;
        }
        if (screenWidth > 900) {
            return 2;
        }
        if (screenWidth > 768) {
            return 2;
        }
        return 1.5;
    }, [screenWidth]);

    return <Container>
        <StyledSwiper
            slidesPerView={getSlidesPerView()}
            loop={false}
            keyboard={{
                enabled: true,
            }}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Keyboard, Pagination, Navigation]}>
            {shots.map((shot, index) => {
                return <StyledSwiperSlide
                    onClick={() => window.open(shot.link, '_blank')}
                    key={index}
                    image={shot.image}/>;
            })}
        </StyledSwiper>
    </Container>;
};

export default GalleryCarousel;