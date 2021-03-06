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
  NotificationBox,
  IconBars,
  IconCart,
  WrapperCart,
} from './styles';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenOrCloseMenu = () => setIsMenuOpen(!isMenuOpen);

  const history = useHistory();

  const redirectToHome = () => history.push('/');

  const redirectToHowItWorks = () => history.push('/como-funciona');

  const redirectToCatalogue = () => history.push('/catalogo');

  const redirectToContact = () => history.push('/contato');

  const redirectToCart = () => history.push('/carrinho');

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

          <ContainerItem onClick={() => redirectToContact()}>
            <MenuItem>Contato</MenuItem>
          </ContainerItem>

          <ContainerItem>
            <MenuItem>Assinar</MenuItem>
          </ContainerItem>

          <ContainerItem onClick={() => redirectToCart()}>
            <WrapperCart>
              <IconCart />
              <NotificationBox />
            </WrapperCart>
          </ContainerItem>

          <IconBars onClick={handleOpenOrCloseMenu} />
        </ContainerMenuItems>
      </ContainerMenu>

      <ContainerResponsiveItem show={isMenuOpen}>
        <MenuItem onClick={() => redirectToHome()}>Quem somos</MenuItem>
        <MenuItem onClick={() => redirectToHowItWorks()}>Como funciona</MenuItem>
        <MenuItem onClick={() => redirectToCatalogue()}>Catalogo</MenuItem>
        <MenuItem onClick={() => redirectToContact()}>Contato</MenuItem>
        <MenuItem>Assinar</MenuItem>
      </ContainerResponsiveItem>
    </Container>
  );
};

export default HeaderComponent;
