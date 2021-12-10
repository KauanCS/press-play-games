import styled from 'styled-components';

import { Button as AntButton, Tag as AntTag } from 'antd';

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.bacgroundCatalogueGame};
  box-shadow: 0px 10px 10px -5px rgb(0 0 0 / 20%);
  flex-direction: column;
  flex: 0 1 calc(25% - 1em);
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    flex: 0 1 calc(50% - 1em);
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ContainerAvailability = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const TitleGame = styled.h1`
  font-size: 18px;
  color: ${(props) => props.theme.color.accent};
  text-align: center;
`;

export const Button = styled(AntButton)`
  max-width: 100%;
  margin: 10px 0;
`;

export const Tag = styled(AntTag)`
  max-width: 100%;
  margin: 10px 0;
`;
