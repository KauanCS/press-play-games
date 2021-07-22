import styled from 'styled-components';

import {
  FaPlus,
} from 'react-icons/fa';

import {
  Collapse as AntCollapse,
} from 'antd';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Collapse = styled(AntCollapse)`
  width: 70%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.publicPrimaryLight};
  
  &&.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: ${(props) => props.theme.color.white};
  }

  &&.ant-collapse-borderless > .ant-collapse-item {
    width: 100%;
    border: unset;
  }

  &&.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
    background-color: ${(props) => props.theme.color.publicPrimaryLight};
    border-radius: 0;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 100%;
  }
`;

export const TitleHeader = styled.h1`
  color: white;
  font-size: 20px;
`;

export const Panel = styled(AntCollapse.Panel)`
  background-color: ${(props) => props.theme.color.publicAccentSecondary};
`;

export const TextDescription = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 5px;
`;

export const IconPlus = styled(FaPlus)`
  color: ${(props) => props.theme.color.white};
  font-size: 22px;
  margin-right: 10px;
`;

export const TextClickable = styled.a``;
