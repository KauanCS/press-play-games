import React from 'react';

import {
  Container,
} from './styles';

import Header from './components/header';
import Carousels from './components/carousels';
import Apresentation from './components/apresentation';

const HomePage = () => (
  <Container>
    <Header />
    <Carousels />
    <Apresentation />
  </Container>
);

export default HomePage;
