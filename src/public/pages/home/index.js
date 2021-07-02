import React from 'react';

import {
  Container,
} from './styles';

import Header from './components/header';
import Carousels from './components/carousels';

const HomePage = () => (
  <Container>
    <Header />
    <Carousels />
  </Container>
);

export default HomePage;
