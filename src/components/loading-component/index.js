import React from 'react';
import PropTypes from 'prop-types';

import { Spin } from './styles';

const Loading = ({ children, loading, ...rest }) => (
  <Spin {...rest} spinning={loading}>{children}</Spin>
);

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Loading;
