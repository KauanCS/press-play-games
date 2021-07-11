import styled from 'styled-components';
import CustomCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Container = styled.div`
  max-width: 80vw;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerInside = styled.div`
  position: relative;
  z-index: 10;
  flex: 1;
  width: 100%;
`;

export const Carousel = styled(CustomCarousel)`
  @media only screen and (min-device-width : 1024px) {
    &&.react-multi-carousel-list {
      display: flex;
      justify-content: center;
    }
  }
`;
