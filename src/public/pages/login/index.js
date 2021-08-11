import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../../components/loading-component';

import { useUserContext } from '../../../hooks/user';
import { doLogin } from '../../../services/user';

import {
  Button,
  Checkbox,
  Container,
  ContainerLogin,
  ContainerRight,
  ContainerInput,
  ContainerSignUp,
  BackgroundImage,
  KratosImage,
  Text,
  TextForgot,
  TextSignUp,
  Input,
  TitleHeader,
  Alert,
  Form,
} from './styles';

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
    history.push('/');
  };

  const redirectToSignUp = () => history.push('/cadastrar');
  return (
    <Container>
      <BackgroundImage>
        <ContainerLogin>
          <>
            {errors.map(({ type, message }) => (<Alert key={message} message={message} type={type} />))}
            <br />
          </>
          <Loading loading={loading}>
            <TitleHeader>FAZER LOGIN</TitleHeader>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handlerLogin}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Obrigatório' }]}
              >
                <Input
                  placeholder="Insira seu usuário ou e-mail"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Obrigatório' }]}
              >
                <Input.Password
                  type="password"
                  placeholder="Insira seu password"
                />
              </Form.Item>
              <Form.Item>
                <Checkbox>Lembre-me</Checkbox>
                <Button htmlType="submit">ACESSAR</Button>
                <TextForgot>Esqueceu sua senha?</TextForgot>

                <ContainerSignUp>
                  <Text>Não possui uma conta?</Text>
                  <TextSignUp onClick={() => redirectToSignUp()}>Registrar-se</TextSignUp>
                </ContainerSignUp>
              </Form.Item>
            </Form>

          </Loading>
        </ContainerLogin>
        <ContainerRight>
          <KratosImage />
        </ContainerRight>
      </BackgroundImage>
    </Container>
  );
};

export default Login;
