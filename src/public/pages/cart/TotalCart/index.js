import React from 'react';

import {
  Button,
  Container,
  ContainerRow,
  Divider,
  Text,
  Price,
  IconArrow,
} from './styles';

const TotalCart = () => (
  <Container>
    <ContainerRow>
      <Text>SUBTOTAL</Text>
      <Price>R$ 284.90</Price>
    </ContainerRow>

    <ContainerRow>
      <Text>DESCONTO</Text>
      <Price>R$ 00.00</Price>
    </ContainerRow>

    <Divider />

    <ContainerRow bold>
      <Text>TOTAL</Text>
      <Price>R$ 284.90</Price>
    </ContainerRow>
    <Button
      type="primary"
      icon={<IconArrow />}
    >
      FINALIZAR
    </Button>
  </Container>
);

export default TotalCart;
