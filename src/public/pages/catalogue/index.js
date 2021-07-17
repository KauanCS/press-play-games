import React from 'react';

import {
  Container,
  ContainerGames,
  ContainerBottom,
  ContainerContent,
  BackgroundImage,
  Overlay,
  TitleHeader,
  Pagination,
} from './styles';

import CardComponent from './card-component';
import FilterComponent from './filter-component';

const Catalogue = () => (
  <Container>
    <BackgroundImage>
      <Overlay />
      <TitleHeader>CATALOGO DE GAMES</TitleHeader>
    </BackgroundImage>

    <ContainerContent>
      <FilterComponent />

      <ContainerGames>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </ContainerGames>
    </ContainerContent>

    <ContainerBottom>
      <Pagination
        defaultCurrent={1}
        total={280}
        hideOnSinglePage
        showSizeChanger={false}
      />
    </ContainerBottom>

  </Container>
);

export default Catalogue;
