import styled from 'styled-components';
import { CaretRightOutlined } from '@ant-design/icons';
import {
  Collapse as AntCollapse,
} from 'antd';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  overflow-y: auto;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 4px;
`;

export const Collapse = styled(AntCollapse)`
  width: 100%;
`;

export const ArrowRightIcon = styled(CaretRightOutlined)``;
