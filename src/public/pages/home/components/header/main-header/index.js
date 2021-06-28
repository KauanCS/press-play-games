import React from 'react';

import {
  Container,
  ContainerTitle,
  ContainerItem,
  ContainerMenuItems,
  TitlePressPlay,
  TitleGames,
  MenuItem,
} from './styles';

const HeaderComponent = () => (
  <Container>

    <ContainerTitle>
      <TitlePressPlay>PRESSPLAY</TitlePressPlay>
      <TitleGames>GAMES</TitleGames>
    </ContainerTitle>

    <ContainerMenuItems>
      <ContainerItem>
        <MenuItem>Quem somos</MenuItem>
      </ContainerItem>

      <ContainerItem>
        <MenuItem>Como funciona</MenuItem>
      </ContainerItem>

      <ContainerItem>
        <MenuItem>Catalogo</MenuItem>
      </ContainerItem>

      <ContainerItem>
        <MenuItem>Contato</MenuItem>
      </ContainerItem>

      <ContainerItem>
        <MenuItem>Assinar</MenuItem>
      </ContainerItem>
    </ContainerMenuItems>

  </Container>
);

export default HeaderComponent;
