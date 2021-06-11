import styled from 'styled-components';
import { DatePicker as AntDatePicker } from 'antd';

export const Container = styled.div`
  display: flex;
  && .ant-picker:hover, .ant-picker-focused {
    border-color: ${(props) => props.theme.color.accent};
  }

  && .ant-picker-range .ant-picker-active-bar {
    background: ${(props) => props.theme.color.accent};
  }

  &&.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, 
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, 
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    background: ${(props) => props.theme.color.accent};
  }
`;

export const DatePicker = styled(AntDatePicker)`
`;
