import styled from 'styled-components';

import { Divider as AntiDivider } from 'antd';

import {
  FaStar,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.publicPrimary};
  padding: 40px;
`;

export const Box = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.publicPrimaryLight};
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  gap: 40px;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 20px;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: 40px;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.color.publicAccentPrimary};
  font-weight: 600;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const Divider = styled(AntiDivider)`
  && {
    border-color: ${(props) => props.theme.color.white};
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  &&.ant-divider-horizontal.ant-divider-with-text::before, 
  &&.ant-divider-horizontal.ant-divider-with-text::after {
      border-width: 4px;
      width: 20%;
    }
`;

export const IconStar = styled(FaStar)`
  color: ${(props) => props.theme.color.publicTitleSecondary};
  font-size: 26px;
`;

export const ButtonKnowMore = styled.a`
  background-color: ${(props) => props.theme.color.publicPrimaryLight};
  border-radius: 0 0 80px 80px;
  color: ${(props) => props.theme.color.white};
  padding: 10px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  transition: 0.2s linear;
  box-shadow: 0px 6px 10px -4px rgb(0 147 178 / 57%);
  :hover {
    width: 250px;
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.publicAccentPrimary};
  }
`;
