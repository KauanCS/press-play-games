import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  Container,
  ContainerInside,
  ContainerCardsPlan,
} from './styles';

import CardPlan from '../card-plan';

import {
  WILL_PLAY_HOW_BASIC,
  WILL_PLAY_HOW_BASIC_PLUS,
  WILL_PLAY_HOW_PREMIUM,
  WILL_PLAY_HOW_PREMIUM_PLUS,
} from '../../../../../constants/public-home';

// import {
//   WILL_PLAY_HOW_PS4_BRONZE,
//   WILL_PLAY_HOW_PS4_SILVER,
//   WILL_PLAY_HOW_PS4_PLATINUM,
//   WILL_PLAY_HOW_PS4_GOLD,
//   WILL_PLAY_HOW_PS4_DIAMOND,
//   WILL_PLAY_HOW_PS4_SAPPHIRE,
//   WILL_PLAY_HOW_PS5_BRONZE,
//   WILL_PLAY_HOW_PS5_SILVER,
//   WILL_PLAY_HOW_PS5_PLATINUM,
//   WILL_PLAY_HOW_PS5_GOLD,
//   WILL_PLAY_HOW_PS5_DIAMOND,
//   WILL_PLAY_HOW_PS5_SAPPHIRE,
// } from '../../../../../constants/plans';

import PLANS from '../../../../../constants/plans';

const CarouselPlans = (props) => {
  const {
    selectedPlan,
    selectedPlatform,
  } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const filterPlans = () => {
  //   const filterByPlatform = PLANS.filter((plan) => plan.platform === selectedPlatform);
  //   const filterByPeriod = filterByPlatform.map((plan) => plan.subscribeType.find((type) => type.type === selectedPlan));
  //   return filterByPeriod;
  // };

  const filteredPlans = useMemo(() => PLANS.filter((plan) => plan.platform === selectedPlatform), []);

  // console.log(filteredPlans);

  if (selectedPlan === 'mensal') {
    return (
      <ContainerCardsPlan>
        <CardPlan
          plan={WILL_PLAY_HOW_BASIC}
          selectedPlan={selectedPlan}
        />
        <CardPlan
          plan={WILL_PLAY_HOW_BASIC_PLUS}
          selectedPlan={selectedPlan}
        />
        <CardPlan
          plan={WILL_PLAY_HOW_BASIC_PLUS}
          selectedPlan={selectedPlan}
        />
      </ContainerCardsPlan>
    );
  }

  return (
    <Container>
      <ContainerInside>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots={false}
          responsive={responsive}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {filteredPlans.map((plan) => (
            <CardPlan
              plan={plan}
              selectedPlan={selectedPlan}
            />
          ))}
        </Carousel>
      </ContainerInside>
    </Container>
  );
};

CarouselPlans.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
  selectedPlatform: PropTypes.string.isRequired,
};

export default CarouselPlans;
