import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  ContainerVideo,
  ContainerDescription,
  Checkbox,
  Modal,
  Iframe,
  Description,
} from './styles';

const URL_TUTORIAL_VIDEO = 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1';

const ModalLock = (props) => {
  const {
    handleConfirm,
    handleCancel,
  } = props;

  const [checkboxValue, setCheckboxValue] = useState(false);
  const [step, setStep] = useState(1);
  const handleCheckboxValue = () => setCheckboxValue(!checkboxValue);
  const handleNextStep = () => setStep(2);

  const buttonProps = {
    disabled: !checkboxValue,
  };

  return (
    <Modal
      title="Resolver cadeado"
      visible
      onCancel={handleCancel}
      okButtonProps={buttonProps}
      onOk={step === 1 ? handleNextStep : handleConfirm}
      okText={step === 1 ? 'Próximo' : 'Confirmar'}
    >
      <ContainerVideo>
        <Iframe
          title="Tutorial video"
          src={URL_TUTORIAL_VIDEO}
        />
      </ContainerVideo>
      {step === 1 && (
        <ContainerDescription>
          <Checkbox
            value={checkboxValue}
            onChange={handleCheckboxValue}
          >
            Confirmo que vi o video e desejo continuar.
          </Checkbox>
        </ContainerDescription>
      )}

      {step === 2 && (
        <ContainerDescription>
          <Description>1- Acesse o perfil do ufc 4</Description>
          <Description>2- Configurações &gt; Gerenciamento de conta &gt; Iniciar sessão.</Description>
          <Description>Nova Senha: game1010</Description>
          <Description>3- Configurações &gt; Gerenciamento da conta &gt; Ativar como seu PS4 principal &gt; alternar &gt; ativar</Description>
          <Description>4- Configurações &gt; Gerenciamento da conta &gt; finalizar a sessao</Description>
        </ContainerDescription>
      )}
    </Modal>
  );
};

ModalLock.propTypes = {
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default ModalLock;
