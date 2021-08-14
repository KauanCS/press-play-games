import React from 'react';

import {
  Container,
} from './styles';

import CollapseTitle from './collapse-title';
import CollapseClients from './collapse-clients';

const ClientsComponent = () => (
  <Container>
    <CollapseTitle />
    <CollapseClients />
  </Container>
);

export default ClientsComponent;
