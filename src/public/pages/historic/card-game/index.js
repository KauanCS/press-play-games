import React from 'react';

import {
  Container,
  ContainerTexts,
  Image,
  Title,
  Description,
} from './styles';

const URL_GAME = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/capa2-game-ps4-desensolvimento-pressplay.jpg';

const CardGame = () => {
  const title = 'SPIDER MAN MILES MORALES';
  return (
    <Container>
      <Image src={URL_GAME} />
      <ContainerTexts>
        <Title>{title}</Title>
        <Description>Plataforma: PS4</Description>
        <Description>Data do aluguel: 20/20/20</Description>
        <Description>Data de devolução: 20/20/20</Description>
      </ContainerTexts>
    </Container>
  );
};

export default CardGame;
