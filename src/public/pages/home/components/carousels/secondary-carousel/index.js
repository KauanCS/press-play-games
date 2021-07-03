import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  Container,
  ContainerInside,
  Image,
} from './styles';

const urlImage = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/capa2-game-ps4-desensolvimento-pressplay.jpg';

const SecondaryCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
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

  return (
    <Container>
      <ContainerInside>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          customTransition="all 3s linear"
          draggable
          focusOnSelect={false}
          infinite
          minimumTouchDrag={80}
          responsive={responsive}
          showDots={false}
          slidesToSlide={2}
          swipeable
          transitionDuration={3000}
        >
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
          <Image src={urlImage} />
        </Carousel>
      </ContainerInside>
    </Container>
  );
};

export default SecondaryCarousel;
