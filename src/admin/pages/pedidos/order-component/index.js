import React, { useState, useEffect } from 'react';

import {
  Container,
} from './styles';

import OrderTitle from './order-titles';
import OrderContainer from './order-items';

import api from '../../../../services/api';

const OrderComponent = () => {
// Buscar tipos de contas
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('orders/all').then((res) => {
      debugger;
      setOrders(res.data.payload);
    }).catch((err) => {
      //
    });
  }, []);

  // Buscar pedidos
  return (
    <Container>
      <OrderTitle />
      <OrderContainer orders={orders} />
    </Container>
  );
};

export default OrderComponent;
