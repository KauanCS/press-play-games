import React from 'react';

import {
  Container,
} from './styles';

import Header from './components/header';

const HomePage = () => {
  const title = 'this is my home page';

  return (
    <Container>
      <Header />
      {title}
    </Container>
  );
};

export default HomePage;
