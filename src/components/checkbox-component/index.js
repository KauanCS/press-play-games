import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from './styles';

const CheckboxComponent = (props) => {
  const {
    text,
  } = props;
  const [isActive, setIsActive] = useState(true);

  console.log(isActive);

  return (
    <Checkbox
      checked={isActive}
      onChange={() => setIsActive(!isActive)}
    >
      {text}
    </Checkbox>
  );
};

CheckboxComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CheckboxComponent;
