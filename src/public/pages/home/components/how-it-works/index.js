import React from 'react';

import ImageController from '../../../../../static/images/home-page-controller.png';
import ImageGames from '../../../../../static/images/home-page-games.png';
import ImagePlayer from '../../../../../static/images/home-page-player.png';

import {
  Box,
  ButtonKnowMore,
  Container,
  ContainerItem,
  Description,
  Divider,
  IconStar,
  Image,
  Title,
  Subtitle,
} from './styles';

import {
  HOW_IT_WORKS_TITLE,
  HOW_IT_WORKS_SUBTITLE_STEP_1,
  HOW_IT_WORKS_SUBTITLE_STEP_2,
  HOW_IT_WORKS_SUBTITLE_STEP_3,
  HOW_IT_WORKS_DESCRIPTION_STEP_1,
  HOW_IT_WORKS_DESCRIPTION_STEP_2,
  HOW_IT_WORKS_DESCRIPTION_STEP_3,
} from '../../../../constants/public-home';

const HowItWorks = () => (
  <Container>
    <Title>{HOW_IT_WORKS_TITLE}</Title>

    <Divider><IconStar /></Divider>

    <Box>
      <ContainerItem>
        <Title>1</Title>
        <Image src={ImageController} />
        <Subtitle>{HOW_IT_WORKS_SUBTITLE_STEP_1}</Subtitle>
        <Description>{HOW_IT_WORKS_DESCRIPTION_STEP_1}</Description>
      </ContainerItem>

      <ContainerItem>
        <Title>2</Title>
        <Image src={ImageGames} />
        <Subtitle>{HOW_IT_WORKS_SUBTITLE_STEP_2}</Subtitle>
        <Description>{HOW_IT_WORKS_DESCRIPTION_STEP_2}</Description>
      </ContainerItem>

      <ContainerItem>
        <Title>3</Title>
        <Image src={ImagePlayer} />
        <Subtitle>{HOW_IT_WORKS_SUBTITLE_STEP_3}</Subtitle>
        <Description>{HOW_IT_WORKS_DESCRIPTION_STEP_3}</Description>
      </ContainerItem>
    </Box>

    <ButtonKnowMore>SAIBA MAIS</ButtonKnowMore>

  </Container>
);

export default HowItWorks;
