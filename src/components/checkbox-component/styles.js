import styled from 'styled-components';

import {
  Checkbox as AntCheckbox,
} from 'antd';

export const Checkbox = styled(AntCheckbox)`
  color: ${(props) => props.theme.color.white};
  &&.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0;
  }
  margin-right: 10px;
`;
