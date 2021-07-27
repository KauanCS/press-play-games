import styled from 'styled-components';

import {
  Divider as AntDivider,
} from 'antd';

import {
  FaSyncAlt,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding: 20px 10%;
  margin-bottom: auto;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerHeader = styled.div`
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme.color.white};
`;

export const ContainerRow = styled.a`
  display: flex;
  cursor: ${(props) => props.pointer && 'pointer'};
  align-items: ${(props) => props.center && 'center'};
`;

export const TitleHeader = styled.h1`
  display: flex;
  flex: 1;
  color: white;
  font-size: 28px;
`;

export const IconRefresh = styled(FaSyncAlt)`
  color: ${(props) => props.theme.color.white};;
  font-size: 28px;
  margin-right: 5px;
  cursor: pointer;
  padding: 5px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.white};
  margin: 0;
  font-size: 16px;
`;

export const Divider = styled(AntDivider)`
  && {
    border-color: rgba(0,0,0,0);
    margin: 0 20px;
  }
`;
