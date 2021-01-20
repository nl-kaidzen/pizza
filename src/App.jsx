import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from 'components/common/PrivateRoute';
import './App.css';
import LoginPage from 'components/pages/LoginPage';
import SignupPage from 'components/pages/SignupPage';
import PizzaWizardPage from 'components/pages/PizzaWizardPage';
import PreviousOrdersPage from 'components/pages/PreviousOrdersPage';
import PizzaConfirmationPage from 'components/pages/PizzaConfirmationPage';

function App() {
  const isAuthenticated = true;

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <PrivateRoute path="/wizard" isAuthenticated={isAuthenticated}>
        <PizzaWizardPage />
      </PrivateRoute>
      <PrivateRoute path="/confirmation" isAuthenticated={isAuthenticated}>
        <PizzaConfirmationPage />
      </PrivateRoute>
      <PrivateRoute path="/orders" isAuthenticated={isAuthenticated}>
        <PreviousOrdersPage />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
