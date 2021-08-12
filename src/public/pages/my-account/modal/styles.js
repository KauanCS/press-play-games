import styled from 'styled-components';

import {
  Modal as AntModal,
  Checkbox as AntCheckbox,
} from 'antd';

export const ContainerVideo = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
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
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
