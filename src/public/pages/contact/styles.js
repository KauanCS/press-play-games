import styled from 'styled-components';

import {
  Divider as AntDivider,
  Input as AntInput,
  Select as AntSelect,
} from 'antd';

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

import CustomButton from '../../../components/custom-button';

const urlBackground = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner-duvidas-desenvolvimento-pressplaygames.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerPhones = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 70%;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  width: 70%;
  gap: 20px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const ContainerMediaItem = styled.a`
  display: flex;
  color: ${(props) => props.theme.color.white};
  :hover {
      color: ${(props) => props.theme.color.publicTitlePrimary};
    }
  && > p{
    :hover {
      color: ${(props) => props.theme.color.publicTitlePrimary};
    }
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    display: none;
  }
`;

export const BackgroundImage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${urlBackground});
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.color.black};
  opacity: 0.6;
`;

export const TitleHeader = styled.h1`
  position: relative;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  z-index: 1;
  font-size: 35px;
  padding: 40px 0;
`;

export const Divider = styled(AntDivider)`
  && {
    border-color: ${(props) => (props.theme.color.publicAccentPrimary)};
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    min-width: 50%;
    margin: 40px 0;
    align-self:  ${(props) => props.center && 'center'};
  }

  && > span {
    color: ${(props) => (props.theme.color.white)};
    font-weight: 700;
    font-size: 28px;
  }

  &&.ant-divider-horizontal.ant-divider-with-text::before,
  &&.ant-divider-horizontal.ant-divider-with-text::after {
    width: 200px;
    border-width: 3px;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    && > span {
      font-size: 22px;
    }
  }
`;

export const TitleContainer = styled.h1`
  color: ${(props) => props.theme.color.publicTitlePrimary};
  font-weight: 500;
  font-size: 32px;
  text-align: ${(props) => props.center && 'center'};
`;

export const Input = styled(AntInput)``;

export const Select = styled(AntSelect)``;

export const Button = styled(CustomButton)`
  width: 200px;
  align-self: center;
`;

export const IconFacebook = styled(FaFacebook)`
  font-size: 38px;
  margin-right: 10px;

`;

export const IconInstagram = styled(FaInstagram)`
  font-size: 38px;
  margin-right: 10px;

`;

export const IconWhatsapp = styled(FaWhatsapp)`
  font-size: 38px;
  margin-right: 10px;

`;

export const TextSocialMedia = styled.p`
  margin: 0;
  font-size: 28px;
  color: ${(props) => props.theme.color.white};
`;
