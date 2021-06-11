import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Checkbox,
} from './styles';

const CustomCheckbox = (props) => {
  const {
    text,
  } = props;

  return (
    <Container>
      <Checkbox>{text}</Checkbox>
    </Container>
  );
};

CustomCheckbox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CustomCheckbox;
