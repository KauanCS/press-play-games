import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'antd-mask-input';

import {
  Button,
  Container,
  Alert,
  ContainerRight,
  ContainerLogin,
  ContainerSignUp,
  BackgroundImage,
  KratosImage,
  Text,
  TextSignUp,
  Input,
  TitleHeader,
  Form,
} from './styles';

const SignUp = ({ redirectToLogin, submit, errorsState }) => (
  <Container>
    <BackgroundImage>
      <ContainerLogin>
        <>
          {errorsState.map(({ type, message }) => (<Alert key={message} message={message} type={type} />))}
          <br />
        </>
        <TitleHeader>CADASTRAR</TitleHeader>
        <Form
          initialValues={{ remember: true }}
          onFinish={submit}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Nome"
          >
            <Input placeholder="Insira seu primeiro nome" />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Sobrenome"
          >
            <Input placeholder="Insira seu sobrenome" />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Nome de usuário"
          >
            <Input placeholder="Insira seu nome de usuário" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="e-mail"
          >
            <Input placeholder="Insira seu e-mail" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Senha"
          >
            <Input placeholder="Insira sua senha" />
          </Form.Item>

          <Form.Item
            name="phonenumber"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Telefone"
          >
            <MaskedInput mask="(11) 11111-1111" placeholder="Insira seu telefone" />
          </Form.Item>

          <Button htmlType="submit" block>
            Cadastrar
          </Button>

          <ContainerSignUp>
            <Text>Já possui uma conta?</Text>
            <TextSignUp onClick={() => redirectToLogin()}>Clique aqui.</TextSignUp>
          </ContainerSignUp>
        </Form>
      </ContainerLogin>
      <ContainerRight>
        <KratosImage />
      </ContainerRight>
    </BackgroundImage>
  </Container>
);

SignUp.defaultProps = {
  errorsState: [],
};

SignUp.propTypes = {
  redirectToLogin: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  errorsState: PropTypes.array,
};

export default SignUp;
