import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaUserAstronaut } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.primary};
  width: 100%;
  height: 100%;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 10px;
`;

export const AstronautIcon = styled(FaUserAstronaut)`
  color: white;
  margin-right: 8px;
  font-size: 22px;
`;

export const Username = styled.h2`
  color: white;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 20px;
`;

export const ImageController = styled.img`
  max-height: auto;
  max-width: 100px;
`;

export const ImageText = styled.img`
  max-height: auto;
  max-width: 250px;
  padding: 10px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonLink = styled(NavLink)`
  display: flex;
  color: white;
  padding: 10px 5px;
  width: 100%;
  flex: 0 1;
  transition: 0.2s linear;
  &.active {
    background-color: ${(props) => props.theme.color.accent};

  }
  &:hover{
    background-color: ${(props) => props.theme.color.accentHover};
    color: white;
    padding-left: 10px;
  }
`;

export const ContainerMenu = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${(props) => props.theme.color.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
`;
