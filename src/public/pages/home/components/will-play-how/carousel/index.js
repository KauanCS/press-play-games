import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import {
  Carousel,
  Container,
  ContainerInside,
} from './styles';

import CardPlan from '../card-plan';

import PLANS from '../../../../../constants/plans';

const CarouselPlans = (props) => {
  const {
    filter,
  } = props;

  const [filteredPlans, setFilteredPlans] = useState([]);

  useEffect(() => {
    const mappedItems = PLANS.filter((x) => x.platform === filter.platform)
      .reduce((acc, value) => {
        const newobjects = value.subscribeType.map((x) => ({
          ...x,
          title: value.title,
          color: value.color,
          subtitle: value.subtitle,
          whereWillPlay: value.whereWillPlay,
          connectionType: value.connectionType,
          textFooter: value.textFooter,
          gamesPerTime: value.gamesPerTime,
        }));

        return [...acc, ...newobjects];
      }, [])
      .filter((x) => x.type === filter.subscribeType);
    setFilteredPlans(mappedItems);
  }, [filter]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <Container>
      <ContainerInside>
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
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
              key={v4()}
              plan={plan}
              filter={filter}
            />
          ))}
        </Carousel>
      </ContainerInside>
    </Container>
  );
};

CarouselPlans.propTypes = {
  filter: PropTypes.shape({
    platform: PropTypes.string,
    subscribeType: PropTypes.string,
  }).isRequired,
};

export default CarouselPlans;
