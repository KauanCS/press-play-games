import styled from 'styled-components';

import {
  Checkbox as AntCheckbox,
} from 'antd';

export const Container = styled.div`
  display: flex;
  padding-right: 40px;
  padding-left: 16px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex: ${({ size }) => (size || '1')};
  justify-content: center;
  align-items: baseline;
`;

export const Title = styled.h3`
  color: ${(props) => (props.theme.color.white)};
`;

export const Checkbox = styled(AntCheckbox)`
  color: ${(props) => props.theme.color.white};
  &&.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0;
  }
  margin-right: 5px;
`;
