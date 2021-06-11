import styled from 'styled-components';
import {
  FaFilter,
  FaChevronDown,
  FaChevronRight,
} from 'react-icons/fa';
import {
  Switch as AntSwitch,
} from 'antd';

import CustomButton from '../../../../components/custom-button';

export const ContainerListFilter = styled.div`
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

export const ContainerButtonSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ContainerMoreFilters = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${(props) => props.theme.color.primary};
  flex-direction: column;
  color: white;
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
  border-radius: 4px;
`;

export const ContainerContent = styled.div`
  display: flex;
  margin-bottom: 10px
`;

export const ContainerContentCheckbox = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

export const ContainerTitleMoreFilters = styled.div`
  display: flex;
  align-items: center;

`;

export const WrapperCheckbox = styled.div`
  display: flex;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  flex: 1;
`;

export const Button = styled(CustomButton)`
  margin: 5px 0;
`;

export const FilterIcon = styled(FaFilter)`
  color:  ${(props) => props.theme.color.white};
  font-size: 1.5em;
  margin-right: 10px;
`;

export const Title = styled.h1`
  color:  ${(props) => props.theme.color.white};
`;

export const FilterText = styled.p`
  color:  ${(props) => props.theme.color.white};
`;

export const MoreFilterTitle = styled.h3`
  color:  ${(props) => props.theme.color.white};
  font-weight: 500;
`;

export const Switch = styled(AntSwitch)``;

export const IconArrowDown = styled(FaChevronDown)`
  color: white;
  margin-left: 10px;
`;

export const IconArrowRight = styled(FaChevronRight)`
  color: white;
  margin-left: 10px;
`;
