import styled from 'styled-components';
import {
  Divider as AntDivider,
  Button as AntButton,
} from 'antd';

import {
  FaArrowRight,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.color.publicBackgroundOverlay};
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -5px rgb(0 0 0 / 20%);
`;

export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => props.bold && `
    font-weight: 700;
  `}
`;

export const Button = styled(AntButton)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Divider = styled(AntDivider)`
  && {
    border-color: ${(props) => props.theme.color.white};
    margin: 0;
  }
`;

export const IconArrow = styled(FaArrowRight)`
  position: absolute;
  right: 10px;
  font-size: 18px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 15px;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 15px;
`;
