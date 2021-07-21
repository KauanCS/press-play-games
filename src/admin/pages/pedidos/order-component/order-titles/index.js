import React from 'react';

import {
  Container,
  ContainerTitle,
  Title,
} from './styles';

const OrderTitles = () => (
  <Container>
    <ContainerTitle>
      <Title>Usuário</Title>
    </ContainerTitle>

    <ContainerTitle size="0.2">
      <Title>Troca</Title>
    </ContainerTitle>

    <ContainerTitle size="1.5">
      <Title>Jogo</Title>
    </ContainerTitle>

    <ContainerTitle size="0.5">
      <Title>Console</Title>
    </ContainerTitle>

    <ContainerTitle size="1.5">
      <Title>Contato</Title>
    </ContainerTitle>

    <ContainerTitle size="1.5">
      <Title>Observação</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Data</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Hora</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Suporte</Title>
    </ContainerTitle>
  </Container>
);

export default OrderTitles;
