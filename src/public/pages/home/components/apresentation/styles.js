import styled from 'styled-components';

import {
  FaGamepad,
} from 'react-icons/fa';

const urlBackground = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/PlayStation-Sony-PAX-East.jpg';

export const Container = styled.div`
  display: flex;
  height: 600px;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBox = styled.div`
  display: flex;
  margin-top: 150px;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const BackgroundImage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${urlBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.color.black};
  opacity: 0.8;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  height: 400px;
  width: 45%;
  border-radius: 8px;
  padding: 40px;
  gap: 20px;
  background-color: ${(props) => props.theme.color.publicPrimary};
  box-shadow: 0px 0px 25px 1px rgb(0 0 0 / 69%);
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: 40px;
  font-weight: 500;
`;

export const Divisor = styled.div`
  border-bottom: 4px solid ${(props) => props.theme.color.publicAccentPrimary};
  width: 30%;
  align-self: flex-start;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color.textDescriptionApresentation};
  font-size: 16px;
`;

export const IconGamepad = styled(FaGamepad)`
  color: ${(props) => props.theme.color.publicAccentPrimary};
  font-size: 70px;
`;

export const ImageGamer = styled.img`
  height: 250px;
  width: auto;
  margin-left: -20px;
  position: relative;
  z-index: 0;
`;
