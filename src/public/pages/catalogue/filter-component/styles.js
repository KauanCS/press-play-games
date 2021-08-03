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

export const ContainerRow = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
  }
`;

export const ContainerItemFilter = styled.div`
  display: flex;
  margin-top: 10px;
  width: 50%;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: ${(props) => !props.responsiveRow && 'column'};
    width: 100%;
  }
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

export const CheckboxGroup = styled(AntCheckbox.Group)`
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    display: flex;
  }
`;

export const Switch = styled(AntSwitch)`
  max-width: 50px;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  margin-right: 10px;
`;
