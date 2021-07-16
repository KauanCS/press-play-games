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

const Catalogue = () => {
  const title = 'CATALOGO DE GAMES';
  return (
    <Container>
      <BackgroundImage>
        <Overlay />
        <TitleHeader>{title}</TitleHeader>
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
};

export default Catalogue;
