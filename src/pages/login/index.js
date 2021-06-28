import React, { useState } from 'react';
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
import { doLogin } from '../../services/user';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useUserContext();
  const [errors, setErrors] = useState([]);

  const handlerLogin = async (values) => {
    const response = await doLogin(values);

    if (response.status === 401) {
      setErrors([{ message: response.data.message, type: 'error' }]);
      return;
    }

    setUser({ ...user, auth: { token: response.data.token, signed: true } });
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
        <LoginComponent submit={handlerLogin} errorsState={errors} />
      </ContainerBody>
    </Container>
  );
};

export default Login;
