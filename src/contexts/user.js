import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  user: {
    preferences: {},
    auth: {
      token: '',
      signed: false,
    },
  },
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  console.log('useEffect - context - UserProvider');

  // eslint-disable-next-line no-undef
  const userInitalValue = JSON.parse(window.localStorage.getItem('user')) || initialState;
  const [user, setUser] = useState(userInitalValue);

  console.log(`1: ${JSON.stringify(user)}`);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.localStorage.setItem('user', JSON.stringify(user));

    console.log(`2: ${JSON.stringify(user)}`);
  }, [user]);

  const wrapperState = (val) => {
    console.log('Opaaa....');
    setUser(val);
  };

  return (
    <UserContext.Provider value={[user, wrapperState]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
