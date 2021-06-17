import React from 'react';

import {
  ButtonPrimary,
  ButtonWhatsapp,
  Container,
  ContainerAddedGame,
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
        <TitleHeader>Primária 1</TitleHeader>
        <TitleHeader>Primária 2</TitleHeader>
        <TitleHeader>Secundária</TitleHeader>
        <TitleHeader>E-mail</TitleHeader>
        <TitleHeader>Senha</TitleHeader>
      </ContainerHeaderGames>

      <ContainerTradeGame>
        <ContainerRemovedGame>
          <ContainerFields bigSize>
            <Tooltip title="Call of Duty Black Ops Cold War Conta 8">
              <TextRemovedGame>Call of Duty Black Ops Cold War Conta 8</TextRemovedGame>
            </Tooltip>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>Kaio</TextRemovedGame>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>Julio</TextRemovedGame>
          </ContainerFields>

          <ContainerFields>
            <TextRemovedGame>Jeziel</TextRemovedGame>
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
              placeholder="Conta primária 1"
            />
          </ContainerFields>

          <ContainerFields>
            <Select
              options={testArrayAutocomplete}
              placeholder="Conta primária 2"
            />
          </ContainerFields>

          <ContainerFields>
            <Select
              options={testArrayAutocomplete}
              placeholder="Conta secundária"
            />
          </ContainerFields>

          <ContainerFields>
            <Tooltip title="7ana.mohanti@furnitt.com">
              <TextAddedGame>7ana.mohanti@furnitt.com</TextAddedGame>
            </Tooltip>
          </ContainerFields>

          <ContainerFields>
            {/* FIX ME - usar input simples aqui */}
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
          <ButtonWhatsapp
            icon={<IconWhatsapp />}
          >
            Conversar
          </ButtonWhatsapp>
        </ContainerInput>

        <ButtonPrimary>Fechar pedido</ButtonPrimary>
      </ContainerFooter>
    </Container>
  );
};

export default ItemContent;
