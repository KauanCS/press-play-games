import styled from 'styled-components';

import {
  FaGamepad,
  FaExchangeAlt,
  FaUserAlt,
  FaInternetExplorer,
} from 'react-icons/fa';

import { Divider as AntDivider } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  background-color: ${(props) => props.theme.color.white};
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${(props) => props.color};
  align-items: center;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerItem = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.grey};
`;

export const TextItem = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const TextPrice = styled.span`
  color: ${(props) => props.color};
  font-size: 24px;
  line-height: 1;
  font-weight: 500;
  margin-top: 4px;
`;

export const TextPriceValue = styled.span`
  color: ${(props) => props.color};
  line-height: 1;
  font-size: 64px;
  font-weight: 600;
`;

export const TextPlanType = styled.span`
  color: ${(props) => props.color};
  font-size: 18px;
  line-height: 1;
  margin-bottom: 28px;
`;

export const TextFooter = styled.span`
  font-size: 14px;
  line-height: 1;
  color: ${(props) => props.theme.color.grey};
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  color: ${(props) => props.theme.color.white};
`;

export const Subtitle = styled.h4`
  color: ${(props) => props.theme.color.white};
`;

export const IconGamepad = styled(FaGamepad)`
  margin-right: 8px;
  font-size: 18px;
`;

export const IconExchange = styled(FaExchangeAlt)`
  margin-right: 8px;
  font-size: 18px;
`;

export const IconUser = styled(FaUserAlt)`
  margin-right: 8px;
  font-size: 18px;
`;

export const IconInternet = styled(FaInternetExplorer)`
  margin-right: 8px;
  font-size: 18px;
`;

export const Divider = styled(AntDivider)`
  && {
    margin: 12px 0;
  }
`;
export const Button = styled.button`
  width: 150px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 4px;
  padding: 8px;
  border: unset;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
`;
