import React from 'react';

import {
  ButtonPrimary,
  ButtonWhatsapp,
  Container,
  ContainerAddedGame,
  ContainerButtonWhatsapp,
  ContainerHeaderGames,
  ContainerTradeGame,
  ContainerRemovedGame,
  ContainerFooter,
  ContainerFields,
  ContainerInput,
  TitleHeader,
  TextAddedGame,
  TextValidate,
  TextRemovedGame,
  Input,
  Select,
  IconPen,
  IconWhatsapp,
  Tooltip,
} from './styles';

const ItemContent = () => {
  const testArrayAutocomplete = [
    { value: '1', label: 'A' },
    { value: '2', label: 'B' },
    { value: '3', label: 'C' },
    { value: '4', label: 'D' },
    { value: '5', label: 'E' },
  ];
  return (
    <Container>
      <TextValidate>Vence em: 30/30/30</TextValidate>
      <ContainerHeaderGames>
        <TitleHeader bigSize>Game</TitleHeader>
        <TitleHeader>Conta</TitleHeader>
        <TitleHeader>E-mail</TitleHeader>
        <TitleHeader>Senha</TitleHeader>
      </ContainerHeaderGames>

      <ContainerTradeGame>
        <ContainerRemovedGame>
          <ContainerFields bigSize>
            <Tooltip title="Call of Duty Black Ops Cold War">
              <TextRemovedGame>Call of Duty Black Ops Cold War</TextRemovedGame>
            </Tooltip>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>Kaio</TextRemovedGame>
          </ContainerFields>

          <ContainerFields>
            <Tooltip title="7ana.mohanti@furnitt.com">
              <TextRemovedGame>7ana.mohanti@furnitt.com</TextRemovedGame>
            </Tooltip>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>game123456</TextRemovedGame>
          </ContainerFields>
        </ContainerRemovedGame>

        <ContainerAddedGame>
          <ContainerFields bigSize>
            <Select
              options={testArrayAutocomplete}
              placeholder="Procurar game"
            />
          </ContainerFields>
          <ContainerFields>
            <Select
              options={testArrayAutocomplete}
              placeholder="Conta"
            />
          </ContainerFields>

          <ContainerFields>
            <Tooltip title="7ana.mohanti@furnitt.com">
              <TextAddedGame>7ana.mohanti@furnitt.com</TextAddedGame>
            </Tooltip>
          </ContainerFields>

          <ContainerFields>
            <Input placeholder="Senha" size="small" />
          </ContainerFields>
        </ContainerAddedGame>
      </ContainerTradeGame>

      <ContainerFooter>
        <ContainerInput>
          <Input placeholder="Anotações" />
          <ButtonPrimary
            icon={<IconPen />}
          >
            Anotar
          </ButtonPrimary>
          <ContainerButtonWhatsapp>
            <ButtonWhatsapp
              icon={<IconWhatsapp />}
            >
              Conversar
            </ButtonWhatsapp>
          </ContainerButtonWhatsapp>
        </ContainerInput>

        <ButtonPrimary>Fechar pedido</ButtonPrimary>
      </ContainerFooter>
    </Container>
  );
};

export default ItemContent;
