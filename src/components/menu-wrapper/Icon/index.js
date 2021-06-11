import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = ({ iconName }) => {
  const EnhancedIcon = styled(iconName)`
  color: white;
  font-size: 22px;
  margin-right: 10px;
`;
  return <EnhancedIcon />;
};

Icon.propTypes = {
  iconName: PropTypes.func.isRequired,
};
export default Icon;
