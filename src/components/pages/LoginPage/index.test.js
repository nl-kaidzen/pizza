import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoginPage from 'components/pages/LoginPage';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Router>
        <LoginPage />
      </Router>,
    );

    const loginField = getByPlaceholderText('Логин');
    const passwordField = getByPlaceholderText('Пароль');

    expect(loginField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  describe('onSubmit event', () => {
    it('collect data from fields correctly', () => {
      const { getByPlaceholderText } = render(
        <Router>
          <LoginPage />
        </Router>,
      );

      const loginField = getByPlaceholderText('Логин');
      const passwordField = getByPlaceholderText('Пароль');

      fireEvent.input(loginField, { target: 'Foo' });
      fireEvent.input(passwordField, { target: 'Bar' });
    });
  });
});
