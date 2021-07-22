import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../hooks/user';

const CustomRoute = ({
  privateRoute, unsignedRoute, roles,
  component: Component,
  wrapper: Wrapper, ...rest
}) => {
  const [{ auth: { signed }, permissions }] = useUserContext();

  if (unsignedRoute && signed) return (<Redirect to="/home" />);

  if (privateRoute && !signed) return (<Redirect to="/login" />);

  return (
    <Wrapper>
      <Component {...rest} />
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
};

export default CustomRoute;
