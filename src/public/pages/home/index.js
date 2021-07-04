import React from 'react';

import {
  Container,
} from './styles';

import Header from './components/header';
import Carousels from './components/carousels';
import Apresentation from './components/apresentation';
import HowItWorks from './components/how-it-works';
import Advantages from './components/advantages';
import WillPlayHow from './components/will-play-how';
import Asks from './components/asks';

const HomePage = () => (
  <Container>
    <Header />
    <Carousels />
    <Apresentation />
    <HowItWorks />
    <Advantages />
    <WillPlayHow />
    <Asks />
  </Container>
);

export default HomePage;
