import React from 'react';

import {
  Carousel,
  Container,
  ContainerImage,
  IconLeftArrow,
  IconRightArrow,
} from './styles';

const URL_MILES_MORALES_IMAGE = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner3-desenvolvimento-pressplaygames.jpg';
const URL_GOD_OF_WAR_IMAGE = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner1-desenvolvimento-pressplaygames.jpg';
const URL_CRASH_IMAGE = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner2-desenvolvimento-pressplaygames.jpg';

const AUTOPLAY_SPEED = 5000; // 5 seconds

const MainCarousel = () => {
  const onChange = (a, b, c) => console.log(a, b, c);

  return (
    <Container>
      <Carousel
        autoplay
        autoplaySpeed={AUTOPLAY_SPEED}
        afterChange={onChange}
        dots={false}
        arrows
        prevArrow={<IconLeftArrow />}
        nextArrow={<IconRightArrow />}
      >
        <ContainerImage position="right" imageUrl={URL_GOD_OF_WAR_IMAGE} />
        <ContainerImage position="center" imageUrl={URL_CRASH_IMAGE} />
        <ContainerImage position="right" imageUrl={URL_MILES_MORALES_IMAGE} />
      </Carousel>
    </Container>
  );
};

export default MainCarousel;
