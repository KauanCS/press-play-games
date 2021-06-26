import styled from 'styled-components';
import {
  Tooltip as AntTooltip,
} from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerHeaderGames = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.backgroundTitleOrder};
  color: white;
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 10px;
`;

export const ContainerListGame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerGame = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.backgroundListGame};
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const ContainerFields = styled.div`
  display: flex;
  min-width: 0;
  flex: ${({ bigSize }) => (bigSize ? '1.5' : '1')};
`;

export const TextRemovedGame = styled.p`
  color: ${(props) => props.theme.color.textListGame};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;
  `;

export const TitleHeader = styled.h3`
  color: ${(props) => props.theme.color.white};
  display: flex;
  flex: ${({ bigSize }) => (bigSize ? '1.5' : '1')};
  `;

export const Tooltip = styled(AntTooltip).attrs((props) => ({
  color: props.theme.color.accentHover,
}))`
`;
