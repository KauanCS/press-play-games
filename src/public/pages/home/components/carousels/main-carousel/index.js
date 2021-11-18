import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Carousel,
  Container,
  ContainerImage,
  IconLeftArrow,
  IconRightArrow,
  Text,
  SubText,
  WrapButton,
} from './styles';

const URL_MILES_MORALES_IMAGE = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner3-desenvolvimento-pressplaygames.jpg';
const URL_GOD_OF_WAR_IMAGE = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner1-desenvolvimento-pressplaygames.jpg';
const URL_CRASH_IMAGE = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/banner2-desenvolvimento-pressplaygames.jpg';

const AUTOPLAY_SPEED = 5000; // 5 seconds

const MainCarousel = () => {
  const onChange = (a, b, c) => console.log(a, b, c);

  const history = useHistory();

  const redirectToCatalogue = () => history.push('/catalogo');

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
        <ContainerImage position="right" imageUrl={URL_GOD_OF_WAR_IMAGE}>
          <Text>EXPLORE SEM MEDO!</Text>
          <SubText>Com a Pressplay Games, você  pode testar seus jogos o quanto quiser, se não gostar, basta trocar.</SubText>
        </ContainerImage>
        <ContainerImage position="center" imageUrl={URL_CRASH_IMAGE} end>
          <Text>MUITA DIVERSÃO</Text>
          <SubText end>A Pressplay Games possuí mais de 300 em um catalogo que inclui os melhores lançamentos do mercado.</SubText>
          <Button onClick={() => redirectToCatalogue()}>CONFIRA</Button>
        </ContainerImage>
        <ContainerImage position="right" imageUrl={URL_MILES_MORALES_IMAGE}>
          <Text>LIBERDADE TOTAL!</Text>
          <SubText>Com a Pressplay Games, você decide o quanto vai jogar, basta escolher o melhor plano para você, e sair dando PLAY!</SubText>
          <WrapButton href="#plans_section">
            <Button>CONFERIR PLANOS</Button>
          </WrapButton>
        </ContainerImage>
      </Carousel>
    </Container>
  );
};

export default MainCarousel;
