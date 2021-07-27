import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerEnd,
  Text,
  Price,
  IconTrash,
} from './styles';

const ItemCart = (props) => {
  const {
    planName,
    planPrice,
  } = props;
  return (
    <Container>
      <Text>{planName}</Text>
      <ContainerEnd>
        <Price>{`R$ ${planPrice}`}</Price>
        <IconTrash />
      </ContainerEnd>
    </Container>
  );
};

ItemCart.propTypes = {
  planName: PropTypes.string.isRequired,
  planPrice: PropTypes.string.isRequired,
};

export default ItemCart;
