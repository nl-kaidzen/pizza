import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated, path, redirectRoute = '/login', ...routeProps }) =>
  isAuthenticated ? <Route path={path} {...routeProps} /> : <Redirect to={redirectRoute} />;

PrivateRoute.defaultProps = {
  redirectRoute: '/login',
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirectRoute: PropTypes.string,
};

export default PrivateRoute;
