import React, { useState } from 'react';

import {
  Container,
  ContainerTexts,
  Image,
  Title,
  Description,
  FixProblem,
  IconLock,
} from './styles';

import ModalLock from '../modal';

const URL_GAME = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/capa2-game-ps4-desensolvimento-pressplay.jpg';

const CardGame = () => {
  const title = 'SPIDER MAN MILES MORALES';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Image src={URL_GAME} />
      <ContainerTexts>
        <Title>{title}</Title>
        <Description>Plataforma: PS4</Description>
        <Description>Data do aluguel: 20/20/20</Description>
        <FixProblem onClick={showModal}>
          <IconLock />
          Resolver cadeado
        </FixProblem>
      </ContainerTexts>
      {isModalOpen && (
        <ModalLock
          handleCancel={closeModal}
          handleConfirm={closeModal}
        />
      )}
    </Container>
  );
};

export default CardGame;
