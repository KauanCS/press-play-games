import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const Login = () => {
  const [getMessage, setGetMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/home').then((response) => {
      const { data } = response;
      setGetMessage(data);
    }).catch((error) => {
      console.log('ERROR: ', error);
    });
  }, []);

  console.log(getMessage);

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
        <LoginComponent />
      </ContainerBody>
    </Container>
  );
};

export default Login;
