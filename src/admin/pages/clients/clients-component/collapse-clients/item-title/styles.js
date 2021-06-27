import styled from 'styled-components';

import {
  Tooltip as AntTooltip,
} from 'antd';

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
