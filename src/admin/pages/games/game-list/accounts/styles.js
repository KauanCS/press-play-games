import styled from 'styled-components';
import {
  Divider as AntDivider,
  Input as AntInput,
} from 'antd';

import {
  FaPlus,
  FaTimes,
} from 'react-icons/fa';

import CustomButton from '../../../../../components/custom-button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerAccountInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContainerIconClose = styled.div`
  display: flex;
`;

export const Divider = styled(AntDivider)``;

export const Input = styled(AntInput)``;

export const AccountName = styled.h3`
  font-weight: 500;
  display: flex;
  margin: 0;
  margin-right: 10px;
  align-items: flex-end;
`;

export const Button = styled(CustomButton)`
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

export const IconPlus = styled(FaPlus)`
  margin-right: 5px;
`;

export const IconClose = styled(FaTimes)`
  margin: auto 0 5px 0;
`;
