import React from 'react';

import {
  Container,
  Title,
} from './styles';

import FilterComponent from './filter-component';
import OrderComponent from './order-component';

const Pedidos = () => {
  const suporteUsers = [
    { id: '1', name: 'Julio' },
    { id: '2', name: 'Jeziel' },
    { id: '3', name: 'Kaio' },
    { id: '4', name: 'Kaio' },
    { id: '5', name: 'Kaio' },
  ];

  const accountTypes = [
    { id: '1', name: 'Primaria' },
    { id: '2', name: 'Secundaria' },
  ];

  return (
    <Container>
      <Title>Pedidos</Title>
      <FilterComponent
        suporteUsers={suporteUsers}
      />
      <OrderComponent />
    </Container>
  );
};

export default Pedidos;
