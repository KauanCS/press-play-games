import React from 'react';

import {
  Container,
} from './styles';

import Header from './components/header';
import Carousels from './components/carousels';
import Apresentation from './components/apresentation';
import HowItWorks from './components/how-it-works';
import Advantages from './components/advantages';

const HomePage = () => (
  <Container>
    <Header />
    <Carousels />
    <Apresentation />
    <HowItWorks />
    <Advantages />
  </Container>
);

export default HomePage;
