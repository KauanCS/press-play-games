/* eslint-disable max-len */
import styled from 'styled-components';
import {
  Input as AntInput,
  Checkbox as AntCheckbox,
  Form as AntForm,
  Alert as AntAlert,
} from 'antd';

import CustomButton from '../../../../../components/custom-button';

const urlBackground = 'https://pressplaygames.com.br/wp-content/uploads/2021/05/thumb2-winter-landscape-forest-snow-winter-snow-capped-trees.jpg';
const urlKratos = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/0c4e07962725fd52bb0eecc8c68b1301.png';

export const Container = styled.div`
  display: flex;
`;

export const Form = styled(AntForm)`
  &&.ant-form {
    width: 100%;
  }
`;

export const FormItem = styled(AntForm.Item)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  && .ant-form-item-label > label {
    color: ${(props) => props.theme.color.white};
  }
`;

export const Alert = styled(AntAlert)``;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.5);
  width: 35%;
  align-items: center;
  padding: 40px 80px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 100%;
    padding: 40px;
  }
  && .ant-form-horizontal .ant-form-item-control {
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 35px;
`;

export const ContainerRight = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
`;

export const ContainerSignUp = styled.div`
  display: flex;
  justify-content: center;
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

export const TitleHeader = styled.h1`
  position: relative;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  z-index: 1;
  font-size: 32px;
  padding: 0 0 40px 0;
`;

export const Text = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color.white};
`;

export const Input = styled(AntInput)`
  && {
    width: 100%;
  }
`;

export const Link = styled.a`
  margin-top: 10px;
`;

export const Checkbox = styled(AntCheckbox)`
  align-self: flex-start;
  && > span {
    color: ${(props) => props.theme.color.white};
  }
`;

export const Button = styled(CustomButton)`
  width: 120px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

export const TextForgot = styled.a`
  font-weight: 500;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TextSignUp = styled.a`
  font-weight: 500;
  margin-left: 5px;
`;
