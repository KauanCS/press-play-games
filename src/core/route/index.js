import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../../hooks/user';

const CustomRoute = ({
  privateRoute, unsignedRoute, roles, ...rest
}) => {
  const [{ auth: { signed }, permissions }] = useUserContext();

  if (unsignedRoute && signed) return (<Redirect to="/home" />);

  if (privateRoute && !signed) return (<Redirect to="/login" />);

  return (<Route {...rest} />);
};

CustomRoute.defaultProps = {
  privateRoute: false,
  unsignedRoute: false,
  roles: [],
};

CustomRoute.propTypes = {
  privateRoute: PropTypes.bool,
  unsignedRoute: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string),
};

export default CustomRoute;
