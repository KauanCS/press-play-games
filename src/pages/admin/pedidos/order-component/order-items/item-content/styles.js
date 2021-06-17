import styled from 'styled-components';
import {
  Input as AntInput,
  Select as AntSelect,
  Tooltip as AntTooltip,
} from 'antd';
import {
  FaPen,
  FaWhatsapp,
} from 'react-icons/fa';

import CustomButton from '../../../../../../components/custom-button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerHeaderGames = styled.div`
  display: flex;
  background-color: #ea1e63;
  color: white;
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 10px;
`;

export const ContainerTradeGame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerRemovedGame = styled.div`
  display: flex;
  background-color: #f5c6cb;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const ContainerAddedGame = styled.div`
  display: flex;
  background-color: #c3e6cb;
  padding: 4px;
  border-radius: 4px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 500px;
  && .ant-btn-primary:hover, .ant-btn-primary:focus {
    background-color: #18b035;
    border: 1px solid #18b035;
  }
`;

export const ContainerFields = styled.div`
  display: flex;
  min-width: 0;
  flex: ${({ bigSize }) => (bigSize ? '1.5' : '1')};
`;

export const Select = styled(AntSelect).attrs(() => ({
  showSearch: true,
  size: 'small',
}))`
  width: 95%;
`;

export const Tooltip = styled(AntTooltip).attrs((props) => ({
  color: props.theme.color.accentHover,
}))`
`;

export const TextRemovedGame = styled.p`
  color: #721c24;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;
`;

export const TextAddedGame = styled.p`
  color: #155724;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;
`;

export const TitleHeader = styled.h3`
  color: white;
  display: flex;
  flex: ${({ bigSize }) => (bigSize ? '1.5' : '1')};
`;

export const TextValidate = styled.p`
  margin: 0;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
`;

export const ButtonPrimary = styled(CustomButton)`
  display: flex;
  align-items: center;
`;

export const ButtonWhatsapp = styled(CustomButton)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  background-color: #00c727;
  border: 1px solid #00c727;
`;

export const Input = styled(AntInput)`
  width: 100%;
  margin-right: 10px;
`;

export const IconPen = styled(FaPen)`
  margin-right: 5px;
`;

export const IconWhatsapp = styled(FaWhatsapp)`
  margin-right: 5px;
`;
