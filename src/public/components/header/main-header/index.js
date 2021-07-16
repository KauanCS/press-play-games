import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();

  const redirectToHome = () => history.push('/');

  const redirectToHowItWorks = () => history.push('/como-funciona');

  const redirectToCatalogue = () => history.push('/catalogo');

  return (
    <Container>

      <ContainerMenu>
        <ContainerTitle onClick={() => redirectToHome()}>
          <TitlePressPlay>PRESSPLAY</TitlePressPlay>
          <TitleGames>GAMES</TitleGames>
        </ContainerTitle>

        <ContainerMenuItems>
          <ContainerItem onClick={() => redirectToHome()} href="#who_we_are_section">
            <MenuItem>Quem somos</MenuItem>
          </ContainerItem>

          <ContainerItem onClick={() => redirectToHowItWorks()}>
            <MenuItem>Como funciona</MenuItem>
          </ContainerItem>

          <ContainerItem onClick={() => redirectToCatalogue()}>
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
