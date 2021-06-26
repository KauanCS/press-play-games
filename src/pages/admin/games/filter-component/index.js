import React from 'react';

import {
  ContainerLeftside,
  ContainerRightside,
  Input,
} from './styles';

import SelectableSearch from '../../../../components/input-selectable-search';
import FilterWrapper from '../../../../components/filter-wrapper';

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
        <Search
          placeholder="Pesquisar título do jogo"
          onSearch={onSearch}
          enterButton
        />
      </ContainerLeftside>

      <ContainerRightside>
        <SelectableSearch
          placeholder="Selecione as categorias"
          options={testArrayAutocomplete}
          multiple
          width="90%"
        />
      </ContainerRightside>
    </FilterWrapper>
  );
};

export default Filter;
