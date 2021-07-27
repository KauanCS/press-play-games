import React from 'react';
import { useHistory } from 'react-router-dom';

import { useUserContext } from '../../../../hooks/user';

import {
  ButtonLogin,
  Container,
  ContainerButtons,
  ContainerItem,
  ContainerTextPhone,
  ContainerPhones,
  IconWhatsapp,
  Text,
} from './styles';

const firtPhone = '(41) 98882.4830';
const secondPhone = '(41) 98882.4830';

const TopHeader = () => {
  const history = useHistory();
  const [user, setUser] = useUserContext();
  const redirectToLogin = () => history.push('/login');
  const redirectToSignUp = () => history.push('/cadastrar');

  const handleLogout = () => {
    setUser(null);
    history.push('/');
  };

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

      <ContainerButtons>
        {
          (user && user.auth.signed) ? (
            <>
              <ContainerItem>
                <ButtonLogin>{user.name}</ButtonLogin>
              </ContainerItem>
              <ContainerItem onClick={() => handleLogout()}>
                <ButtonLogin>Logout</ButtonLogin>
              </ContainerItem>
            </>
          ) : (
            <>
              <ContainerItem onClick={() => redirectToSignUp()}>
                <ButtonLogin>CADASTRAR</ButtonLogin>
              </ContainerItem>
              <ContainerItem onClick={() => redirectToLogin()}>
                <ButtonLogin>LOGIN</ButtonLogin>
              </ContainerItem>
            </>
          )
        }

      </ContainerButtons>

    </Container>
  );
};

export default TopHeader;
