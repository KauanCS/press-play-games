import React from 'react';

import {
  Container,
  Title,
} from './styles';

import Filter from './filter-component';
import Clients from './clients-component';

const Games = () => {
  const title = 'Clientes';
  return (
    <Container>
      <Title>{title}</Title>
      <Filter />
      <Clients />
    </Container>
  );
};

export default Games;
