import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginComponent from './login-input';
import CostaMedicalLogo from '../../static/images/costa-medical-logo.png';
import BackgroundLogin from '../../static/images/Background-login.jpg';
import Loading from '../../components/loading-component';

import {
  BackgroundImage,
  Container,
  ContainerBody,
  ContainerImageHeader,
  LogoImage,
} from './styles';

import { useUserContext } from '../../hooks/user';
import { doLogin } from '../../services/user';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useUserContext();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerLogin = async (values) => {
    setLoading(true);
    const response = await doLogin(values);

    if (response.status === 401) {
      setErrors([{ message: response.data.message, type: 'error' }]);
      setLoading(false);
      return;
    }

    setUser({ ...user, auth: { token: response.data.token, signed: true, name: response.data.name } });
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
        <Loading loading={loading}>
          <LoginComponent submit={handlerLogin} errorsState={errors} />
        </Loading>
      </ContainerBody>
    </Container>
  );
};

export default Login;
