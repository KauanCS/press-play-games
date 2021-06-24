import styled from 'styled-components';

import {
  FaPlus,
} from 'react-icons/fa';

import { LoadingOutlined } from '@ant-design/icons';

import {
  Upload as AntUpload,
} from 'antd';

export const UploadArea = styled(AntUpload)`
  width: 150px; 
  height: 150px; 
  && .ant-upload.ant-upload-select-picture-card {
    width: 100%;
    height: 100%;
  }
`;

export const IconPlus = styled(FaPlus)``;

export const Loader = styled(LoadingOutlined)``;

export const Image = styled.img`
  width: 100%;
`;
