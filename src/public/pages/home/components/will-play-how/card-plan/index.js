import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Button,
  Container,
  ContainerContent,
  ContainerHeader,
  ContainerPrice,
  ContainerItem,
  Divider,
  TextPrice,
  TextPriceValue,
  TextPlanType,
  TextItem,
  TextFooter,
  Title,
  IconGamepad,
  IconExchange,
  IconUser,
  IconInternet,
  Subtitle,
} from './styles';

import { WILL_PLAY_HOW_SUBSCRIBE } from '../../../../../constants/public-home';

const CardPlan = (props) => {
  const {
    plan,
    selectedPlan,
  } = props;

  const {
    title,
    color,
    subtitle,
    subscribeType,
    maxTrades,
    whereWillPlay,
    connectionType,
    textFooter,
  } = plan;

  const planInfo = _.find(subscribeType, (type) => type.type === _.capitalize(selectedPlan));

  return (
    <Container>
      <ContainerHeader color={color}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerHeader>

      <ContainerContent>
        <ContainerPrice>
          <TextPrice color={color}>R$</TextPrice>
          <TextPriceValue color={color}>{planInfo.price}</TextPriceValue>
          <TextPrice color={color}>00</TextPrice>
        </ContainerPrice>
        <TextPlanType color={color}>{_.capitalize(selectedPlan)}</TextPlanType>

        <ContainerItem>
          <IconGamepad />
          <TextItem>{`${planInfo.gamesPerTime} jogo por vez`}</TextItem>
        </ContainerItem>

        <Divider />

        <ContainerItem>
          <IconExchange />
          <TextItem>{`${maxTrades} trocas durante o mes`}</TextItem>
        </ContainerItem>

        <Divider />

        <ContainerItem>
          <IconUser />
          <TextItem>{whereWillPlay}</TextItem>
        </ContainerItem>

        <Divider />

        <ContainerItem>
          <IconInternet />
          <TextItem>{connectionType}</TextItem>
        </ContainerItem>

        <Button
          color={color}
        >
          {WILL_PLAY_HOW_SUBSCRIBE}
        </Button>
        <TextFooter>{textFooter}</TextFooter>

      </ContainerContent>

    </Container>
  );
};

CardPlan.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
  plan: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    subtitle: PropTypes.string,
    maxTrades: PropTypes.number,
    whereWillPlay: PropTypes.string,
    connectionType: PropTypes.string,
    textFooter: PropTypes.string,
    subscribeType: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      price: PropTypes.number,
      gamesPerTime: PropTypes.number,
    })),
  }).isRequired,
};

export default CardPlan;
