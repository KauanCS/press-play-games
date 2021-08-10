import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerHeader,
  ContainerRow,
  Divider,
  Text,
  TitleHeader,
  IconRefresh,
} from './styles';

import ItemCart from './ItemCart';
import TotalCart from './TotalCart';

const Cart = () => {
  const history = useHistory();

  const redirectToHome = () => history.push('/');

  return (
    <Container>
      <ContainerLeft>
        <ContainerHeader>
          <TitleHeader>Carrinho</TitleHeader>
        </ContainerHeader>
        <ItemCart
          planName="PS4 - PLATINA - TRIMESTRAL"
          planPrice="284.90"
        />
        <ContainerRow
          pointer
          center
          onClick={() => redirectToHome()}
          href="#plans_section"
        >
          <IconRefresh />
          <Text>Atualizar plano</Text>
        </ContainerRow>
      </ContainerLeft>

      <Divider type="vertical" />

      <ContainerRight>
        <ContainerHeader>
          <TitleHeader>TOTAL NO CARRINHO</TitleHeader>
        </ContainerHeader>
        <TotalCart />

      </ContainerRight>

    </Container>
  );
};

export default Cart;
