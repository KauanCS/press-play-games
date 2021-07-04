import React from 'react';

import {
  Container,
  ContainerHeader,
  Collapse,
  IconPlus,
  Panel,
  TitleHeader,
  TextDescription,
  TextClickable,
} from './styles';

import {
  ASK_1_TITLE,
  ASK_2_TITLE,
  ASK_3_TITLE,
  ASK_4_TITLE,
  ASK_5_TITLE,
  ASK_6_TITLE,
} from '../../../../../constants/public-home';

const CollapseComponent = () => {
  const titleComponent = (askTitle) => (
    <ContainerHeader>
      <IconPlus />
      <TitleHeader>{askTitle}</TitleHeader>
    </ContainerHeader>
  );

  return (
    <Container>
      <Collapse
        bordered={false}
        expandIcon={() => <IconPlus />}
      >
        <Panel header={titleComponent(ASK_1_TITLE)} key="1" showArrow={false}>
          <TextDescription>
            Nosso sistema é 100% digital, ou seja, você poderá realizar a trocar de algum jogo diretamente do seu celular.
            Sem sair de casa, sem frete, sem complicações, não perca mais tempo e dinheiro.
            <TextClickable> Saiba mais.</TextClickable>
          </TextDescription>
        </Panel>

        <Panel header={titleComponent(ASK_2_TITLE)} key="2" showArrow={false}>
          <TextDescription>
            Você vai utilizar nossos dados para criar um novo usuário, tendo acesso ao jogo escolhido.
            Você vai receber o tutorial detalhado, por texto e vídeo, através do Whatsapp pela nossa equipe de Suporte.
          </TextDescription>
        </Panel>

        <Panel header={titleComponent(ASK_3_TITLE)} key="3" showArrow={false}>
          <TextDescription>
            Ter acesso a uma grande quantidade de jogos por um valor baixo, dá a impressão que os jogos são pirateados, não é mesmo?
            Na verdade, desde a geração do PS3, já não existem mais jogos piratas para os consoles da Sony.
            <TextClickable> Saiba mais.</TextClickable>
          </TextDescription>
        </Panel>

        <Panel header={titleComponent(ASK_4_TITLE)} key="4" showArrow={false}>
          <TextDescription>
            Caso ainda esteja com alguma dúvida sobre nossos serviços, por favor,
            <TextClickable> clique aqui.</TextClickable>
          </TextDescription>
        </Panel>

        <Panel header={titleComponent(ASK_5_TITLE)} key="5" showArrow={false}>
          <TextDescription>
            <strong>Sim! </strong>
            Temos uma equipe de Suporte que atende 07 dias por semana, auxiliando nossos clientes com qualquer dúvida ou dificuldade.
            Problemas com cadeado, você receberá o suporte necessário para a correção.
          </TextDescription>
        </Panel>

        <Panel header={titleComponent(ASK_6_TITLE)} key="6" showArrow={false}>
          <TextDescription>
            O envio sempre será realizado dentro de horários fixos, sendo eles;
          </TextDescription>
        </Panel>
      </Collapse>
    </Container>
  );
};

export default CollapseComponent;
