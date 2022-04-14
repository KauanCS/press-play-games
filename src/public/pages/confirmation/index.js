import React from 'react';
import emailMessage from '../../../static/images/emailMessage.png';

import {
  Container,
  ContainerResend,
  Card,
  Title,
  TextResend,
  EmailText,
  Description,
  Image,
} from './styles';

const Confirmation = () => {
  const text = 'Confirmação de email';
  const userEmail = 'example.123@gmail.com';

  return (
    <Container>
      <Card>
        <Image src={emailMessage} />
        <Title>
          {text}
        </Title>
        <Description>
          Sua conta acaba de ser registrada!
          <br />
          Por favor, acesse o e-mail
          <EmailText>
            {' '}
            {userEmail}
            {' '}
          </EmailText>
          e valide seu registro.
        </Description>

        <ContainerResend>
          <TextResend>
            Não recebeu nenhum e-mail?
            <a href="/">
              {' '}
              Click aqui
              {' '}
            </a>
            para reenviar
          </TextResend>
        </ContainerResend>
      </Card>
    </Container>
  );
};

export default Confirmation;
