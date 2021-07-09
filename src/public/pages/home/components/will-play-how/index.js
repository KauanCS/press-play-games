import React, { useState } from 'react';

import {
  ButtonsPlanGroup,
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
  const [selectedPlan, setSelectedPlan] = useState('Anual');
  const [selectedPlatform, setSelectedPlatform] = useState('PS4');

  const handleSelectPlan = (event) => setSelectedPlan(event.target.value);

  const handleSelectPlatform = (event) => setSelectedPlatform(event.target.value);

  return (
    <Container>
      <Title>{WILL_PLAY_HOW_TITLE}</Title>
      <IconGamepad />

      <ContainerButtons>
        <ButtonsPlanGroup
          defaultValue={selectedPlatform}
          buttonStyle="solid"
          size="large"
          onChange={handleSelectPlatform}
        >
          <ButtonsPlanOption value="PS4">PS4</ButtonsPlanOption>
          <ButtonsPlanOption value="PS5">PS5</ButtonsPlanOption>
        </ButtonsPlanGroup>
      </ContainerButtons>

      <ContainerButtons>
        <ButtonsPlanGroup
          defaultValue={selectedPlan}
          buttonStyle="solid"
          size="large"
          onChange={handleSelectPlan}
        >
          <ButtonsPlanOption value="Mensal">Mensal</ButtonsPlanOption>
          <ButtonsPlanOption value="Trimestral">Trimestral</ButtonsPlanOption>
          <ButtonsPlanOption value="Semestral">Semestral</ButtonsPlanOption>
          <ButtonsPlanOption value="Anual">Anual</ButtonsPlanOption>
        </ButtonsPlanGroup>
      </ContainerButtons>

      <CarouselPlans
        selectedPlan={selectedPlan}
        selectedPlatform={selectedPlatform}
      />

    </Container>
  );
};

export default WillPlayHow;
