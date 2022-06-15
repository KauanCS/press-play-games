import styled from 'styled-components';
import {
  FaHeart,
} from 'react-icons/fa';

import { Button as AntButton, Tag as AntTag } from 'antd';

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.backgroundCatalogueGame};
  box-shadow: 0px 10px 10px -5px rgb(0 0 0 / 20%);
  flex-direction: column;
  flex: 0 1 calc(25% - 1em);
  @media only screen and (min-device-width : 280px) and (max-device-width : 768px) {
    flex: 0 1 calc(50% - 1em);
    flex-direction: row;
    max-height: 100px;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  padding: 10px;
  @media only screen and (min-device-width : 280px) and (max-device-width : 768px) {
    width: 100%;
  }
`;

export const ContainerAvailability = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  display: flex;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
  @media only screen and (min-device-width : 280px) and (max-device-width : 768px) {
    width: 120px;
  }
`;

export const ContainerHeart = styled.div`
  display: none;
  @media only screen and (min-device-width : 280px) and (max-device-width : 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 40px;
  }
`;

export const ContainerNameButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IconHeart = styled(FaHeart)`
  font-size: 18px;
  color: ${({ isFavorite }) => (isFavorite ? 'red' : 'white')};
  position: ${({ absolute }) => absolute && 'absolute'};
  top: 5px;
  right: 5px;
  cursor: pointer;
  @media only screen and (min-device-width : 280px) and (max-device-width : 768px) {
    display: ${({ none }) => none && 'none'};
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const TitleGame = styled.h1`
  font-size: 18px;
  color: ${(props) => props.theme.color.accent};
  text-align: center;
`;

export const Button = styled(AntButton)`
  max-width: 100%;
  margin: 10px 0;
`;

export const ContainerTag = styled.div`
  display: flex;
  gap: 10px;
`;

export const Tag = styled(AntTag)`
  width: 100%;
  margin: 5px 0;
  text-align: center;
`;
