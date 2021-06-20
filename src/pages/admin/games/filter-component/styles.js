import styled from 'styled-components';

import {
  Input as AntInput,
  Collapse as AntCollapse,
} from 'antd';

import {
  FaFilter,
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

  && .ant-input-group-wrapper {
    width: 90%;
  }
`;

export const ContainerLeftside = styled.div`
  display: flex;
  flex: 1;
`;

export const ContainerRightside = styled.div`
  display: flex;
  flex: 1;
`;

export const Title = styled.h1`
  color:  ${(props) => props.theme.color.white};
`;

export const FilterIcon = styled(FaFilter)`
  color:  ${(props) => props.theme.color.white};
  font-size: 1.5em;
  margin-right: 10px;
`;

export const Input = styled(AntInput)``;

export const Collapse = styled(AntCollapse)`
  width: 100%;
`;
