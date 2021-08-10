import React from 'react';

import {
  Button,
  Container,
  ContainerDescription,
  Image,
  TitleGame,
} from './styles';

const urlImage = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/capa2-game-ps4-desensolvimento-pressplay.jpg';

const CardComponent = () => {
  const title = 'SPIDER MAN MILES MORALES';
  return (
    <Container>
      <Image src={urlImage} />
      <ContainerDescription>
        <TitleGame>{title}</TitleGame>

        <Button type="primary">Alugar</Button>
      </ContainerDescription>
    </Container>
  );
};

export default CardComponent;
