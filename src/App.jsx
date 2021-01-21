import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from 'components/common/PrivateRoute';
import './App.css';
import LoginPage from 'components/pages/LoginPage';
import SignupPage from 'components/pages/SignupPage';
import PizzaWizardPage from 'components/pages/PizzaWizardPage';
import PreviousOrdersPage from 'components/pages/PreviousOrdersPage';
import PizzaConfirmationPage from 'components/pages/PizzaConfirmationPage';
import PageNotFound from 'components/pages/404';

function App() {
  const isAuthenticated = true;

  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/login">Логин</Link>
          </li>
          <li>
            <Link to="/signup">Регистрация</Link>
          </li>
          <li>
            <Link to="/wizard">Пицца конструктор</Link>
          </li>
          <li>
            <Link to="/confirmation">Чек</Link>
          </li>
          <li>
            <Link to="/orders">Предыдущие заказы</Link>
          </li>
        </ul>
      </div>
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
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
