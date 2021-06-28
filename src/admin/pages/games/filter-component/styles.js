import styled from 'styled-components';

import {
  Input as AntInput,
  Collapse as AntCollapse,
} from 'antd';

export const ContainerLeftside = styled.div`
  display: flex;
  flex: 1;
  && .ant-input-group-wrapper {
    width: 90%;
  }
`;

export const ContainerRightside = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled(AntInput)``;

export const Collapse = styled(AntCollapse)`
  width: 100%;
`;
