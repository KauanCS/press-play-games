import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerRedirect,
  IconWhatsapp,
  Text,
} from './styles';

const CardContact = (props) => {
  const {
    name,
    phone,
    link,
  } = props;
  return (
    <ContainerRedirect href={link} target="_blank" rel="noopener noreferrer">
      <Container>
        <Text>{name}</Text>
        <IconWhatsapp />
        <Text>{phone}</Text>
      </Container>
    </ContainerRedirect>
  );
};

CardContact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardContact;
