import styled from 'styled-components';

import {
  FaWhatsapp,
  FaDiscord,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FacebookFrame = styled.iframe`
  width: 425px;
  height: 130px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 95%;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  padding: 20px 10%;
  justify-content: center;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-device-width : 769px) and (max-device-width : 1366px) {
    padding: 20px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 10px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const ContainerMid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    align-items: center;
    margin-top: 20px;
  }
`;

export const ContainerItemsRight = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-direction: column;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    align-items: center;
  }
`;

export const ContainerText = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  display: flex;
  cursor: ${(props) => (props.noCursor ? 'default' : 'pointer')};
`;

export const Text = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  transition: 0.2s linear;
  margin: 0;
  :hover {
    color: aqua;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '22px')};
  margin-bottom: 10px;
`;

export const IconWhatsapp = styled(FaWhatsapp)`
  font-size: 22px;
  color: aqua;
  margin-right: 10px;
`;

export const IconDiscord = styled(FaDiscord)`
  font-size: 22px;
  color: aqua;
  margin-right: 10px;
`;

export const IconEnvelope = styled(FaEnvelope)`
  font-size: 22px;
  color: aqua;
  margin-right: 10px;
`;

export const IconFacebook = styled(FaFacebookF)`
  font-size: 22px;
  color: aqua;
  margin-right: 10px;
`;

export const IconInstagram = styled(FaInstagram)`
  font-size: 22px;
  color: aqua;
  margin-right: 10px;
`;

export const BottomFooter = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.publicFooterBottom};
  justify-content: space-between;
  padding: 10px 10%;
  width: 100%;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const BottomText = styled.p`
  color: ${(props) => props.theme.color.white};
  margin: 0;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    text-align: center;
  }
`;
