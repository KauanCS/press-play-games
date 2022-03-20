import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import { useUserContext } from '../../../hooks/user';
import api from '../../../services/api';

const VerifyAccount = () => {
  const [{ user }] = useUserContext();

  const [userEmailToken, setUserEmailToken] = useState(null);

  const [resendEmailTokenCounterDiff, setResendEmailTokenCounterDiff] = useState(null);
  // const [timer, setTimer] = useState(DateTime.fromISO(userEmailToken.resendEmailAt || '', { setZone: true }).diff(DateTime.utc(), ['seconds']));

  const handleResendEmail = async () => {
    await api.post('users/resend', { userId: user.id });
    setUserEmailToken(null);
  };

  useEffect(() => {
    const handleGetUserEmailToken = async () => {
      try {
        const result = await api.get(`userEmailTokens/getByUserId/${user.id}`);
        const { resendAt } = result.data.payload;
        setUserEmailToken(result.data.payload);
        setResendEmailTokenCounterDiff(DateTime.fromISO(resendAt || '', { setZone: true }).diff(DateTime.utc(), ['seconds']));
      } catch (err) {
        // add error
      }
    };
    if (!userEmailToken) handleGetUserEmailToken();
  }, [user.id, userEmailToken]);

  useEffect(() => {
    if (userEmailToken) {
      setTimeout(() => {
        if (resendEmailTokenCounterDiff && (Math.ceil(resendEmailTokenCounterDiff.as('seconds')) > 0)) {
          setResendEmailTokenCounterDiff(DateTime.fromISO(userEmailToken.resendAt || '', { setZone: true }).diff(DateTime.utc(), ['seconds']));
        }
      }, 1000);
    }
  }, [resendEmailTokenCounterDiff, userEmailToken]);
  return (
    <>
      <>Um e-mail de confimacao foi enviado para voce</>
      { resendEmailTokenCounterDiff && ((Math.ceil(resendEmailTokenCounterDiff.as('seconds')) < 1) ? (<input type="button" value="Enviar Novamente" onClick={handleResendEmail} />)
        : (<p>{resendEmailTokenCounterDiff.toFormat('hh:mm:ss')}</p>))}
    </>
  );
};

VerifyAccount.propTypes = {
};

export default VerifyAccount;
