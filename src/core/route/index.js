/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';

const CustomRoute = (props) => {
  const {
    isAuthenticated,
    isPublicRoute,
    component: Component,
    location,
    ...rest
  } = props;

  // useEffect((prevProps) => {
  //   if (props.location !== prevProps.location) {
  //     window.scrollTo(0, 0);
  //   }
  // }, []);

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated && !isPublicRoute) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          );
        }

        return (<Component {...props} />);
      }}
    />
  );
};

CustomRoute.defaultProps = {
  isPublicRoute: false,
};

CustomRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isPublicRoute: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

export default CustomRoute;
