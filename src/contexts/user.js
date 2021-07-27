import React, {
  createContext, useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const initialState = {
  preferences: {},
  auth: {
    token: '',
    signed: false,
  },
  name: '',
  permissions: [],
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const getTokenClaims = useCallback((token) => {
    if (!token) return [];

    const [, payload] = _.split(token, '.');

    const objectPayload = JSON.parse(atob(payload));

    return objectPayload.role || [];
  }, []);

  const getUserPermissions = useCallback((_user) => ({ ..._user, permissions: getTokenClaims(_user.auth.token) }), [getTokenClaims]);

  const userInitalValue = JSON.parse(window.localStorage.getItem('user')) || initialState;

  const [user, setUser] = useState(getUserPermissions(userInitalValue));

  const handleSetUser = useCallback((_user) => {
    setUser(getUserPermissions(_user || initialState));
  }, [getUserPermissions]);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={[user, handleSetUser]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
