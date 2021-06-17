import React from 'react';

import {
  Checkbox,
  Container,
  ContainerTitle,
  CopyIcon,
  Title,
  Tooltip,
} from './styles';

const ItemTitle = () => {
  const user = 'ppg1111';
  const obsText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

  const handleClickCheckBox = (e) => {
    e.stopPropagation();
  };

  const handleClickCopyIcon = (e) => {
    e.stopPropagation();
  };

  return (
    <Container>
      <ContainerTitle>
        <Checkbox onClick={handleClickCheckBox} />
        <Title>{user}</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>Diamante</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>Diamante</Title>
      </ContainerTitle>

      <ContainerTitle bigSize>
        <Title>+55 (16) 99999-9999</Title>
        <CopyIcon onClick={handleClickCopyIcon} />
      </ContainerTitle>

      <ContainerTitle>
        <Title>Julio</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>Kaio</Title>
      </ContainerTitle>

      <ContainerTitle bigSize>
        <Tooltip title={obsText}>
          <Title>{obsText}</Title>
        </Tooltip>
      </ContainerTitle>

      <ContainerTitle>
        <Title>Kaio</Title>
      </ContainerTitle>
    </Container>
  );
};

export default ItemTitle;
