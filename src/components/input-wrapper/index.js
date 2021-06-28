import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Typography,
} from './styles';

const InputWrapper = (props) => {
  const {
    title,
    children,
    titleLevel,
    flexSize,
  } = props;
  const { Title } = Typography;
  return (
    <Container flexSize={flexSize}>
      <Title level={titleLevel}>{title}</Title>
      {children}
    </Container>
  );
};

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  titleLevel: PropTypes.number,
  flexSize: PropTypes.number,
};

InputWrapper.defaultProps = {
  titleLevel: 5,
  flexSize: 1,
};

export default InputWrapper;
