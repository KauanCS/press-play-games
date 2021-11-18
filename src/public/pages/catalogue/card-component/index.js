import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  ContainerDescription,
  Image,
  TitleGame,
} from './styles';

const urlImage = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/capa2-game-ps4-desensolvimento-pressplay.jpg';

const CardComponent = ({ game }) => (
  <Container>
    <Image src={urlImage} />
    <ContainerDescription>
      <TitleGame>{game.name}</TitleGame>

      <Button type="primary">Alugar</Button>
    </ContainerDescription>
  </Container>
);

CardComponent.propTypes = {
  game: PropTypes.object.isRequired,
};

export default CardComponent;
