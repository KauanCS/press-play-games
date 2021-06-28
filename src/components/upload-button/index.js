import React from 'react';
import ImgCrop from 'antd-img-crop';
import PropTypes from 'prop-types';

import {
  UploadArea,
  Loader,
  IconPlus,
  Image,
} from './styles';

const UploadButton = (props) => {
  const {
    name,
    imageUrl,
    loading,
  } = props;

  const uploadButton = (
    <div>
      {loading ? <Loader /> : <IconPlus />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <ImgCrop
      rotate
      modalTitle="Editar imagem"
      grid
    >
      <UploadArea
        name={name}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
      >
        {imageUrl
          ? <Image src={imageUrl} alt="game" />
          : uploadButton}
      </UploadArea>
    </ImgCrop>
  );
};

UploadButton.propTypes = {
  imageUrl: PropTypes.bool,
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

UploadButton.defaultProps = {
  imageUrl: false,
  loading: false,
};

export default UploadButton;
