import React from 'react';

import {
  Checkbox,
  Container,
  ContainerTitle,
  CopyIcon,
  Title,
  Tooltip,
} from './styles';

import { formatTime } from '../../../../../../utils/time';

const ItemTitle = (item) => {
  const handleClickCheckBox = (e) => {
    e.stopPropagation();
  };

  const handleClickCopyIcon = (e) => {
    e.stopPropagation();
  };
  console.log('item', item);

  const {
    userPlan,
    gamePlatformConsole: {
      platformConsole,
      game,
    },
    userSchedule,
    ...order
  } = item;

  const mainContact = userPlan.user.userContacts.find((val) => val.isPrimary);
  const userContact = mainContact || userPlan.user.email;

  return (
    <Container>
      <ContainerTitle>
        <Title>{userPlan.user.username}</Title>
      </ContainerTitle>

      <ContainerTitle size="0.2">
        <Checkbox checked={order.rentReturn} />
      </ContainerTitle>

      <ContainerTitle size="1.5">
        <Title>{game.name}</Title>
      </ContainerTitle>

      <ContainerTitle size="0.5">
        <Title>{platformConsole.name}</Title>
      </ContainerTitle>

      <ContainerTitle size="1.5">
        <Title>{userContact}</Title>
      </ContainerTitle>

      <ContainerTitle size="1.5">
        <Tooltip title={order.note}>
          <Title>{order.note}</Title>
        </Tooltip>
      </ContainerTitle>

      <ContainerTitle>
        <Title>{formatTime(userSchedule.dateSchedule, 'dd/MM/yyyy')}</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>{formatTime(userSchedule.startTime, 'HH:mm:ss')}</Title>
      </ContainerTitle>

      <ContainerTitle>
        <Title>{userSchedule.user.username}</Title>
      </ContainerTitle>
    </Container>
  );
};

export default ItemTitle;
