import styled from 'styled-components';

import {
  Input as AntInput,
  Typography as AntTypography,
} from 'antd';

export const ContainerLeftside = styled.div`
  display: flex;
  flex: 1;
  && .ant-input-group-wrapper {
    width: 90%;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10px;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContainerRightside = styled.div`
  display: flex;
  flex: 1;
`;

export const ContainerCheckboxFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCheckboxItems = styled.div`
  display: flex;
`;

export const Input = styled(AntInput)``;

export const Title = styled(AntTypography.Title)`
  && {
    color: white;
  }
`;
