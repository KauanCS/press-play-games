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

  const [filterState, setFilterState] = useState({
    categories: [],
    platformAccountTypes: [],
    platformConsoles: [],
    onlyAvaliable: false,
    search: '',
  });

  const handleFilterChange = (values) => {
    console.log(values);

    setFilterState({
      categories: [...values.categories],
      platformAccountTypes: [...values.platformAccountTypes],
      platformConsoles: [...values.platformConsoles],
      onlyAvaliable: values.onlyAvaliable,
      search: values.search,
    });
  };

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
        <FilterComponent onFilterChange={handleFilterChange} filterValues={filterState} />

        <ContainerGames>
          { gamesState.filter((game) => {
            return (
              (!filterState.search || game.name.toLowerCase().includes(filterState.search.toLowerCase()))
              && (filterState.platformConsoles.length === 0 || game.gamePlatformConsoles.some((gamePlatformConsole) => filterState.platformConsoles.includes(gamePlatformConsole.platformConsole.id)))
              && (filterState.categories.length === 0 || game.gameCategories.some((gameCategory) => filterState.categories.includes(gameCategory.id)))
            );
          }).map((game) => (<CardComponent game={game} />)) }
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
