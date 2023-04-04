import React from 'react';

import styled from 'styled-components';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import { DribbleShot } from '../../portfolioConfig.types';

import 'swiper/css';
import 'swiper/css/pagination';

interface GalleryCarouselProps {
    shots: DribbleShot[]
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

const ImageWrapper = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: grid;
  place-items: center;
  position: relative;
  height: 100%;

  &:hover {
    cursor: grab;

    &.swiper-slide-active {
      cursor: pointer;
    }
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  padding-bottom: 30px;

  .swiper-pagination {
    --swiper-theme-color: #1e1e1e;
  }
`;

const GalleryCarousel = (props: GalleryCarouselProps) => {

    const { shots } = props;

    return <Container>
        <StyledSwiper
            slidesPerView={2.2}
            breakpoints={{
                960: {
                    slidesPerView: 2.2
                },
                720: {
                    slidesPerView: 1.8,
                    spaceBetween: 20
                },
                540: {
                    slidesPerView: 1.8,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
            }}
            loop={false}
            keyboard={{
                enabled: true,
            }}
            centeredSlides={true}
            pagination={{
                dynamicBullets: true,
            }}
            onClick={(swiper: SwiperClass) => {
                if (swiper.clickedIndex === swiper.activeIndex) {
                    window.open(shots[swiper.activeIndex].link, '_blank');
                } else {
                    swiper.slideTo(swiper.clickedIndex);
                }
            }}
            modules={[Keyboard, Pagination, Navigation]}>
            {shots.map((shot, index) => {
                return <StyledSwiperSlide
                    key={index}>
                    <ImageWrapper>
                        <Image src={shot.image} alt={shot.name}/>
                    </ImageWrapper>
                </StyledSwiperSlide>;
            })}
        </StyledSwiper>
    </Container>;
};

export default GalleryCarousel;