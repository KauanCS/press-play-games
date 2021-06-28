import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.publicPrimaryDark};
  padding: 0 40px;
  justify-content: space-between;
`;

export const ContainerTitle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 18px;
`;

export const ContainerMenuItems = styled.div`
  gap: 10px;
  display: flex;
`;

export const ContainerItem = styled.div`
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

export const MenuItem = styled.a`
  font-size: 18px;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
`;

export const TitlePressPlay = styled.h2`
  color: ${(props) => props.theme.color.publicTitlePrimary};
  font-family: 'Russo One Regular';
  margin-right: 5px;
`;

export const TitleGames = styled.h2`
  color: ${(props) => props.theme.color.publicTitleSecondary};
  font-family: 'Russo One Regular';
`;
