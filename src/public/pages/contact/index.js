import React from 'react';

import {
  Button,
  Container,
  ContainerPhones,
  ContainerContact,
  ContainerLeft,
  ContainerRight,
  ContainerSocialMedia,
  ContainerMediaItem,
  ContainerInputs,
  BackgroundImage,
  Overlay,
  TitleHeader,
  Input,
  TitleContainer,
  Divider,
  Select,
  IconFacebook,
  IconWhatsapp,
  IconInstagram,
  TextSocialMedia,
} from './styles';

import CardContact from './card-contact';
import Partner from './partner';

import {
  FOOTER_FACEBOOK_LINK,
  FOOTER_INSTAGRAM_LINK,
  FOOTER_WHATSAPP_LINK,
} from '../../constants/public-home';

const JULIO_PHONE = 'https://api.whatsapp.com/send?phone=5516988721064&text=Falar%20com%20Julio';
const JUNIOR_PHONE = 'https://api.whatsapp.com/send?phone=5516988510743&text=Falar%20com%20Junior';
const WILLIAN_PHONE = 'https://api.whatsapp.com/send?phone=5541999185145&text=Falar%20com%20Willian';

const Contact = () => {
  const { TextArea } = Input;
  const { Option } = Select;
  return (
    <Container>
      <BackgroundImage>
        <Overlay />
        <TitleHeader>CONTATO</TitleHeader>
      </BackgroundImage>

      <Divider>NOSSOS REPRESENTANTES</Divider>

      <ContainerPhones>
        <CardContact link={JULIO_PHONE} name="Julio" phone="(16) 98872-1064" />
        <CardContact link={JUNIOR_PHONE} name="Junior" phone="(16) 98851-0743" />
        <CardContact link={WILLIAN_PHONE} name="Willian" phone="(41) 9918-5145" />
      </ContainerPhones>

      <Divider />

      <ContainerContact>
        <ContainerLeft>
          <TitleContainer>PRECISANDO DE UMA FORÇA?</TitleContainer>
          <Divider />
          <ContainerInputs>
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Select placeholder="Selecione sua dúvida">
              <Option value="signature">Dúvida sobre assinatura</Option>
              <Option value="catalogue">Dúvida sobre o catálogo</Option>
              <Option value="delivery">Dúvida sobre a entrega</Option>
              <Option value="other">Outro</Option>
            </Select>
            <TextArea placeholder="Mensagem" autoSize={{ minRows: 6, maxRows: 6 }} />
            <Button size="large">Enviar</Button>
          </ContainerInputs>
        </ContainerLeft>

        <ContainerRight>
          <TitleContainer center>NOSSAS REDES SOCIAIS</TitleContainer>
          <Divider center />
          <ContainerSocialMedia>
            <ContainerMediaItem href={FOOTER_FACEBOOK_LINK}>
              <IconFacebook />
              <TextSocialMedia>PRESSPLAY GAMES FB</TextSocialMedia>
            </ContainerMediaItem>

            <ContainerMediaItem href={FOOTER_INSTAGRAM_LINK}>
              <IconInstagram />
              <TextSocialMedia>@PRESSPLAYGAMES</TextSocialMedia>
            </ContainerMediaItem>

            <ContainerMediaItem href={FOOTER_WHATSAPP_LINK}>
              <IconWhatsapp />
              <TextSocialMedia>GRUPO WHATSAPP</TextSocialMedia>
            </ContainerMediaItem>
          </ContainerSocialMedia>
        </ContainerRight>
      </ContainerContact>

      <Partner />

    </Container>
  );
};

export default Contact;
