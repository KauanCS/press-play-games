import styled from 'styled-components';

import {
  FaLock,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  width: 50%;
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`;

export const Image = styled.img`
  max-height: 150px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.white};
`;

export const Description = styled.p`
  margin: 0;
`;

export const FixProblem = styled.a`
  margin-top: auto;
`;

export const IconLock = styled(FaLock)`
  font-size: 16px;
  margin-right: 5px;
`;
