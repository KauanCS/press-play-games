import styled from 'styled-components';

import {
  Modal as AntModal,
  Checkbox as AntCheckbox,
} from 'antd';

export const ContainerVideo = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Description = styled.p``;

export const Modal = styled(AntModal)``;

export const Checkbox = styled(AntCheckbox)``;

export const Iframe = styled.iframe`
  width: 420px;
  height: 315px;
`;
