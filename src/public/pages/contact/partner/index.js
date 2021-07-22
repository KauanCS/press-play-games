import React from 'react';

import {
  Button,
  Container,
  ContainerTextPartner,
  BackgroundImage,
  Overlay,
  Card,
  Image,
  Title,
  Text,
} from './styles';

const URL_PLAYING = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/sejaparceiro-desenvolvimento-pressplaygames-1024x683.jpg';

const Partner = () => (
  <Container>
    <BackgroundImage>
      <Overlay />
      <Card>
        <Image src={URL_PLAYING} />
        <ContainerTextPartner>
          <Title>QUER SER UM PARCEIRO?</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Text>

          <Button>JUNTAR-SE A EQUIPE</Button>
        </ContainerTextPartner>
      </Card>
    </BackgroundImage>
  </Container>
);

export default Partner;
