/* eslint-disable max-len */
import styled from 'styled-components';
import {
  Input as AntInput,
  Checkbox as AntCheckbox,
} from 'antd';

import CustomButton from '../../../components/custom-button';

const urlBackground = 'https://pressplaygames.com.br/wp-content/uploads/2021/05/thumb2-winter-landscape-forest-snow-winter-snow-capped-trees.jpg';
const urlKratos = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/0c4e07962725fd52bb0eecc8c68b1301.png';

export const Container = styled.div`
  display: flex;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.5);
  width: 35%;
  align-items: center;
  padding: 80px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 100%;
    padding: 40px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;

export const ContainerRight = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
`;

export const ContainerSignUp = styled.div`
  display: flex;
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

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex-direction: column;
  }
`;

export const KratosImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${urlKratos});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 70% auto;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.color.black};
  opacity: 0.0;
`;

export const TitleHeader = styled.h1`
  position: relative;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  z-index: 1;
  font-size: 32px;
  padding: 40px 0;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Input = styled(AntInput)``;

export const Checkbox = styled(AntCheckbox)`
  align-self: flex-start;
  && > span {
    color: ${(props) => props.theme.color.white};
  }
`;

export const Button = styled(CustomButton)`
  width: 120px;
  align-self: flex-start;
  margin: 10px 0;
`;

export const TextForgot = styled.a`
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const TextSignUp = styled.a`
  font-weight: 500;
  margin-left: 5px;
`;
