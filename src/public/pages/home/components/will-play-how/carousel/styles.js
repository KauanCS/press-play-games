import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80vw;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerInside = styled.div`
  position: relative;
  z-index: 10;
  flex: 1;
  width: 80vw;
`;

export const ContainerCardsPlan = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;
