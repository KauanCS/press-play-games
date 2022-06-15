import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  ContainerTag,
  ContainerNameButton,
  ContainerHeart,
  ContainerImage,
  IconHeart,
  ContainerDescription,
  Image,
  TitleGame,
  Tag,
} from './styles';

const urlImage = 'https://pressplaygames.com.br/painelpremium/imagens/Cyberpunk%202077.jpg';

const CardComponent = ({ game, platformConsoles }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const switchFavorite = (e) => {
    setIsFavorite(!isFavorite);
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Container>
      <ContainerImage>
        <IconHeart onClick={switchFavorite} isFavorite={isFavorite} absolute none />
        <Image src={urlImage} />
      </ContainerImage>
      <ContainerDescription>
        <ContainerNameButton>
          <TitleGame>{game.name}</TitleGame>

          <Button type="primary">Alugar</Button>
        </ContainerNameButton>
        <ContainerHeart>
          <IconHeart onClick={switchFavorite} isFavorite={isFavorite} />
        </ContainerHeart>
        {/* <ContainerTag>
          {
            platformConsoles.map((platformConsole) => {
              const isPlatformAvaliable = game.acountConsoleAvaliables.some((acountConsoleAvaliable) => acountConsoleAvaliable.platformConsoleId === platformConsole.id);

              return (
                <Tag color={isPlatformAvaliable ? 'blue' : 'magenta'}>{(platformConsole.name)}</Tag>
              );
            })
          }
        </ContainerTag> */}
      </ContainerDescription>
    </Container>
  );
};

CardComponent.propTypes = {
  game: PropTypes.object.isRequired,
  platformConsoles: PropTypes.array.isRequired,
};

export default CardComponent;
