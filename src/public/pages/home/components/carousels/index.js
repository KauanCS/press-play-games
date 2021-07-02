import React from 'react';

import {
  Container,
} from './styles';

import MainCarousel from './main-carousel';
import SecondaryCarousel from './secondary-carousel';

const Carousels = () => {
  const title = 'aa';
  return (
    <Container>
      <MainCarousel />
      <SecondaryCarousel />
      {title}
    </Container>
  );
};

export default Carousels;
