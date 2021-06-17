import styled from 'styled-components';

import {
  Checkbox as AntCheckbox,
  Tooltip as AntTooltip,
} from 'antd';

import {
  FaCopy,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex: ${({ bigSize }) => (bigSize ? '1.5' : '1')};
  justify-content: center;
  min-width: 0;
`;

export const CopyIcon = styled(FaCopy)`
  color: #454545;
  margin-left: 5px;
  margin-top: 3px;
  cursor: pointer;
`;

export const Checkbox = styled(AntCheckbox)`
  color: ${(props) => props.theme.color.white};
  &&.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0;
  }
  margin-right: 5px;
`;

export const Title = styled.p`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tooltip = styled(AntTooltip).attrs((props) => ({
  color: props.theme.color.accentHover,
}))`
`;
