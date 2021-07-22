import React from 'react';

import {
  Container,
} from './styles';

import OrderTitle from './order-titles';
import OrderItems from './order-items';

const OrderComponent = () => (
  <Container>
    <OrderTitle />
    <OrderItems />
  </Container>
);

export default OrderComponent;
