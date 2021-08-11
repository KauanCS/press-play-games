import React from 'react';

import CardGame from './card-game';

import {
  Container,
  ContainerInfo,
  ContainerItem,
  ContainerGames,
  Title,
  TextBold,
  Text,
  Divider,
  Section,
} from './styles';

const MyAccount = () => (
  <Container>
    <Section>
      <Title>MINHA CONTA</Title>
      <Divider />
      <ContainerInfo>
        <ContainerItem>
          <TextBold>Nome: </TextBold>
          <Text>Esse aqui é um nome</Text>
        </ContainerItem>

        <ContainerItem>
          <TextBold>Celular: </TextBold>
          <Text>(16) 99999-9999</Text>
        </ContainerItem>

        <ContainerItem>
          <TextBold>Plano: </TextBold>
          <Text>Plano ouro</Text>
        </ContainerItem>
      </ContainerInfo>
    </Section>
    <Section>
      <Title>JOGOS ATIVOS</Title>
      <Divider />
      <ContainerGames>
        <CardGame />
        <CardGame />
      </ContainerGames>
    </Section>
  </Container>
);

export default MyAccount;
