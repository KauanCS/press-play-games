import React from 'react';
import {
  Container,
  DatePicker,
} from './styles';

const RangeDatePicker = () => {
  const { RangePicker } = DatePicker;

  return (
    <Container>
      <RangePicker />
    </Container>
  );
};

export default RangeDatePicker;
