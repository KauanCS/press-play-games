import React from 'react';

import {
  Container,
} from './styles';

import TopHeader from './top-header';
import MainHeader from './main-header';

const HeaderComponent = () => (
  <Container>
    <TopHeader />
    <MainHeader />
  </Container>
);

export default HeaderComponent;
