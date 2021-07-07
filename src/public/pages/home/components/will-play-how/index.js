import React, { useState } from 'react';

import {
  ButtonsPlanGroup,
  ButtonsPlanOption,
  Container,
  ContainerButtons,
  ContainerCardsPlan,
  Title,
  IconGamepad,
} from './styles';

import CardPlan from './card-plan';

import {
  WILL_PLAY_HOW_TITLE,
  WILL_PLAY_HOW_BASIC,
  WILL_PLAY_HOW_BASIC_PLUS,
  WILL_PLAY_HOW_PREMIUM,
  WILL_PLAY_HOW_PREMIUM_PLUS,
} from '../../../../constants/public-home';

const WillPlayHow = () => {
  const [selectedPlan, setSelectedPlan] = useState('anual');
  const [selectedPlatform, setSelectedPlatform] = useState('ps4');

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
          <ButtonsPlanOption value="ps4">PS4</ButtonsPlanOption>
          <ButtonsPlanOption value="ps5">PS5</ButtonsPlanOption>
        </ButtonsPlanGroup>
      </ContainerButtons>

      <ContainerButtons>
        <ButtonsPlanGroup
          defaultValue={selectedPlan}
          buttonStyle="solid"
          size="large"
          onChange={handleSelectPlan}
        >
          <ButtonsPlanOption value="mensal">Mensal</ButtonsPlanOption>
          <ButtonsPlanOption value="trimestral">Trimestral</ButtonsPlanOption>
          <ButtonsPlanOption value="semestral">Semestral</ButtonsPlanOption>
          <ButtonsPlanOption value="anual">Anual</ButtonsPlanOption>
        </ButtonsPlanGroup>
      </ContainerButtons>

      <ContainerCardsPlan>
        <CardPlan
          plan={WILL_PLAY_HOW_BASIC}
          selectedPlan={selectedPlan}
        />
        <CardPlan
          plan={WILL_PLAY_HOW_BASIC_PLUS}
          selectedPlan={selectedPlan}
        />

        {selectedPlan !== 'mensal' && (
          <>
            <CardPlan
              plan={WILL_PLAY_HOW_PREMIUM}
              selectedPlan={selectedPlan}
            />
            <CardPlan
              plan={WILL_PLAY_HOW_PREMIUM_PLUS}
              selectedPlan={selectedPlan}
            />
            <CardPlan
              plan={WILL_PLAY_HOW_PREMIUM}
              selectedPlan={selectedPlan}
            />
            <CardPlan
              plan={WILL_PLAY_HOW_PREMIUM_PLUS}
              selectedPlan={selectedPlan}
            />
          </>
        )}
      </ContainerCardsPlan>

    </Container>
  );
};

export default WillPlayHow;
