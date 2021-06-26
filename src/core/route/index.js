/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../../contexts/hooks/user';

const CustomRoute = ({ privateRoute, ...rest }) => {
  const { auth: singned } = useUserContext();

  if (privateRoute && !singned) return (<Redirect to="/login" />);

  return (<Route {...rest} />);
};

CustomRoute.defaultProps = {
  privateRoute: false,
};

CustomRoute.propTypes = {
  privateRoute: PropTypes.bool,
};

export default CustomRoute;
