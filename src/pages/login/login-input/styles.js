import styled from 'styled-components';
import {
  Input as AntInput,
  Form as AntForm,
  Button as AntButton,
  Checkbox as AntCheckbox,
  Alert as AntAlert,
} from 'antd';

import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.14);
  -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.14);
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.14);
`;

export const ContainerLoginButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  margin-top: 10px;
`;

export const Alert = styled(AntAlert)``;

export const Form = styled(AntForm)``;

export const Button = styled(AntButton)``;

export const Checkbox = styled(AntCheckbox)``;

export const Input = styled(AntInput)``;

export const UserIcon = styled(UserOutlined)``;

export const VisibleEye = styled(EyeTwoTone)``;

export const InvisibleEye = styled(EyeInvisibleOutlined)``;

export const PasswordIcon = styled(LockOutlined)``;
