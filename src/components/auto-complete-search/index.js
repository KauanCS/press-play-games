import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  AutoComplete,
  InputSearch,
} from './styles';

const AutoCompleteSearch = (props) => {
  const {
    placeholder,
    width,
    options,
  } = props;

  return (
    <Container>
      <AutoComplete
        width={width}
        options={options}
      >
        <InputSearch placeholder={placeholder} />
      </AutoComplete>
    </Container>
  );
};

AutoCompleteSearch.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

AutoCompleteSearch.defaultProps = {
  placeholder: '',
  width: null,
};

export default AutoCompleteSearch;
