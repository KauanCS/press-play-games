import styled from 'styled-components';
import {
  Divider as AntDivider,
} from 'antd';

export const Container = styled.div`
  display: flex;
  padding: 20px 10%;
  flex-direction: column;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerItem = styled.div`
  display: flex;
`;
export const ContainerGames = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  display: flex;
  padding: 20px 10%;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
`;

export const Divider = styled(AntDivider)`
  background-color: ${(props) => props.theme.color.white};
  margin: 12px 0;
`;

export const TextBold = styled.p`
  margin: 0;
  font-weight: 500;
  margin-right: 5px;
  font-size: 16px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
`;
