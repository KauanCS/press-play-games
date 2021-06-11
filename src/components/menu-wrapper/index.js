import React from 'react';
import PropTypes from 'prop-types';
import {
  FaClipboardList,
  FaPaperPlane,
  FaUsers,
  FaGamepad,
} from 'react-icons/fa';
import ImageLogoController from '../../static/images/controlelogo.png';
import ImageLogoName from '../../static/images/logo-frase.png';
import Icon from './Icon';

import {
  AstronautIcon,
  ButtonLink,
  Container,
  ContainerBody,
  ContainerMenu,
  ContainerLinks,
  ContainerLogo,
  ContainerUser,
  ImageController,
  ImageText,
  Username,
} from './styles';

const MenuWrapper = ({ children }) => {
  const userName = 'Nome do usuario';
  return (
    <Container>

      <ContainerMenu>
        <ContainerLogo>
          <ImageController src={ImageLogoController} />
          <ImageText src={ImageLogoName} />
        </ContainerLogo>

        <ContainerUser>
          <AstronautIcon />
          <Username>{userName}</Username>
        </ContainerUser>

        <ContainerLinks>
          <ButtonLink to="/pedidos">
            <Icon iconName={FaClipboardList} />
            Pedidos
          </ButtonLink>
          <ButtonLink to="/enviados">
            <Icon iconName={FaPaperPlane} />
            Enviados
          </ButtonLink>
          <ButtonLink to="/clientes">
            <Icon iconName={FaUsers} />
            Clientes
          </ButtonLink>
          <ButtonLink to="/games">
            <Icon iconName={FaGamepad} />
            Games
          </ButtonLink>
        </ContainerLinks>
      </ContainerMenu>

      <ContainerBody>
        {children}
      </ContainerBody>

    </Container>
  );
};

MenuWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuWrapper;
