import React, { useEffect, useState } from 'react';
import { loadAllGames } from '../../../services/games';

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
  const [gamesState, setGamesState] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const result = await loadAllGames();
      if (result.status === 200) {
        setGamesState([...result.data.payload]);
      }
    };

    loadGames();
  }, []);

  return (
    <Container>
      <BackgroundImage>
        <Overlay />
        <TitleHeader>CATALOGO DE GAMES</TitleHeader>
      </BackgroundImage>

      <ContainerContent>
        <FilterComponent />

        <ContainerGames>
          { gamesState.map((game) => (<CardComponent game={game} />)) }
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
