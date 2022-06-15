import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  ContainerIcon,
  IconHome,
  IconGame,
  IconOrders,
  IconProfile,
  Text,
} from './styles';

const MobileFooter = () => {
  const history = useHistory();

  const pushPage = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <ContainerIcon onClick={() => pushPage('/')}>
        <IconHome />
        <Text>Home</Text>
      </ContainerIcon>
      <ContainerIcon onClick={() => pushPage('/catalogo')}>
        <IconGame />
        <Text>Lista de jogos</Text>
      </ContainerIcon>
      <ContainerIcon onClick={() => pushPage('/historico')}>
        <IconOrders />
        <Text>Pedidos</Text>
      </ContainerIcon>
      <ContainerIcon onClick={() => pushPage('/minha-conta')}>
        <IconProfile />
        <Text>Perfil</Text>
      </ContainerIcon>
    </Container>
  );
};

export default MobileFooter;
