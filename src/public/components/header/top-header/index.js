import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonLogin,
  Container,
  ContainerLogin,
  ContainerTextPhone,
  ContainerPhones,
  IconWhatsapp,
  Text,
} from './styles';

const firtPhone = '(41) 98882.4830';
const secondPhone = '(41) 98882.4830';

const TopHeader = () => {
  const history = useHistory();
  const redirectToLogin = () => history.push('/login');

  return (
    <Container>

      <ContainerPhones>
        <ContainerTextPhone>
          <IconWhatsapp />
          <Text>{firtPhone}</Text>
        </ContainerTextPhone>
        <ContainerTextPhone>
          <IconWhatsapp />
          <Text>{secondPhone}</Text>
        </ContainerTextPhone>
      </ContainerPhones>

      <ContainerLogin onClick={() => redirectToLogin()}>
        <ButtonLogin>LOGIN</ButtonLogin>
      </ContainerLogin>
    </Container>
  );
};

export default TopHeader;
