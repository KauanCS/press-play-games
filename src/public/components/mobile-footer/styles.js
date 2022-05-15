import styled from 'styled-components';
import {
  FaHome,
  FaGamepad,
  FaUserAlt,
  FaClipboardList,
} from 'react-icons/fa';

// MOBILE ONLY
export const Container = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
    background: ${(props) => props.theme.color.publicPrimaryDark};
    position: absolute;
    bottom: 0;
    height: 70px;
    width: 100%;
    z-index: 999999999;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconHome = styled(FaHome)`
  color: white;
  font-size: 32px;
`;

export const IconProfile = styled(FaUserAlt)`
  color: white;
  font-size: 32px;
`;

export const IconGame = styled(FaGamepad)`
  color: white;
  font-size: 32px;
`;

export const IconOrders = styled(FaClipboardList)`
  color: white;
  font-size: 32px;
`;

export const Text = styled.p`
  color: white;
  margin: 0;
`;
