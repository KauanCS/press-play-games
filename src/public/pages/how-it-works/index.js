import React from 'react';

import {
  BackgroundImage,
  Container,
  ContainerInstruction,
  ContainerItems,
  ContainerText,
  ContainerCentralized,
  Overlay,
  TitleHeader,
  Divider,
  TitleDescription,
  ItemList,
  Bold,
  Subtitle,
  ContainerStar,
  IconStar,
  Description,
  Warning,
} from './styles';

const HowItWorks = () => {
  const title = 'COMO FUNCIONA?';
  return (
    <Container>
      <BackgroundImage>
        <Overlay />
        <TitleHeader>{title}</TitleHeader>
      </BackgroundImage>

      <ContainerInstruction>
        <Divider>COMO FUNCIONA OS PLANOS?</Divider>
        <TitleDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </TitleDescription>

        <Divider customBorder>INSTRUÇÕES</Divider>

      </ContainerInstruction>

      <ContainerItems>
        <ContainerText>
          <Subtitle>FAZENDO SEU PRIMEIRO PEDIDO</Subtitle>
          <ItemList>
            Acesse a página Catalogo, Escolha o título e aperte
            <Bold> ALUGAR;</Bold>
          </ItemList>

          <ItemList>
            Para visualizar o seu pedido, aperte em Pedidos no seu painel;
          </ItemList>

          <ItemList>
            Seu pedido será enviado dentro do horário que escolher.
          </ItemList>

          <ItemList>
            É importante que tenham
            <Bold> atenção </Bold>
            ao fazer uma solicitação de jogo.
          </ItemList>

          <ItemList>
            Quando fizer um pedido, nosso sistema contará como 1 troca mesmo que cancele depois,
            portanto só aperte
            <Bold> ALUGAR </Bold>
            se realmente tem
            <Bold> CERTEZA </Bold>
            do jogo que escolheu.
          </ItemList>
        </ContainerText>

        <ContainerStar>
          <IconStar />
        </ContainerStar>
      </ContainerItems>

      <Divider customBorder warning>ATENÇÃO PARA A REGRA DE HORÁRIO DE SUPORTE</Divider>

      <ContainerItems>
        <ContainerStar>
          <IconStar />
        </ContainerStar>

        <ContainerText end>
          <Subtitle>FAZENDO SEU PRIMEIRO PEDIDO</Subtitle>
          <Description>
            <Bold>Segunda à Sexta: </Bold>
            08h as 11h ou 18h as 21h;
          </Description>
          <Description>
            <Bold>Sábado: </Bold>
            18h as 20h;
          </Description>
          <Warning>Domingo/Feriados: Não fazemos trocas;</Warning>
          <Description end>
            <Bold>IMPORTANTE: </Bold>
            Pedidos feitos Após o início de cada suporte SÓ serão
            <br />
            enviados no próximo horário ou dia útil seguinte.
          </Description>

          <Description end>
            <Bold>O prazo máximo para a entrega é de até 24h. *</Bold>
          </Description>
        </ContainerText>
      </ContainerItems>

      <Divider dashed />

      <ContainerItems>
        <ContainerText>
          <Subtitle>RECEBENDO O JOGO</Subtitle>
          <Description>
            Nossa equipe de Suporte fará todo o atendimento com você pelo Whatsapp.
            <br />
            <Bold>É crucial </Bold>
            que você mantenha seu número atualizado e nos avise se mudar de número.
            <br />
            Vamos enviar o tutorial com os dados de acesso (email/senha) do jogo escolhido.
          </Description>

          <Description>
            <Bold>Obs: </Bold>
            Assinantes da licença Primária (Plano Ouro / Diamante)
            precisarão ter acesso ao PS4/PS5 no momento da instalação.
          </Description>

          <Description>
            <Bold>Cadeados:</Bold>
            <br />
            Sim, cadeados podem acontecer. São raros, mas se você for “sorteado” não se desespere.
            Para resolver Cadeados com o seu jogo, acesse a opção
            Games Ativos em seu Painel de Usuário e aperte em Resolver Cadeado e siga as instruções.
          </Description>
        </ContainerText>
        <ContainerStar>
          <IconStar />
        </ContainerStar>
      </ContainerItems>

      <Divider dashed />

      <ContainerItems>
        <ContainerStar>
          <IconStar />
        </ContainerStar>
        <ContainerText end>
          <Subtitle>FAZENDO TROCA</Subtitle>
          <Description end>
            Para fazer a primeira troca basta solicitar o novo jogo no Painel de Usuario.
          </Description>

          <Description end>
            Nosso Suporte entrará em contato para fazer a troca do jogo atual pelo o novo.
          </Description>
        </ContainerText>
      </ContainerItems>

      <Divider dashed />

      <ContainerCentralized>
        <Subtitle>RENOVAÇÃO DA ASSINATURA OU UPGRADES:</Subtitle>
        <Description end>
          Você deve fazer a renovação até 2 dias antes de vencer a sua assinatura para
          acumular suas trocas e garantir o acesso do seu jogo atual.
        </Description>

        <Description end>
          Você pode fazer upgrade de assinatura a qualquer momento, podendo mudar o tipo de licença,
          quantidade de jogos e acesso a lançamentos.
        </Description>
      </ContainerCentralized>

    </Container>
  );
};

export default HowItWorks;
