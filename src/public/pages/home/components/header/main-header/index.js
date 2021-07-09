import React, { useState } from 'react';

import {
  Container,
  ContainerResponsiveItem,
  ContainerMenu,
  ContainerTitle,
  ContainerItem,
  ContainerMenuItems,
  TitlePressPlay,
  TitleGames,
  MenuItem,
  IconBars,
} from './styles';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenOrCloseMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Container>

      <ContainerMenu>
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

          <IconBars onClick={handleOpenOrCloseMenu} />
        </ContainerMenuItems>
      </ContainerMenu>

      <ContainerResponsiveItem show={isMenuOpen}>
        <MenuItem>Quem somos</MenuItem>
        <MenuItem>Como funciona</MenuItem>
        <MenuItem>Catalogo</MenuItem>
        <MenuItem>Contato</MenuItem>
        <MenuItem>Assinar</MenuItem>
      </ContainerResponsiveItem>
    </Container>
  );
};

export default HeaderComponent;
