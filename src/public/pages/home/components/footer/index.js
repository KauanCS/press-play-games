import React from 'react';

import {
  BottomFooter,
  BottomText,
  Container,
  ContainerContent,
  ContainerLeft,
  ContainerMid,
  ContainerRight,
  ContainerItemsRight,
  ContainerText,
  Text,
  Title,
  IconWhatsapp,
  IconDiscord,
  IconEnvelope,
  IconFacebook,
  IconInstagram,
} from './styles';

import {
  FOOTER_CONTACT,
  FOOTER_WHATSAPP,
  FOOTER_DISCORD,
  FOOTER_EMAIL,
  FOOTER_FACEBOOK,
  FOOTER_INSTAGRAM,
  FOOTER_LIKE_PAGE,
  FOOTER_LINKS,
  FOOTER_HOW_IT_WORKS,
  FOOTER_INSTALLATION,
  FOOTER_PLANS_PRICE,
  FOOTER_FACEBOOK_SRC,
  FOOTER_FACEBOOK_LINK,
  FOOTER_WHATSAPP_LINK,
  FOOTER_INSTAGRAM_LINK,
  FOOTER_COPYRIGHT,
  FOOTER_DEVELOP_BY,
} from '../../../../constants/public-home';

const Footer = () => (
  <Container>
    <ContainerContent>
      <ContainerLeft>
        <Title fontSize="16px">{FOOTER_CONTACT}</Title>
        <ContainerText href={FOOTER_WHATSAPP_LINK}>
          <IconWhatsapp />
          <Text>{FOOTER_WHATSAPP}</Text>
        </ContainerText>

        <ContainerText noCursor>
          <IconDiscord />
          <Text>{FOOTER_DISCORD}</Text>
        </ContainerText>

        <ContainerText noCursor>
          <IconEnvelope />
          <Text>{FOOTER_EMAIL}</Text>
        </ContainerText>

        <ContainerText href={FOOTER_FACEBOOK_LINK}>
          <IconFacebook />
          <Text>{FOOTER_FACEBOOK}</Text>
        </ContainerText>

        <ContainerText href={FOOTER_INSTAGRAM_LINK}>
          <IconInstagram />
          <Text>{FOOTER_INSTAGRAM}</Text>
        </ContainerText>
      </ContainerLeft>

      <ContainerMid>
        <Title>{FOOTER_LIKE_PAGE}</Title>
        <iframe
          title="facebook-plugin"
          src={FOOTER_FACEBOOK_SRC}
          width="425"
          height="130"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </ContainerMid>

      <ContainerRight>
        <Title fontSize="16px">{FOOTER_LINKS}</Title>

        <ContainerItemsRight>
          <ContainerText>
            <Text>{FOOTER_HOW_IT_WORKS}</Text>
          </ContainerText>

          <ContainerText>
            <Text>{FOOTER_INSTALLATION}</Text>
          </ContainerText>

          <ContainerText>
            <Text>{FOOTER_PLANS_PRICE}</Text>
          </ContainerText>
        </ContainerItemsRight>

      </ContainerRight>
    </ContainerContent>
    <BottomFooter>
      <BottomText>{FOOTER_COPYRIGHT}</BottomText>
      <BottomText>{FOOTER_DEVELOP_BY}</BottomText>
    </BottomFooter>
  </Container>
);

export default Footer;
