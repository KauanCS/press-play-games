import React from 'react';

import {
  BackgroundImage,
  Card,
  CardDescription,
  CardTitle,
  Container,
  ContainerCards,
  Divider,
  IconStar,
  IconGamepad,
  IconDollar,
  IconGem,
  IconList,
  Title,
  Overlay,
} from './styles';

import {
  ADVANTAGES_TITLE,
  ADVANTAGE_TITLE_OPTION_1,
  ADVANTAGE_TITLE_OPTION_2,
  ADVANTAGE_TITLE_OPTION_3,
  ADVANTAGE_TITLE_OPTION_4,
  ADVANTAGE_DESCRIPTION_OPTION_1,
  ADVANTAGE_DESCRIPTION_OPTION_2,
  ADVANTAGE_DESCRIPTION_OPTION_3,
  ADVANTAGE_DESCRIPTION_OPTION_4,
} from '../../../../constants/public-home';

const Advantages = () => (
  <Container>
    <BackgroundImage>
      <Overlay />
      <Title>{ADVANTAGES_TITLE}</Title>

      <Divider><IconStar /></Divider>

      <ContainerCards>
        <Card>
          <IconGamepad />
          <CardTitle>{ADVANTAGE_TITLE_OPTION_1}</CardTitle>
          <CardDescription>{ADVANTAGE_DESCRIPTION_OPTION_1}</CardDescription>
        </Card>

        <Card>
          <IconDollar />
          <CardTitle>{ADVANTAGE_TITLE_OPTION_2}</CardTitle>
          <CardDescription>{ADVANTAGE_DESCRIPTION_OPTION_2}</CardDescription>
        </Card>

        <Card>
          <IconGem />
          <CardTitle>{ADVANTAGE_TITLE_OPTION_3}</CardTitle>
          <CardDescription>{ADVANTAGE_DESCRIPTION_OPTION_3}</CardDescription>
        </Card>

        <Card>
          <IconList />
          <CardTitle>{ADVANTAGE_TITLE_OPTION_4}</CardTitle>
          <CardDescription>{ADVANTAGE_DESCRIPTION_OPTION_4}</CardDescription>
        </Card>
      </ContainerCards>

    </BackgroundImage>
  </Container>
);

export default Advantages;
