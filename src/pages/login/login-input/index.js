import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerLoginButton,
  Input,
  UserIcon,
  VisibleEye,
  InvisibleEye,
  PasswordIcon,
  Form,
  Button,
  Checkbox,
  Link,
  Alert,
} from './styles';

const LoginComponent = ({ submit, errorsState }) => (
  <Container>
    <>
      {errorsState.map(({ type, message }) => (<Alert key={message} message={message} type={type} />))}
      <br />
    </>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={submit}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Obrigatório' }]}
      >
        <Input
          prefix={<UserIcon className="site-form-item-icon" />}
          placeholder="Usuário"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Obrigatório' }]}
      >
        <Input.Password
          prefix={<PasswordIcon className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
          iconRender={(visible) => (visible ? <VisibleEye /> : <InvisibleEye />)}
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Lembrar me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" href="/">
          Esqueci a senha
        </Link>
      </Form.Item>

      <Form.Item>
        <ContainerLoginButton>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Login
          </Button>
          <Link href="/">Registre-se!</Link>
        </ContainerLoginButton>
      </Form.Item>

    </Form>
  </Container>
);

LoginComponent.defaultProps = {
  errorsState: [],
};

LoginComponent.propTypes = {
  submit: PropTypes.func.isRequired,
  errorsState: PropTypes.array,
};

export default LoginComponent;
