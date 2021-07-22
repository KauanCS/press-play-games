import styled from 'styled-components';

import CustomButton from '../../../../components/custom-button';

const urlBackground = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/mosaico-desenvolvimento-pressplaygames.jpg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
`;

export const Card = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme.color.primary};
  margin: 20px 0;
  display: flex;
  position: relative;
  z-index: 1;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const ContainerTextPartner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    align-items: center;
  }
`;

export const Image = styled.img`
  max-width: 50%;
  position: relative;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: 28px;
  font-weight: 500;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  margin: 10px 0;
  color: ${(props) => props.theme.color.white};
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    text-align: center;
  }
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
  background-image: url(${urlBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
`;

export const Button = styled(CustomButton)`
  width: 200px;
  margin-top: 20px;
`;
