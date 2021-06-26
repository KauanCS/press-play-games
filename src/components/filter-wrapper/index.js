import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerContent,
  ContainerTitle,
  Title,
  FilterIcon,
} from './styles';

const FilterWrapper = ({ children }) => (
  <Container>
    <ContainerTitle>
      <FilterIcon />
      <Title>Filtros</Title>
    </ContainerTitle>

    <ContainerContent>
      {children}
    </ContainerContent>

  </Container>
);

FilterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterWrapper;
