import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.h1``;

export const LogoImage = styled.img`
  max-height: 200px;
  height: auto;
  margin: 20px;
`;

export const BackgroundImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  filter: opacity(.3);
`;

export const ContainerImageHeader = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const ContainerBody = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 150px;
`;
