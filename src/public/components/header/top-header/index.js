import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  ButtonLogin,
  Container,
  ContainerButtons,
  ContainerItem,
  ContainerPhones,
  ContainerTextPhone,
  ContainerUser,
  Dropdown,
  IconDown,
  IconUser,
  IconWhatsapp,
  Menu,
  Text,
  TextUser,
} from './styles';

const firtPhone = '(41) 98882.4830';
const secondPhone = '(41) 98882.4830';

const TopHeader = () => {
  const history = useHistory();
  const redirectToLogin = () => history.push('/login');
  const redirectToSignUp = () => history.push('/cadastrar');
  const redirectToMyAccount = () => history.push('/minha-conta');
  const redirectToHistoric = () => history.push('/historico');

  const menu = (
    <Menu>
      {/* <Menu.Item key="0">
        <a href="https://www.antgroup.com">Meus jogos</a>
      </Menu.Item> */}
      <Menu.Item key="1" onClick={() => redirectToHistoric()}>
        <p>Histórico de pedidos</p>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => redirectToMyAccount()}>
        <p>Minha conta</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Sair</Menu.Item>
    </Menu>
  );

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
        <ContainerItem onClick={() => redirectToSignUp()}>
          <ButtonLogin>CADASTRAR</ButtonLogin>
        </ContainerItem>
        <ContainerItem onClick={() => redirectToLogin()}>
          <ButtonLogin>LOGIN</ButtonLogin>
        </ContainerItem>
        <ContainerUser>
          <Dropdown overlay={menu} trigger={['click']}>
            <TextUser>
              <IconUser />
              Click me
              <IconDown />
            </TextUser>
          </Dropdown>

        </ContainerUser>
      </ContainerButtons>

    </Container>
  );
};

export default TopHeader;
