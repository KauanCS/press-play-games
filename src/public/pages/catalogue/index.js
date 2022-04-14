import React, { useEffect, useState } from 'react';
import { loadAllGames } from '../../../services/games';
import { loadAllPlatformConsole } from '../../../services/platformConsole';
import { loadAllPlatformAccountTypes } from '../../../services/platformAccountTypes';
import { loadAllCategory } from '../../../services/category';
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

const ITEMS_PER_PAGE = 5;

const Catalogue = () => {
  const [gamesState, setGamesState] = useState([]);

  const [platformConsoles, setPlatformConsoles] = useState([]);
  const [platformAccountTypes, setPlatformAccountTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [filterState, setFilterState] = useState({
    categories: [],
    platformAccountTypes: [],
    platformConsoles: [],
    onlyAvaliable: false,
    search: '',
  });

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

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
    <Container>
      <BackgroundImage>
        <Overlay />
        <TitleHeader>CATALOGO DE GAMES</TitleHeader>
      </BackgroundImage>

      <ContainerContent>
        <FilterComponent
          platformConsoles={platformConsoles}
          platformAccountTypes={platformAccountTypes}
          categories={categories}
          onFilterChange={handleFilterChange}
          filterValues={filterState}
        />

        <ContainerGames>
          { gamesState.filter((game) => (
            (!filterState.search || game.name.toLowerCase().includes(filterState.search.toLowerCase()))
              && (filterState.platformConsoles.length === 0 || game.consoles.some((console) => filterState.platformConsoles.includes(console)))
              && (filterState.categories.length === 0 || game.categories.some((category) => filterState.categories.includes(category)))
              && (!filterState.onlyAvaliable || game.acountConsoleAvaliables.some((acountConsoleAvaliable) => acountConsoleAvaliable.avaliable))
              && (filterState.platformAccountTypes.length === 0
                  || game.acountConsoleAvaliables.some((acountConsoleAvaliable) => filterState.platformAccountTypes.includes(acountConsoleAvaliable.platformAccountTypeId)))
          ))
            .slice((currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE * currentPage)
            .map((game) => (<CardComponent platformConsoles={platformConsoles} game={game} />)) }
        </ContainerGames>
      </ContainerContent>

      <ContainerBottom>
        <Pagination
          defaultCurrent={1}
          total={gamesState.length}
          hideOnSinglePage
          pageSize={ITEMS_PER_PAGE}
          showSizeChanger={false}
          current={currentPage}
          onChange={handleChangePage}
        />
      </ContainerBottom>

    </Container>
  );
};

export default Catalogue;
