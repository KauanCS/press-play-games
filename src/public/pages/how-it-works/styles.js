import styled from 'styled-components';
import {
  Divider as AntDivider,
} from 'antd';

import {
  FaStar,
} from 'react-icons/fa';

const urlBackground = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/PlayStation-Sony-PAX-East.jpg';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 9px 0px 10px 0px rgb(0 0 0 / 50%);
  background-color: ${(props) => props.theme.color.publicBackgroundHowItWorks};
`;

export const ContainerMainTitle = styled.div`
  display: flex;
`;

export const ContainerInstruction = styled.div`
  display: flex;
  padding: 20px 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  display: flex;
  width: 70%;
  align-self: center;
  margin: 10px 0;
`;

export const ContainerCentralized = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0 40px 0;
`;

export const ContainerText = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  ${(props) => props.end && (
    'align-items: flex-end;'
  )}
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const ContainerStar = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.color.black};
  opacity: 0.3;
`;

export const TitleHeader = styled.h1`
  position: relative;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  z-index: 1;
  font-size: 35px;
  padding: 20px 0;
`;

export const TitleExplanation = styled.h2`
  color: ${(props) => props.theme.color.white};
  font-size: 30px;  
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.color.publicTitlePrimary};
  margin-bottom: 15px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    text-align: center;
  }
`;

export const Divider = styled(AntDivider)`
  && {
    border-color: ${(props) => (
    props.customBorder ? props.theme.color.publicAccentPrimary : props.theme.color.white
  )};
    align-items: flex-start;
    justify-content: center;
  }

  && > span {
    color: ${(props) => (props.warning ? props.theme.color.publicTitleSecondary : props.theme.color.white)};
    font-weight: 700;
    font-size: 28px;
  }

  &&.ant-divider-horizontal.ant-divider-with-text::before,
  &&.ant-divider-horizontal.ant-divider-with-text::after {
    width: 200px;
    border-width: ${(props) => (props.customBorder && '3px')};
  }

  ${(props) => props.dashed && (
    ` &&& {
      max-width: 20%;
      min-width: 20%;
      align-self: center;
      border-color: #313131;
    }`
  )}

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    && > span {
      font-size: 22px;
    }
    ${(props) => props.warning && (
    `&& > span {
      white-space: normal;
    }`
  )}
  }
`;

export const TitleDescription = styled.p`
  color: ${(props) => props.theme.color.white};
  padding: 30px 0;
  font-size: 16px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    text-align: center;
  }
`;

export const ItemList = styled.li`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Warning = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.color.red};
  margin: 5px 0;
  font-size: 16px;
`;

export const IconStar = styled(FaStar)`
  font-size: 50px;
  color: ${(props) => props.theme.color.publicTitlePrimary};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  margin: 5px 0;

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    text-align: center;
  }
`;
