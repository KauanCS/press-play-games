import styled from 'styled-components';

import {
  Input as AntInput,
  Checkbox as AntCheckbox,
  Switch as AntSwitch,
} from 'antd';

export const ContainerLeftside = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  && .ant-checkbox + span {
    color: ${(props) => props.theme.color.white};
  }
`;

export const ContainerItemFilter = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ContainerSearchFilter = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
  }
`;

export const Input = styled(AntInput)``;

export const Checkbox = styled(AntCheckbox)``;

export const Switch = styled(AntSwitch)``;

export const Label = styled.p`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  margin-right: 10px;
`;
