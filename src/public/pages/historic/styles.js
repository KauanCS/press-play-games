import styled from 'styled-components';
import {
  Divider as AntDivider,
} from 'antd';

export const Container = styled.div`
  display: flex;
  padding: 20px 10%;
  flex-direction: column;
`;

export const ContainerGames = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
`;

export const Divider = styled(AntDivider)`
  background-color: ${(props) => props.theme.color.white};
`;
