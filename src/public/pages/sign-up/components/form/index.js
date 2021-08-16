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
  FormItem,
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
          <FormItem
            name="name"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Nome"
          >
            <Input placeholder="Insira seu primeiro nome" />
          </FormItem>

          <FormItem
            name="lastname"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Sobrenome"
          >
            <Input placeholder="Insira seu sobrenome" />
          </FormItem>

          <FormItem
            name="username"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Nome de usuário"
          >
            <Input placeholder="Insira seu nome de usuário" />
          </FormItem>

          <FormItem
            name="email"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="E-mail"
          >
            <Input placeholder="Insira seu e-mail" />
          </FormItem>

          <FormItem
            name="password"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Senha"
          >
            <Input placeholder="Insira sua senha" />
          </FormItem>

          <FormItem
            name="phonenumber"
            rules={[{ required: true, message: 'Obrigatório' }]}
            label="Telefone"
          >
            <MaskedInput mask="(11) 11111-1111" placeholder="Insira seu telefone" />
          </FormItem>

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
