import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  Container,
  Select,
} from './styles';

const InputSearch = (props) => {
  const {
    placeholder,
    options,
    multiple,
    allowClear,
    width,
    ...rest
  } = props;

  const { Option } = Select;

  return (
    <Container>
      <Select
        {...rest}
        mode={multiple ? 'multiple' : ''}
        allowClear={allowClear}
        showSearch
        placeholder={placeholder}
        width={width}
        maxTagCount="responsive"
      >
        {_.map(options, (item) => (
          <Option
            key={item.key}
            value={item.key}
          >
            {item.value}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      value: PropTypes.string,
    }),
  ).isRequired,
  multiple: PropTypes.bool,
  allowClear: PropTypes.bool,
  width: PropTypes.string,
};

InputSearch.defaultProps = {
  multiple: false,
  allowClear: true,
  width: '100%',
};

export default InputSearch;
