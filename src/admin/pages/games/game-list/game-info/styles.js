import styled from 'styled-components';

import {
  Input as AntInput,
  Select as AntSelect,
  DatePicker as AntDatePicker,
  InputNumber as AntInputNumber,
} from 'antd';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContainerRow = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-left: 20px;
`;

export const ContainerLeftSide = styled.div`
  display: flex;
  flex: 1.5;
`;

export const ContainerRightSide = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled(AntInput)``;

export const TextArea = styled(AntInput.TextArea)`
  &&& {
    height: 100%;
  }
`;

export const Select = styled(AntSelect)`
  width: 100%;
`;

export const DatePicker = styled(AntDatePicker)``;

export const InputNumber = styled(AntInputNumber)`
  width: 100%;
`;
