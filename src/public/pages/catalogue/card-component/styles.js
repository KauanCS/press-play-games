import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.color.bacgroundCatalogueGame};
  box-shadow: 0px 10px 10px -5px rgb(0 0 0 / 20%);
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ContainerPlatforms = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContainerAvailability = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 140px;
`;

export const TitleGame = styled.h1`
  font-size: 18px;
  color: ${(props) => props.theme.color.accent};
`;

export const TextPlatform = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.color.publicAccentPrimary};
  margin: 0;
`;

export const TextAvailability = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.theme.color.white};
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  margin-top: 5px;
`;
