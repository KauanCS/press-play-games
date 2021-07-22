import styled from 'styled-components';

import {
  Divider as AntDivider,
} from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.publicPrimaryLight};
  padding: 20px;
  gap: 20px;
`;

export const Divider = styled(AntDivider)`
  background-color: ${(props) => props.theme.color.white};
  width: 25%;
  border-width: 4px;
  &&.ant-divider-horizontal {
    min-width: unset;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: 40px;
  font-weight: 500;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    text-align: center;
  }
`;
