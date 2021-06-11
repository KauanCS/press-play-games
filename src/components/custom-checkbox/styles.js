import styled from 'styled-components';
import {
  Checkbox as AntCheckbox,
} from 'antd';

export const Container = styled.div`
  margin: 5px 0;
`;

export const Checkbox = styled(AntCheckbox)`
  color: ${(props) => props.theme.color.white};
  &&.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0;
  }
`;
