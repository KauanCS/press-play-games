import styled from 'styled-components';

import { Carousel as AntCarousel } from 'antd';

import {
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';

import CustomButton from '../../../../../../components/custom-button';

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
  display: flex !important;
  flex-direction: column;
  gap: 10px;
  align-items: ${(props) => (props.end ? 'flex-end' : 'flex-start')};
  padding: 80px;
  justify-content: center;
  max-height: 85vh;
  height: 85vh;
  overflow: hidden;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: ${(props) => props.position};
  
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    height: 500px;
  }
`;

export const Text = styled.h1`
  color: ${(props) => props.theme.color.white};
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
`;

export const SubText = styled.h2`
  color: ${(props) => props.theme.color.white};
  width: 600px;
  text-align: ${(props) => (props.end && 'end')};
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
`;

export const Carousel = styled(AntCarousel)`
  & {
    width: 100%;
  }
`;

export const Button = styled(CustomButton)`
  && {
    color: ${(props) => props.theme.color.black};
  }
`;

export const WrapButton = styled.a``;

export const IconLeftArrow = styled(FaAngleLeft)``;

export const IconRightArrow = styled(FaAngleRight)``;
