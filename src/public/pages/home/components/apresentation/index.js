import React from 'react';

import {
  APRESENTATION_TITLE,
  APRESENTATION_DESCRIPTION,
} from '../../../../constants/public-home';

import {
  BackgroundImage,
  Container,
  ContainerBox,
  Box,
  Divisor,
  Title,
  IconGamepad,
  ImageGamer,
  Description,
  Overlay,
} from './styles';

const IMAGE_URL = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/gamer-desenvolvimento-pressplaygames.jpg';

const Apresentation = () => (
  <Container id="who_we_are_section">
    <BackgroundImage>
      <Overlay />
      <ContainerBox>
        <Box>
          <IconGamepad />
          <Title>{APRESENTATION_TITLE}</Title>

          <Divisor />

          <Description>
            {APRESENTATION_DESCRIPTION}
          </Description>
        </Box>
        <ImageGamer src={IMAGE_URL} />
      </ContainerBox>
    </BackgroundImage>
  </Container>
);

export default Apresentation;
