import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../hooks/user';
import USER_STATUS from '../../models/user-status';

const CustomRoute = ({
  privateRoute, unsignedRoute, roles, path,
  component: Component,
  wrapper: Wrapper, ...rest
}) => {
  const [{ auth: { signed }, user }] = useUserContext();

  const { userStatus, userPermissions } = user || {};

  if (signed && userStatus === USER_STATUS.NEED_CONFIRMATION && path !== '/confirm-account') return (<Redirect to="/confirm-account" />);

  if (signed && userStatus === USER_STATUS.BANNED && path !== '/banned') return (<Redirect to="/banned" />);

  if (unsignedRoute && signed) return (<Redirect to="/" />);

  if (privateRoute && !signed) return (<Redirect to="/login" />);

  return (
    <Wrapper>
      <Component path={path} {...rest} />
    </Wrapper>
  );
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
  component: PropTypes.any.isRequired,
  wrapper: PropTypes.any.isRequired,
  path: PropTypes.any.isRequired,
};

export default CustomRoute;
