import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  ContainerTag,
  ContainerDescription,
  Image,
  TitleGame,
  Tag,
} from './styles';

const urlImage = 'https://pressplaygames.com.br/painelpremium/imagens/Cyberpunk%202077.jpg';

const CardComponent = ({ game, platformConsoles }) => (
  <Container>
    <Image src={urlImage} />
    <ContainerDescription>
      <TitleGame>{game.name}</TitleGame>

      <Button type="primary">Alugar</Button>
      <ContainerTag>
        {
          platformConsoles.map((platformConsole) => {
            const isPlatformAvaliable = game.acountConsoleAvaliables.some((acountConsoleAvaliable) => acountConsoleAvaliable.platformConsoleId === platformConsole.id);

            return (
              <Tag color={isPlatformAvaliable ? 'blue' : 'magenta'}>{(platformConsole.name)}</Tag>
            );
          })
        }
      </ContainerTag>
    </ContainerDescription>
  </Container>
);

CardComponent.propTypes = {
  game: PropTypes.object.isRequired,
  platformConsoles: PropTypes.array.isRequired,
};

export default CardComponent;
