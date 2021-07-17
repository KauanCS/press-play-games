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

    <ContainerTitle>
      <Title>Nome</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Plataforma</Title>
    </ContainerTitle>

    <ContainerTitle bigSize>
      <Title>Contato</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Tipo de conta</Title>
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
