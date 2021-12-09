import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

const Filter = ({ onFilterChange, filterValues }) => {
  const [platformConsoles, setPlatformConsoles] = useState([]);
  const [platformAccountTypes, setPlatformAccountTypes] = useState([]);
  const [categories, setCategories] = useState([]);

  const { Search } = Input;

  const onSearch = (value) => onFilterChange({ ...filterValues, search: value });
  const onOnlyAvaliable = (value) => onFilterChange({ ...filterValues, onlyAvaliable: value });
  const onCategories = (values) => onFilterChange({ ...filterValues, categories: [...values] });
  const onPlatformAccountTypes = (values) => onFilterChange({ ...filterValues, platformAccountTypes: [...values] });
  const onPlatformConsoles = (values) => onFilterChange({ ...filterValues, platformConsoles: [...values] });

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
            defaultValue={filterValues.categories}
            onChange={onCategories}
            multiple
          />
        </ContainerSearchFilter>

        <ContainerRow>
          <ContainerItemFilter>
            <Label>Plataforma: </Label>

            <CheckboxGroup
              options={platformConsoles.map((item) => ({ label: item.name, value: item.id }))}
              onChange={onPlatformConsoles}
            />
          </ContainerItemFilter>

          <ContainerItemFilter>
            <Label>Tipo de conta: </Label>

            <CheckboxGroup
              options={platformAccountTypes.map((item) => ({ label: item.name, value: item.id }))}
              onChange={onPlatformAccountTypes}
            />
          </ContainerItemFilter>
        </ContainerRow>

        <ContainerItemFilter responsiveRow>
          <Label>Mostrar apenas disponíveis: </Label>

          <Switch checked={filterValues.onlyAvaliable} onClick={onOnlyAvaliable} />
        </ContainerItemFilter>
      </ContainerLeftside>

    </FilterWrapper>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterValues: PropTypes.object.isRequired,
};

export default Filter;
