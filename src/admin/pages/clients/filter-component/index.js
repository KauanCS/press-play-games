import React from 'react';

import {
  ContainerColumn,
  ContainerLeftside,
  ContainerRightside,
  ContainerRow,
  ContainerCheckboxFilter,
  ContainerCheckboxItems,
  Input,
  Title,
} from './styles';

import SelectableSearch from '../../../../components/input-selectable-search';
import FilterWrapper from '../../../../components/filter-wrapper';
import Checkbox from '../../../../components/checkbox-component';

const FilterComponent = () => {
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
      <ContainerColumn>
        <ContainerRow>
          <ContainerLeftside>
            <Search
              placeholder="Pesquisar por usuário"
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
        </ContainerRow>

        <ContainerRow>
          <ContainerLeftside>
            <ContainerCheckboxFilter>
              <Title level={4}>Status</Title>
              <ContainerCheckboxItems>
                <Checkbox text="Ativo" />
                <Checkbox text="Vencido" />
                <Checkbox text="Bloqueado" />
              </ContainerCheckboxItems>
            </ContainerCheckboxFilter>
          </ContainerLeftside>

          <ContainerRightside>
            <ContainerCheckboxFilter>
              <Title level={4}>Planos</Title>
              <ContainerCheckboxItems>
                <Checkbox text="Bronze" />
                <Checkbox text="Prata" />
                <Checkbox text="Ouro" />
                <Checkbox text="Diamante" />
              </ContainerCheckboxItems>
            </ContainerCheckboxFilter>
          </ContainerRightside>
        </ContainerRow>
      </ContainerColumn>
    </FilterWrapper>
  );
};

export default FilterComponent;
