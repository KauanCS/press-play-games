import React from 'react';

import {
  Container,
} from './styles';

import CollapseTitle from './collapse-title';
import CollapseClients from './collapse-clients';

const ClientsComponent = () => {
  const title = 'AA';
  return (
    <Container>
      <CollapseTitle />
      <CollapseClients />
    </Container>
  );
};

export default ClientsComponent;
