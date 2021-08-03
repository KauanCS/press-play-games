import React from 'react';

import {
  ContainerLeftside,
  ContainerSearchFilter,
  ContainerItemFilter,
  ContainerRow,
  Input,
  CheckboxGroup,
  Label,
  Switch,
} from './styles';

import SelectableSearch from '../../../../components/input-selectable-search';
import FilterWrapper from '../../../../components/filter-wrapper';

const PLATFORM_OPTIONS = ['PS4', 'PS5'];
const ACCOUNT_OPTIONS = ['Primária', 'Secundária'];

const Filter = () => {
  const testArrayAutocomplete = [
    { key: '1', value: 'A' },
    { key: '2', value: 'B' },
    { key: '3', value: 'C' },
    { key: '4', value: 'D' },
    { key: '5', value: 'E' },
  ];

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  return (
    <FilterWrapper>
      <ContainerLeftside>

        <ContainerSearchFilter>
          <Search
            placeholder="Pesquisar título do jogo"
            onSearch={onSearch}
            enterButton
          />

          <SelectableSearch
            placeholder="Selecione as categorias"
            options={testArrayAutocomplete}
            multiple
          />
        </ContainerSearchFilter>

        <ContainerRow>
          <ContainerItemFilter>
            <Label>Plataforma: </Label>

            <CheckboxGroup
              options={PLATFORM_OPTIONS}
              defaultValue={['PS4', 'PS5']}
            />
          </ContainerItemFilter>

          <ContainerItemFilter>
            <Label>Tipo de conta: </Label>

            <CheckboxGroup
              options={ACCOUNT_OPTIONS}
              defaultValue={['Primária', 'Secundária']}
            />
          </ContainerItemFilter>
        </ContainerRow>

        <ContainerItemFilter responsiveRow>
          <Label>Mostrar apenas disponíveis: </Label>

          <Switch defaultChecked />
        </ContainerItemFilter>
      </ContainerLeftside>

    </FilterWrapper>
  );
};

export default Filter;
