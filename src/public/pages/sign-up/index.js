import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doSignUp } from '../../../services/user';
import { useUserContext } from '../../../hooks/user';

import SingUpForm from './components/form';

const SignUp = () => {
  const [user, setUser] = useUserContext();

  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const redirectToLogin = () => history.push('/login');

  const handleSubmit = async (values) => {
    const response = await doSignUp(values);

    if (response.status === 200) {
      setUser({ ...user, name: response.data.payload.name, auth: { token: response.data.token, signed: true } });

      history.push('/');
    } else {
      setErrors([{ message: response.data.message, type: 'error' }]);
    }
  };

  return (<SingUpForm redirectToLogin={redirectToLogin} submit={handleSubmit} errorsState={errors} />);
};

export default SignUp;
