import styled from 'styled-components';

import { Radio as AntRadio } from 'antd';

import {
  FaGamepad,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.publicPrimaryLight};
  padding: 20px 0;
  gap: 20px;
`;

export const ContainerCardsPlan = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  position: relative;
  font-size: 40px;
  font-weight: 600;
`;

export const IconGamepad = styled(FaGamepad)`
  color: ${(props) => props.theme.color.publicAccentSecondary};
  font-size: 62px;
`;

export const ButtonsPlanGroup = styled(AntRadio.Group)`
  && {
    width: 100%;
  }
`;

export const ButtonsPlanOption = styled(AntRadio.Button)`
  && {
    border: unset;
    width: 150px;
    font-weight: 500;
    text-align: center;
    font-size: 16px;
  }

  &&.ant-radio-button-wrapper:first-child {
    border-radius: 100px 0 0 100px;
  }

  &&.ant-radio-button-wrapper:last-child {
    border-radius: 0 100px 100px 0;
  }

  &&.ant-radio-button-wrapper:not(:first-child)::before {
    width: 0;
  }
`;
