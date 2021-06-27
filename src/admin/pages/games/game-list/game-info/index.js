import React, { useState } from 'react';

import {
  Container,
  ContainerColumn,
  ContainerRow,
  ContainerLeftSide,
  ContainerRightSide,
  DatePicker,
  Input,
  InputNumber,
  TextArea,
  Select,
} from './styles';

import Accounts from '../accounts';
import SelectableSearch from '../../../../../components/input-selectable-search';
import InputWrapper from '../../../../../components/input-wrapper';
import UploadButton from '../../../../../components/upload-button';

const GameInfo = () => {
  const GameTitle = 'A way out';
  const arrayAutocomplete = [
    { key: '1', value: 'A' },
    { key: '2', value: 'B' },
    { key: '3', value: 'C' },
    { key: '4', value: 'D' },
    { key: '5', value: 'E' },
  ];

  const languagesAutocomplete = [
    { key: 'Português', value: 'Português' },
    { key: 'Inglês', value: 'Inglês' },
    { key: 'Espanhol', value: 'Espanhol' },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const { Option } = Select;

  return (
    <Container>
      <ContainerRow>
        <InputWrapper title="Título do game" flexSize={1.5}>
          <Input
            defaultValue={GameTitle}
            placeholder="Nome do games"
          />
        </InputWrapper>

        <InputWrapper title="Categorias">
          <SelectableSearch
            placeholder="Selecione as categorias"
            options={arrayAutocomplete}
            multiple
          />
        </InputWrapper>
      </ContainerRow>

      <ContainerRow>
        <ContainerLeftSide>
          <InputWrapper title="Upload capa">
            <UploadButton
              name="game-image"
              loading={isLoading}
              imageUrl={false}
            />
          </InputWrapper>

          <ContainerColumn>
            <InputWrapper title="Status">
              <Select defaultValue="catalogo">
                <Option value="catalogo">Catálogo</Option>
                <Option value="lancamento">Lançamento</Option>
              </Select>
            </InputWrapper>

            <InputWrapper title="URL do Youtube">
              <Input
                placeholder="URL do Youtube"
              />
            </InputWrapper>

            <InputWrapper title="Tamanho do jogo">
              <InputNumber
                min={0}
                placeholder="Tamanho do jogo"
              />
            </InputWrapper>

            <InputWrapper title="Ano de lançamento">
              <DatePicker
                placeholder="Ano de lançamento"
                picker="year"
              />
            </InputWrapper>
          </ContainerColumn>

          <ContainerColumn>
            <InputWrapper title="Idiomas">
              <SelectableSearch
                placeholder="Selecione os idiomas"
                options={languagesAutocomplete}
                multiple
              />
            </InputWrapper>

            <InputWrapper title="Legendas">
              <SelectableSearch
                placeholder="Selecione as legendas"
                options={languagesAutocomplete}
                multiple
              />
            </InputWrapper>

            <InputWrapper title="Jogadores em Rede">
              <Input
                placeholder="Jogadores em rede"
              />
            </InputWrapper>

            <InputWrapper title="Jogadores em Multiplayer">
              <Input
                placeholder="Jogadores em multiplayer"
              />
            </InputWrapper>
          </ContainerColumn>
        </ContainerLeftSide>

        <ContainerRightSide>
          <InputWrapper title="Descrição">
            <TextArea
              placeholder="Descrição do game"
            />
          </InputWrapper>
        </ContainerRightSide>
      </ContainerRow>

      <Accounts />
    </Container>
  );
};

export default GameInfo;
