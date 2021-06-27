import React, { useState } from 'react';
import { v4 as generateUuid } from 'uuid';
import {
  AccountName,
  Button,
  Container,
  ContainerAccountInfo,
  ContainerBottom,
  ContainerIconClose,
  Divider,
  Input,
  IconPlus,
  IconClose,
} from './styles';

import InputWrapper from '../../../../../components/input-wrapper';

const accountDefaultValue = {
  email: '',
  senha: '',
};

const Accounts = () => {
  const title = 'Contas cadastradas';
  const [registeredAccounts, setRegisteredAccounts] = useState([
    {
      email: '',
      senha: '',
    },
    {
      email: '',
      senha: '',
    },
    {
      email: '',
      senha: '',
    },
  ]);

  const handleAddAccount = () => setRegisteredAccounts(
    [...registeredAccounts, accountDefaultValue],
  );

  const handleRemoveAccount = (index) => {
    const cloneState = [...registeredAccounts];
    cloneState.splice(index, 1);
    setRegisteredAccounts(cloneState);
  };

  return (
    <Container>
      <Divider>{title}</Divider>
      {registeredAccounts.map((account, idx) => (
        <ContainerAccountInfo key={generateUuid()}>
          <AccountName>{`Conta ${idx + 1}`}</AccountName>
          <InputWrapper title="E-mail">
            <Input placeholder="Insira o e-mail do game" />
          </InputWrapper>

          <InputWrapper title="Senha">
            <Input placeholder="Insira a senha do game" />
          </InputWrapper>

          <ContainerIconClose onClick={() => handleRemoveAccount(idx)}>
            <IconClose />
          </ContainerIconClose>
        </ContainerAccountInfo>
      ))}
      <ContainerBottom>
        <Button onClick={handleAddAccount}>
          <IconPlus />
          Adicionar conta
        </Button>
      </ContainerBottom>

      <Divider />

      <ContainerBottom>
        <Button>Salvar</Button>
      </ContainerBottom>
    </Container>
  );
};

export default Accounts;
