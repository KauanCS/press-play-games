import styled from 'styled-components';
import { CaretRightOutlined } from '@ant-design/icons';
import {
  Collapse as AntCollapse,
} from 'antd';

export const Container = styled.div`
  display: flex;
`;

export const Collapse = styled(AntCollapse)`
  width: 100%;
`;

export const ArrowRightIcon = styled(CaretRightOutlined)``;
