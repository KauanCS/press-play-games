import styled from 'styled-components';
import { Button as ButtonAnt } from 'antd';

export const Button = styled(ButtonAnt)`
  background-color: ${(props) => props.theme.color.accent};
  border: 1px solid ${(props) => props.theme.color.accent};
  font-weight: 500;
  &:hover {
    background-color: ${(props) => props.theme.color.accentHover};
    border: 1px solid ${(props) => props.theme.color.accentHover};
  }
`;

export const ButtonSecondary = styled(ButtonAnt)``;
