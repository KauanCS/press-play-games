import React from 'react';

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
  Overlay,
  Text,
  TextForgot,
  TextSignUp,
  Input,
  TitleHeader,
} from './styles';

const Login = () => {
  const title = 'FAZER LOGIN';
  return (
    <Container>
      <BackgroundImage>
        <ContainerLogin>
          <TitleHeader>{title}</TitleHeader>
          <ContainerInput>
            <Text>Nome do usuário ou e-mail*</Text>
            <Input placeholder="Insira seu usuário ou e-mail" />
          </ContainerInput>

          <ContainerInput>
            <Text>Senha*</Text>
            <Input placeholder="Insira sua senha" />
          </ContainerInput>

          <Checkbox>Lembre-me</Checkbox>
          <Button>ACESSAR</Button>
          <TextForgot>Esqueceu sua senha?</TextForgot>

          <ContainerSignUp>
            <Text>Não possui uma conta?</Text>
            <TextSignUp>Registrar-se</TextSignUp>
          </ContainerSignUp>

        </ContainerLogin>
        <ContainerRight>
          <KratosImage />
        </ContainerRight>
      </BackgroundImage>
    </Container>
  );
};

export default Login;
