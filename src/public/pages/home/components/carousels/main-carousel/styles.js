import styled from 'styled-components';

import { Carousel as AntCarousel } from 'antd';

import {
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  position: relative;
  & .ant-carousel {
    width: 100%;
  }

  .ant-carousel .slick-prev {
    left: 25px;
    z-index: 1;
    color: white;
    font-size: 18px;
  }
  .ant-carousel .slick-next {
    right: 25px;
    z-index: 1;
    font-size: 18px;
    color: white;
  }

  .ant-carousel .slick-prev, .ant-carousel .slick-next {
    height: 30px;
    width: 30px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  max-height: 85vh;
`;

export const Image = styled.img`
  max-width: 100vw;
`;

export const Carousel = styled(AntCarousel)`
  & {
    width: 100%;
  }
`;

export const IconLeftArrow = styled(FaAngleLeft)``;

export const IconRightArrow = styled(FaAngleRight)``;
