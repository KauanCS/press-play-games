import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginComponent from './login-input';
import CostaMedicalLogo from '../../static/images/costa-medical-logo.png';
import BackgroundLogin from '../../static/images/Background-login.jpg';

import {
  BackgroundImage,
  Container,
  ContainerBody,
  ContainerImageHeader,
  LogoImage,
} from './styles';

import { useUserContext } from '../../contexts/hooks/user';
import api from '../../services/api';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useUserContext();
  console.log('users/login rendered');

  const handlerLogin = async (values) => {
    const response = await api.post('users/login', values);
    console.log(response);
    history.push('/home');
  };

  return (
    <Container>
      <BackgroundImage
        src={BackgroundLogin}
        href="https://br.freepik.com/vetores/pessoas"
      />
      <ContainerImageHeader>
        <LogoImage src={CostaMedicalLogo} />
      </ContainerImageHeader>

      <ContainerBody>
        <LoginComponent submit={handlerLogin} />
      </ContainerBody>
    </Container>
  );
};

export default Login;
