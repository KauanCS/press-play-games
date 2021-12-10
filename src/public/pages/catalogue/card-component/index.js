import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  ContainerDescription,
  Image,
  TitleGame,
  Tag,
} from './styles';

const urlImage = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/capa2-game-ps4-desensolvimento-pressplay.jpg';

const CardComponent = ({ game, platformConsoles }) => (
  <Container>
    <Image src={urlImage} />
    <ContainerDescription>
      <TitleGame>{game.name}</TitleGame>

      <Button type="primary">Alugar</Button>
      <>
        {
          platformConsoles.map((platformConsole) => {
            const isPlatformAvaliable = game.acountConsoleAvaliables.some((acountConsoleAvaliable) => acountConsoleAvaliable.platformConsoleId === platformConsole.id);

            return (
              <Tag color={isPlatformAvaliable ? 'blue' : 'magenta'}>{(isPlatformAvaliable && platformConsole.name) || 'Indisponivel'}</Tag>
            );
          })
        }
      </>
    </ContainerDescription>
  </Container>
);

CardComponent.propTypes = {
  game: PropTypes.object.isRequired,
  platformConsoles: PropTypes.array.isRequired,
};

export default CardComponent;
