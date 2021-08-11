import React from 'react';

import {
  Container,
  ContainerGames,
  Title,
  Divider,
} from './styles';

import CardGame from './card-game';

const Historic = () => {
  const title = 'Histórico de pedidos';
  return (
    <Container>
      <Title>{title}</Title>
      <Divider />
      <ContainerGames>
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
      </ContainerGames>
    </Container>
  );
};

export default Historic;
