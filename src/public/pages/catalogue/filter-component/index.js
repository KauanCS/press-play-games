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

const Filter = ({
  onFilterChange,
  filterValues,
  categories,
  platformConsoles,
  platformAccountTypes,
}) => {
  const { Search } = Input;

  const onSearch = (value) => onFilterChange({ ...filterValues, search: value });
  const onOnlyAvaliable = (value) => onFilterChange({ ...filterValues, onlyAvaliable: value });
  const onCategories = (values) => onFilterChange({ ...filterValues, categories: [...values] });
  const onPlatformAccountTypes = (values) => onFilterChange({ ...filterValues, platformAccountTypes: [...values] });
  const onPlatformConsoles = (values) => onFilterChange({ ...filterValues, platformConsoles: [...values] });

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
  categories: PropTypes.array.isRequired,
  platformConsoles: PropTypes.array.isRequired,
  platformAccountTypes: PropTypes.array.isRequired,
};

export default Filter;
