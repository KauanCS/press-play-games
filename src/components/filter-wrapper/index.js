import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CaretDownOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';

import {
  Button,
  Container,
  ContainerContent,
  ContainerOrderIcons,
  ContainerIcon,
  ContainerTitle,
  Title,
  FilterIcon,
  ExchangeIcon,
  LabelIcon,
  WrapperIcon,
  StarIcon,
  DollarIcon,
} from './styles';

const FilterWrapper = ({ children, setSelectedOrder }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleCloseDrawer = () => setShowDrawer(false);
  const handleOpenDrawer = () => setShowDrawer(true);

  const handleOrderClick = (e) => {
    setSelectedOrder(e.currentTarget.id);
  };

  return (
    <Container>
      <ContainerTitle>
        <FilterIcon />
        <Title>Filtros</Title>
        <Button type="primary" icon={<CaretDownOutlined />} onClick={handleOpenDrawer}>
          Ordenar
        </Button>
      </ContainerTitle>

      <Drawer
        title="Ordenar por"
        placement="bottom"
        height={500}
        onClose={handleCloseDrawer}
        visible={showDrawer}
      >
        <ContainerOrderIcons>
          <ContainerIcon id="A-Z" onClick={handleOrderClick}>
            <WrapperIcon>
              <ExchangeIcon />
            </WrapperIcon>
            <LabelIcon>A-Z</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="Preco" onClick={handleOrderClick}>
            <WrapperIcon>
              <DollarIcon />
            </WrapperIcon>
            <LabelIcon>Preço</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="Avaliacao" onClick={handleOrderClick}>
            <WrapperIcon>
              <StarIcon />
            </WrapperIcon>
            <LabelIcon>Avaliação</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="PS5" onClick={handleOrderClick}>
            <WrapperIcon>
              <StarIcon />
            </WrapperIcon>
            <LabelIcon>PS5</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="PS5-exclusivo" onClick={handleOrderClick}>
            <WrapperIcon>
              <StarIcon />
            </WrapperIcon>
            <LabelIcon>PS5 exclusivo</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="PS4" onClick={handleOrderClick}>
            <WrapperIcon>
              <StarIcon />
            </WrapperIcon>
            <LabelIcon>PS4</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="PRECO1" onClick={handleOrderClick}>
            <WrapperIcon>
              <DollarIcon />
            </WrapperIcon>
            <LabelIcon>Até R$9,99</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="PRECO2" onClick={handleOrderClick}>
            <WrapperIcon>
              <DollarIcon />
            </WrapperIcon>
            <LabelIcon>Até R$49,99</LabelIcon>
          </ContainerIcon>

          <ContainerIcon id="PRECO3" onClick={handleOrderClick}>
            <WrapperIcon>
              <DollarIcon />
            </WrapperIcon>
            <LabelIcon>Até R$99,99</LabelIcon>
          </ContainerIcon>

        </ContainerOrderIcons>
      </Drawer>

      <ContainerContent>
        {children}
      </ContainerContent>

    </Container>
  );
};

FilterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  setSelectedOrder: PropTypes.func.isRequired,
};

export default FilterWrapper;
