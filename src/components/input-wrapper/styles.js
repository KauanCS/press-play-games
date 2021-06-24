import styled from 'styled-components';
import { Typography as AntTypography } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flexSize }) => flexSize};
`;

export const Typography = styled(AntTypography)``;
