import styled from 'styled-components';

import {
  Button as AntButton,
} from 'antd';

import {
  FaFilter,
  FaExchangeAlt,
  FaRegStar,
  FaDollarSign,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  -webkit-box-shadow: 0px 10px 10px -5px rgba(0,0,0,.5);
  -moz-box-shadow: 0px 10px 10px -5px rgba(0,0,0,.5);
  box-shadow: 0px 10px 10px -5px rgba(0,0,0,.5);
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.primaryDark};
  flex-direction: column;
  padding: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ContainerContent = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const ContainerOrderIcons = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  flex: unset;
  cursor: pointer;
`;

export const LabelIcon = styled.p`
  color:  #c12020;
  margin: 0;
  font-weight: 500;
`;

export const Button = styled(AntButton)`
  margin-left: auto;
`;

export const Title = styled.h1`
  color:  ${(props) => props.theme.color.white};
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background-color: #ffecec;
`;

export const FilterIcon = styled(FaFilter)`
  color:  ${(props) => props.theme.color.white};
  font-size: 1.5em;
  margin-right: 10px;
`;

export const ExchangeIcon = styled(FaExchangeAlt)`
  color:  #c12020;
  font-size: 24px;
  transform: rotate(90deg);
`;

export const StarIcon = styled(FaRegStar)`
  color:  #c12020;
  font-size: 24px;
`;

export const DollarIcon = styled(FaDollarSign)`
  color:  #c12020;
  font-size: 24px;
`;
