import styled from 'styled-components';

import { Divider as AntiDivider } from 'antd';

import {
  FaStar,
  FaGamepad,
  FaDollarSign,
  FaGem,
  FaThList,
} from 'react-icons/fa';

const URL_GOD_OF_WAR_IMAGE = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner1-desenvolvimento-pressplaygames.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.publicPrimary};
  `;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const BackgroundImage = styled.div`
  position: relative;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${URL_GOD_OF_WAR_IMAGE});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.publicBackgroundOverlay};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: ${(props) => props.theme.color.publicPrimary};
  position: relative;
  padding: 20px;
  border-radius: 8px;
  max-width: 20%;
`;

export const CardTitle = styled.h2`
  color: ${(props) => props.theme.color.white};
  font-size: 32px;
  text-align: center;
`;

export const CardDescription = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  position: relative;
  font-size: 40px;
  font-weight: 600;
`;

export const Divider = styled(AntiDivider)`
  && {
    border-color: ${(props) => props.theme.color.white};
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: center;
  }

  &&.ant-divider-horizontal.ant-divider-with-text::before, 
  &&.ant-divider-horizontal.ant-divider-with-text::after {
      border-width: 4px;
      width: 20%;
    }
`;

export const IconStar = styled(FaStar)`
  color: ${(props) => props.theme.color.publicTitleSecondary};
  font-size: 26px;
`;

export const IconGamepad = styled(FaGamepad)`
color: ${(props) => props.theme.color.publicAccentPrimary};
font-size: 62px;
`;

export const IconDollar = styled(FaDollarSign)`
  color: ${(props) => props.theme.color.publicAccentPrimary};
  font-size: 62px;
`;

export const IconGem = styled(FaGem)`
  color: ${(props) => props.theme.color.publicAccentPrimary};
  font-size: 62px;
`;

export const IconList = styled(FaThList)`
  color: ${(props) => props.theme.color.publicAccentPrimary};
  font-size: 62px;
`;
