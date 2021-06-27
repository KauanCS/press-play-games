import React from 'react';

import {
  Container,
  Text,
} from './styles';

import Filter from './filter-component';
import GameList from './game-list';

const Games = () => {
  const title = 'Games';
  return (
    <Container>
      <Text>{title}</Text>
      <Filter />
      <GameList />
    </Container>
  );
};

export default Games;
