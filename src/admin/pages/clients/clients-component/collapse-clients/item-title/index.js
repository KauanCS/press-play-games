import React from 'react';

import {
  Container,
  ContainerTitle,
  Title,
  Tooltip,
} from './styles';

const ItemTitle = () => {
  const emailText = '7ana.mohanti@furnitt.com';

  return (
    <Container>
      <ContainerTitle>
        <Title>ppg1111</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>Ativo</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>Primário</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>PS4</Title>
      </ContainerTitle>

      <ContainerTitle bigSize>
        <Tooltip title={emailText}>
          <Title>{emailText}</Title>
        </Tooltip>
      </ContainerTitle>

      <ContainerTitle bigSize>
        <Title>+55 (16) 99999-9999</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>100</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>25/25/2025</Title>
      </ContainerTitle>

    </Container>
  );
};

export default ItemTitle;
