import React, { useEffect, useState } from 'react';

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

import { loadAllPlatformConsole } from '../../../../services/platformConsole';
import { loadAllPlatformAccountTypes } from '../../../../services/platformAccountTypes';
import { loadAllCategory } from '../../../../services/category';

const Filter = () => {
  const [platformConsoles, setPlatformConsoles] = useState([]);
  const [platformAccountTypes, setPlatformAccountTypes] = useState([]);
  const [categories, setCategories] = useState([]);

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    const loadAllPlatformConsoleAsync = async () => {
      const data = await loadAllPlatformConsole();
      if (data.status === 200) {
        const { data: { payload } } = data;
        setPlatformConsoles(payload.map((item) => ({ name: item.name, id: item.id, description: item.description })));
      }
    };

    loadAllPlatformConsoleAsync();
  }, []);

  useEffect(() => {
    const loadAllCategoryAsync = async () => {
      const data = await loadAllCategory();
      if (data.status === 200) {
        const { data: { payload } } = data;
        console.log(payload);

        setCategories(payload.map((item) => ({ name: item.name, id: item.id })));
      }
    };

    loadAllCategoryAsync();
  }, []);

  useEffect(() => {
    const loadAllPlatformAccountTypesAsync = async () => {
      const data = await loadAllPlatformAccountTypes();
      if (data.status === 200) {
        const { data: { payload } } = data;
        setPlatformAccountTypes(payload.map((item) => ({ name: item.name, id: item.id })));
      }
    };

    loadAllPlatformAccountTypesAsync();
  }, []);

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
            options={categories.map((item) => ({ value: item.name, key: item.id }))}
            multiple
          />
        </ContainerSearchFilter>

        <ContainerRow>
          <ContainerItemFilter>
            <Label>Plataforma: </Label>

            <CheckboxGroup
              options={platformConsoles.map((item) => ({ label: item.name, value: item.id }))}
            />
          </ContainerItemFilter>

          <ContainerItemFilter>
            <Label>Tipo de conta: </Label>

            <CheckboxGroup
              options={platformAccountTypes.map((item) => ({ label: item.name, value: item.id }))}
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
