import React, { useState } from 'react';

import {
  ButtonsPlanGroup,
  ButtonsPlatformOption,
  ButtonsPlanOption,
  Container,
  ContainerButtons,
  Title,
  IconGamepad,
} from './styles';

import {
  WILL_PLAY_HOW_TITLE,
} from '../../../../constants/public-home';

import CarouselPlans from './carousel';

const WillPlayHow = () => {
  const [filter, setFilter] = useState({
    platform: 'PS4',
    subscribeType: 'Mensal',
  });

  const handlePlatformChange = ({ target }) => setFilter({ ...filter, platform: target.value });

  const handleSubscribeTypeChange = ({ target }) => setFilter({ ...filter, subscribeType: target.value });

  return (
    <Container id="plans_section">
      <Title>{WILL_PLAY_HOW_TITLE}</Title>
      <IconGamepad />

      <ContainerButtons>
        <ButtonsPlanGroup
          defaultValue={filter.platform}
          buttonStyle="solid"
          size="large"
          onChange={handlePlatformChange}
        >
          <ButtonsPlatformOption value="PS4">PS4</ButtonsPlatformOption>
          <ButtonsPlatformOption value="PS5">PS5</ButtonsPlatformOption>
        </ButtonsPlanGroup>
      </ContainerButtons>

      <ContainerButtons>
        <ButtonsPlanGroup
          defaultValue={filter.subscribeType}
          buttonStyle="solid"
          size="large"
          onChange={handleSubscribeTypeChange}
        >
          <ButtonsPlanOption value="Mensal">Mensal</ButtonsPlanOption>
          <ButtonsPlanOption value="Trimestral">Trimestral</ButtonsPlanOption>
          <ButtonsPlanOption value="Semestral">Semestral</ButtonsPlanOption>
          <ButtonsPlanOption value="Anual">Anual</ButtonsPlanOption>
        </ButtonsPlanGroup>
      </ContainerButtons>

      <CarouselPlans
        filter={filter}
      />

    </Container>
  );
};

export default WillPlayHow;
