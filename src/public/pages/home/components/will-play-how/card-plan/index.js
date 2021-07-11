import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

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
    filter,
  } = props;

  const {
    title,
    color,
    subtitle,
    whereWillPlay,
    connectionType,
    textFooter,
    gamesPerTime,
    pricePerMonth,
    type,
    maxTrades,
    totalPrice,
  } = plan;

  const createStructurePlan = () => {
    const price = pricePerMonth.split('.');
    if (type === 'Mensal') {
      const totalMonths = 1;
      return {
        intPrice: price[0],
        centsPrice: price[1],
        tradesPerMonth: maxTrades / totalMonths,
        months: totalMonths,
      };
    }
    if (type === 'Trimestral') {
      const totalMonths = 3;
      return {
        intPrice: price[0],
        centsPrice: price[1],
        tradesPerMonth: maxTrades / totalMonths,
        months: totalMonths,
      };
    }
    if (type === 'Semestral') {
      const totalMonths = 6;
      return {
        intPrice: price[0],
        centsPrice: price[1],
        tradesPerMonth: maxTrades / totalMonths,
        months: totalMonths,
      };
    }
    const totalMonths = 12;
    return {
      intPrice: price[0],
      centsPrice: price[1],
      tradesPerMonth: maxTrades / totalMonths,
      months: totalMonths,
    };
  };

  const structurePlan = useMemo(() => createStructurePlan(), [filter]);

  return (
    <Container>
      <ContainerHeader color={color}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerHeader>

      <ContainerContent>
        <ContainerPrice>
          {structurePlan.months === 1 ? (
            <TextPrice color={color}>R$</TextPrice>
          ) : (
            <TextPrice color={color}>{`${structurePlan.months}x`}</TextPrice>
          )}
          <TextPriceValue color={color}>{structurePlan.intPrice}</TextPriceValue>
          <TextPrice color={color}>{structurePlan.centsPrice}</TextPrice>
        </ContainerPrice>
        {structurePlan.months !== 1 && (
          <TextPlanType color={color}>{`ou ${totalPrice} por ano`}</TextPlanType>
        )}

        <ContainerItem marginTop>
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
  filter: PropTypes.shape({
    platform: PropTypes.string,
    subscribeType: PropTypes.string,
  }).isRequired,
  plan: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    subtitle: PropTypes.string,
    maxTrades: PropTypes.number,
    whereWillPlay: PropTypes.string,
    connectionType: PropTypes.string,
    textFooter: PropTypes.string,
    gamesPerTime: PropTypes.number,
    type: PropTypes.string,
    pricePerMonth: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

CardPlan.defaultProps = { };

export default CardPlan;
