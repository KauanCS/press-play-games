import React from 'react';

import {
  Container,
  ContainerTitle,
  Title,
} from './styles';

const CollapseTitle = () => (
  <Container>
    <ContainerTitle>
      <Title>Usuário</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Status</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Tipo</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Plataforma</Title>
    </ContainerTitle>

    <ContainerTitle bigSize>
      <Title>E-mail</Title>
    </ContainerTitle>

    <ContainerTitle bigSize>
      <Title>Telefone</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Trocas</Title>
    </ContainerTitle>

    <ContainerTitle>
      <Title>Vencimento</Title>
    </ContainerTitle>
  </Container>
);

export default CollapseTitle;
