import React from 'react';
import { useHistory } from 'react-router-dom';
import MaskedInput from 'antd-mask-input';

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
} from './styles';

const SignUp = () => {
  const history = useHistory();
  const redirectToLogin = () => history.push('/login');

  return (
    <Container>
      <BackgroundImage>
        <ContainerLogin>
          <TitleHeader>CADASTRAR</TitleHeader>
          <ContainerInput>
            <Text>Primeiro Nome *</Text>
            <Input placeholder="Insira seu primeiro nome" />
          </ContainerInput>

          <ContainerInput>
            <Text>Sobrenome *</Text>
            <Input placeholder="Insira seu sobrenome" />
          </ContainerInput>

          <ContainerInput>
            <Text>Nome do usuário *</Text>
            <Input placeholder="Insira seu usuário" />
          </ContainerInput>

          <ContainerInput>
            <Text>E-mail *</Text>
            <Input placeholder="Insira seu e-mail" />
          </ContainerInput>

          <ContainerInput>
            <Text>Senha *</Text>
            <Input placeholder="Insira sua senha" />
          </ContainerInput>

          <ContainerInput>
            <Text>Telefone *</Text>
            <MaskedInput mask="(11) 11111-1111" placeholder="Insira seu telefone" />
          </ContainerInput>

          <Checkbox>Lembre-me</Checkbox>
          <Button>ACESSAR</Button>
          <TextForgot>Esqueceu sua senha?</TextForgot>

          <ContainerSignUp>
            <Text>Já possui uma conta?</Text>
            <TextSignUp onClick={() => redirectToLogin()}>Clique aqui.</TextSignUp>
          </ContainerSignUp>

        </ContainerLogin>
        <ContainerRight>
          <KratosImage />
        </ContainerRight>
      </BackgroundImage>
    </Container>
  );
};

export default SignUp;
