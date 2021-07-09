import React, { useMemo } from 'react';
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
    // maxTrades,
    whereWillPlay,
    connectionType,
    textFooter,
    gamesPerTime,
  } = plan;

  const planInfo = _.find(subscribeType, (type) => type.type === _.capitalize(selectedPlan));

  if (!planInfo) {
    return (<> </>);
  }

  const createStructurePlan = () => {
    const price = planInfo.pricePerMonth.split('.');
    if (planInfo.type === 'Trimestral') {
      return {
        intPrice: price[0],
        centsPrice: price[1],
        tradesPerMonth: price.maxTrades / 3,
      };
    }
    if (planInfo.type === 'Semestral') {
      return {
        intPrice: price[0],
        centsPrice: price[1],
        tradesPerMonth: price.maxTrades / 6,
      };
    }
    return {
      intPrice: price[0],
      centsPrice: price[1],
      tradesPerMonth: price.maxTrades / 12,
    };
  };

  const structurePlan = useMemo(() => createStructurePlan(), []);

  return (
    <Container>
      <ContainerHeader color={color}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerHeader>

      <ContainerContent>
        <ContainerPrice>
          <TextPrice color={color}>12x</TextPrice>
          <TextPriceValue color={color}>{structurePlan.intPrice}</TextPriceValue>
          <TextPrice color={color}>{structurePlan.centsPrice}</TextPrice>
        </ContainerPrice>
        <TextPlanType color={color}>{`ou ${planInfo.totalPrice} por ano`}</TextPlanType>

        <ContainerItem>
          <IconGamepad />
          <TextItem>{`${gamesPerTime} jogo por vez`}</TextItem>
        </ContainerItem>

        <Divider />

        <ContainerItem>
          <IconExchange />
          <TextItem>{`${structurePlan.tradesPerMonth} trocas durante o mes`}</TextItem>
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
    gamesPerTime: PropTypes.number,
    subscribeType: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      price: PropTypes.number,
      gamesPerTime: PropTypes.number,
    })),
  }).isRequired,
};

export default CardPlan;
