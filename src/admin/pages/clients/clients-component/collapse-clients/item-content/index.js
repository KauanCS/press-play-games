import React from 'react';

import {
  Container,
  ContainerHeaderGames,
  ContainerListGame,
  ContainerGame,
  ContainerFields,
  TitleHeader,
  TextRemovedGame,
  Tooltip,
} from './styles';

const ItemContent = () => {
  const gameName = 'Call of Duty Black Ops Cold War Conta 8';
  return (
    <Container>
      <ContainerHeaderGames>
        <TitleHeader bigSize>Game</TitleHeader>
        <TitleHeader>Primária 1</TitleHeader>
        <TitleHeader>Primária 2</TitleHeader>
        <TitleHeader>Secundária</TitleHeader>
        <TitleHeader>E-mail</TitleHeader>
        <TitleHeader>Senha</TitleHeader>
      </ContainerHeaderGames>

      <ContainerListGame>
        <ContainerGame>
          <ContainerFields bigSize>
            <Tooltip title={gameName}>
              <TextRemovedGame>{gameName}</TextRemovedGame>
            </Tooltip>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>Kaio</TextRemovedGame>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>Julio</TextRemovedGame>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>Jeziel</TextRemovedGame>
          </ContainerFields>

          <ContainerFields>
            <Tooltip title="7ana.mohanti@furnitt.com">
              <TextRemovedGame>7ana.mohanti@furnitt.com</TextRemovedGame>
            </Tooltip>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>game123456</TextRemovedGame>
          </ContainerFields>
        </ContainerGame>
      </ContainerListGame>

    </Container>
  );
};

export default ItemContent;
