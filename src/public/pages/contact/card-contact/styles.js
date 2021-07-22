import styled from 'styled-components';

import {
  FaWhatsapp,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  width: 350px;
  height: 250px;
  padding: 20px;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.color.publicAccentPrimary};
  box-shadow: 0px 0px 10px 0px rgb(0 255 217 / 35%);
  
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 100%;
  }
`;

export const ContainerRedirect = styled.a``;

export const IconWhatsapp = styled(FaWhatsapp)`
  font-size: 4em;
  color: ${(props) => props.theme.color.white};
`;

export const Text = styled.h2`
  color: ${(props) => props.theme.color.white};
  font-size: 2em;
`;
