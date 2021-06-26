import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ContainerButtonSelect,
  ContainerCheckbox,
  ContainerContentCheckbox,
  ContainerColumn,
  ContainerDefaultFilters,
  ContainerMoreFilters,
  ContainerTitleMoreFilters,
  FilterText,
  IconArrowDown,
  IconArrowRight,
  MoreFilterTitle,
  WrapperCheckbox,
} from './styles';

import Checkbox from '../../../../components/checkbox-component';
import FilterWrapper from '../../../../components/filter-wrapper';

const FilterComponent = (props) => {
  const {
    suporteUsers,
  } = props;

  const [showMoreFilters, setShowMorFilters] = useState(false);

  return (
    <FilterWrapper>
      <ContainerColumn>

        <ContainerDefaultFilters>
          <ContainerContentCheckbox>
            <ContainerCheckbox>
              <FilterText>Suporte</FilterText>
              <WrapperCheckbox>
                <Checkbox text="Jeziel" />
                <Checkbox text="Julio" />
                <Checkbox text="Kaio" />
              </WrapperCheckbox>
            </ContainerCheckbox>

            <ContainerCheckbox>
              <FilterText>Filtrar por plataforma</FilterText>
              <WrapperCheckbox>
                <Checkbox text="PS4" />
                <Checkbox text="PS5" />
              </WrapperCheckbox>
            </ContainerCheckbox>

            <ContainerCheckbox>
              <FilterText>Tipo de conta</FilterText>
              <WrapperCheckbox>
                <Checkbox text="Primário" />
                <Checkbox text="Secundário" />
              </WrapperCheckbox>
            </ContainerCheckbox>
          </ContainerContentCheckbox>

          <ContainerButtonSelect>
            <Button>Marcar todos</Button>
            <Button.Secondary>Desmarcar todos</Button.Secondary>
          </ContainerButtonSelect>
        </ContainerDefaultFilters>

        <ContainerMoreFilters onClick={() => setShowMorFilters(!showMoreFilters)}>
          <ContainerTitleMoreFilters>
            <MoreFilterTitle>Mais filtros</MoreFilterTitle>
            {showMoreFilters ? (
              <IconArrowDown />
            ) : (
              <IconArrowRight />
            )}
          </ContainerTitleMoreFilters>
        </ContainerMoreFilters>
      </ContainerColumn>

    </FilterWrapper>
  );
};

FilterComponent.propTypes = {
  suporteUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default FilterComponent;
