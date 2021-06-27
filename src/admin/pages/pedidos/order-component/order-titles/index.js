import React from 'react';

import {
  Checkbox,
  Container,
  ContainerTitle,
  Title,
} from './styles';

const OrderTitles = () => (
  <Container>
    <ContainerTitle>
      <Checkbox />
      <Title>Usuário</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Plano</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Plataforma</Title>
    </ContainerTitle>

    <ContainerTitle bigSize>
      <Title>Telefone</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Primária 1</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Primária 2</Title>
    </ContainerTitle>

    <ContainerTitle bigSize>
      <Title>Observação</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Suporte</Title>
    </ContainerTitle>
  </Container>
);

export default OrderTitles;
