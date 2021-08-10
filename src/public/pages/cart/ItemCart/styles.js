import styled from 'styled-components';

import {
  FaTrash,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.publicPrimaryLight};
  padding: 40px 20px;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0px 10px 10px -5px rgb(0 0 0 / 20%);
  align-items: center;
  justify-content: space-between;
`;

export const ContainerEnd = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  margin: 0;
`;

export const Price = styled.p`
  color: ${(props) => props.theme.color.white};;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export const IconTrash = styled(FaTrash)`
  color: ${(props) => props.theme.color.white};;
  font-size: 28px;
  margin-left: 10px;
  cursor: pointer;
  padding: 5px;
`;
