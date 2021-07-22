import React from 'react';

import {
  Container,
} from './styles';

import MainCarousel from './main-carousel';
import SecondaryCarousel from './secondary-carousel';

const Carousels = () => (
  <Container>
    <MainCarousel />
    <SecondaryCarousel />
  </Container>
);

export default Carousels;
