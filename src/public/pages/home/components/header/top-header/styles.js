import styled from 'styled-components';

import {
  FaWhatsapp,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.publicAccentSecondary};
  color: ${(props) => props.theme.color.white};
  justify-content: space-between;
  padding: 0 40px;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    justify-content: flex-end;
  }
`;

export const ContainerTextPhone = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: none;
  }
`;

export const ContainerPhones = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px;
`;

export const ContainerLogin = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${(props) => props.theme.color.publicAccentPrimary};
    &&& > a {
      color: black;
    }
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  margin: 0;
`;

export const IconWhatsapp = styled(FaWhatsapp)`
  margin-right: 5px;
  font-size: 22px;
`;

export const ButtonLogin = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
`;
