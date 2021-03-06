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

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  position: relative;
  font-size: 40px;
  font-weight: 600;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 95%;
    text-align: center;
  }
`;

export const IconGamepad = styled(FaGamepad)`
  color: ${(props) => props.theme.color.publicAccentSecondary};
  font-size: 62px;
`;

export const ButtonsPlanGroup = styled(AntRadio.Group)`
  && {
    width: 100%;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    && {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export const ButtonsPlatformOption = styled(AntRadio.Button)`
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

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    &&.ant-radio-button-wrapper:first-child {
      border-radius: 0;
    }

    &&.ant-radio-button-wrapper:last-child {
      border-radius: 0;
    }
  }
`;
