import React from 'react';

import {
  Container,
  ContainerDescription,
  ContainerPlatforms,
  Image,
  TitleGame,
  Subtitle,
  TextPlatform,
  TextAvailability,
} from './styles';

const urlImage = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/capa2-game-ps4-desensolvimento-pressplay.jpg';

const CardComponent = () => {
  const title = 'SPIDER MAN MILES MORALES';
  return (
    <Container>
      <Image src={urlImage} />
      <ContainerDescription>
        <TitleGame>{title}</TitleGame>

        <Subtitle>Plataformas Disponíveis:</Subtitle>
        <ContainerPlatforms>
          <TextPlatform>PS4</TextPlatform>
          <TextPlatform>PS5</TextPlatform>
        </ContainerPlatforms>

        <Subtitle>Status para locação:</Subtitle>
        <TextAvailability>PS4: Disponível</TextAvailability>
        <TextAvailability>PS5: Todas as contas em uso</TextAvailability>
      </ContainerDescription>
    </Container>
  );
};

export default CardComponent;
