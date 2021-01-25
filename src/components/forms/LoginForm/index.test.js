import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import LoginForm from 'components/forms/LoginForm';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <LoginForm />
      </Router>,
    );

    const loginField = getByPlaceholderText('Логин');
    const passwordField = getByPlaceholderText('Пароль');
    const submitBtn = getByText('Войти');

    expect(loginField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  describe('onSubmit event', () => {
    it('login value is required', async () => {
      const formSubmit = jest.fn((data) => data);

      const { getByPlaceholderText, getByText } = render(
        <Router>
          <LoginForm formSubmit={formSubmit} />
        </Router>,
      );

      const passwordField = getByPlaceholderText('Пароль');
      const submitBtn = getByText('Войти');

      fireEvent.input(passwordField, { target: { value: 'BarBuzz' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(getByText('This field is required')).toBeInTheDocument();
    });

    it('password field is required', async () => {
      const formSubmit = jest.fn((data) => data);

      const { getByPlaceholderText, getByText } = render(
        <Router>
          <LoginForm formSubmit={formSubmit} />
        </Router>,
      );

      const loginField = getByPlaceholderText('Логин');
      const submitBtn = getByText('Войти');

      fireEvent.input(loginField, { target: { value: 'Foo' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(getByText('This field is required')).toBeInTheDocument();
    });

    it('collect data from fields correctly', async () => {
      const formSubmit = jest.fn((data) => data);

      const { getByPlaceholderText, getByText } = render(
        <Router>
          <LoginForm formSubmit={formSubmit} />
        </Router>,
      );

      const loginField = getByPlaceholderText('Логин');
      const passwordField = getByPlaceholderText('Пароль');
      const submitBtn = getByText('Войти');

      fireEvent.input(loginField, { target: { value: 'Foo' } });
      fireEvent.input(passwordField, { target: { value: 'BarBuzz' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(formSubmit).toBeCalledWith({
        login: 'Foo',
        password: 'BarBuzz',
      });
    });
  });
});
