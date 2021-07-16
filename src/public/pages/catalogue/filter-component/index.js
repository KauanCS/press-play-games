import React from 'react';

import {
  ContainerLeftside,
  ContainerSearchFilter,
  ContainerItemFilter,
  Input,
  Checkbox,
  Label,
  Switch,
} from './styles';

import SelectableSearch from '../../../../components/input-selectable-search';
import FilterWrapper from '../../../../components/filter-wrapper';

const PLATFORM_OPTIONS = ['PS4', 'PS5'];

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

        <ContainerItemFilter>
          <Label>Plataforma: </Label>

          <Checkbox.Group
            options={PLATFORM_OPTIONS}
            defaultValue={['PS4', 'PS5']}
          />
        </ContainerItemFilter>

        <ContainerItemFilter>
          <Label>Mostrar apenas disponíveis: </Label>

          <Switch defaultChecked />
        </ContainerItemFilter>
      </ContainerLeftside>

    </FilterWrapper>
  );
};

export default Filter;
