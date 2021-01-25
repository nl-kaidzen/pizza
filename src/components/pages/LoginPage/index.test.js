import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoginPage from 'components/pages/LoginPage';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <LoginPage />
      </Router>,
    );

    const loginField = getByPlaceholderText('Логин');
    const passwordField = getByPlaceholderText('Пароль');
    const submitBtn = getByText('Войти');

    expect(loginField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
