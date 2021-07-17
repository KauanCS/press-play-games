import React from 'react';

import {
  Checkbox,
  Container,
  ContainerTitle,
  CopyIcon,
  Title,
  Tooltip,
} from './styles';

const ItemTitle = (item) => {
  const user = 'ppg1111';
  const obsText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

  const handleClickCheckBox = (e) => {
    e.stopPropagation();
  };

  const handleClickCopyIcon = (e) => {
    e.stopPropagation();
  };
  console.log('item', item);

  const { userPlan, gamePlatformConsole: { platformConsole } } = item;

  const [primaryContact] = userPlan.user.userContacts.filter((val) => val.isPrimary);
  const userContact = primaryContact || userPlan.user.email;
  debugger;
  return (
    <Container>
      <ContainerTitle>
        <Checkbox onClick={handleClickCheckBox} />
        <Title>userPlan.user.username</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>{userPlan.user.name}</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>{platformConsole.name}</Title>
      </ContainerTitle>

      <ContainerTitle bigSize>
        <Title>{userContact}</Title>
        <CopyIcon onClick={handleClickCopyIcon} />
      </ContainerTitle>

      <ContainerTitle>
        <Title>Julio</Title>
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
