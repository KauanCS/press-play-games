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
  ];

  // const testArrayAutocomplete = [
  //   { value: '1', label: 'A' },
  //   { value: '2', label: 'B' },
  //   { value: '3', label: 'C' },
  //   { value: '4', label: 'D' },
  //   { value: '5', label: 'E' },
  // ];

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
