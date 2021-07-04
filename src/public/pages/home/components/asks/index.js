import React from 'react';

import {
  Container,
  Divider,
  Title,
} from './styles';

import {
  ASKS_TITLE,
} from '../../../../constants/public-home';

import CollapseComponent from './collapse-component';

const Asks = () => (
  <Container>
    <Divider />
    <Title>{ASKS_TITLE}</Title>
    <CollapseComponent />
  </Container>
);

export default Asks;
