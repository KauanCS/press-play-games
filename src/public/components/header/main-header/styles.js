import styled from 'styled-components';

import {
  FaBars,
} from 'react-icons/fa';

export const IconBars = styled(FaBars)`
  display: none;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    font-size: 26px;
    display: flex;
    position: relative;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.publicPrimaryDark};
  align-items: center;
`;

export const ContainerResponsiveItem = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  cursor: pointer;
  padding: 10px;
  flex-direction: column;
  transition: 0.2s linear;
  gap: 20px;
  align-items: center;
  :hover {
    background-color: ${(props) => props.theme.color.publicAccentPrimary};
    &&& > a {
      color: black;
    }
  }
`;

export const ResponsiveItem = styled.a`
  font-size: 18px;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
`;

export const ContainerMenu = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.publicPrimaryDark};
  padding: 0 40px;
  justify-content: space-between;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    padding: 10px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 18px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    font-size: 12px;
  }
`;

export const ContainerMenuItems = styled.div`
  gap: 10px;
  display: flex;
`;

export const ContainerItem = styled.a`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${(props) => props.theme.color.publicAccentPrimary};
    &&& > a {
      color: black;
    }
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  font-size: 18px;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
`;

export const TitlePressPlay = styled.h2`
  color: ${(props) => props.theme.color.publicTitlePrimary};
  font-family: 'Russo One Regular';
  margin-right: 5px;
`;

export const TitleGames = styled.h2`
  color: ${(props) => props.theme.color.publicTitleSecondary};
  font-family: 'Russo One Regular';
`;
