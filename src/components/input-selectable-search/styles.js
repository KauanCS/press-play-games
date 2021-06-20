import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Select = styled(AntSelect)`
  width: ${(props) => (props.width && props.width)};
`;
