import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import SignInForm from 'components/forms/SignInForm';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Router>
        <SignInForm />
      </Router>,
    );

    const loginField = getByPlaceholderText('Логин');
    const passwordField = getByPlaceholderText('Пароль');
    const confirmationPasswordField = getByPlaceholderText('Повторите пароль');
    const submitBtn = getByText('Зарегестрироваться');

    expect(loginField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(confirmationPasswordField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  describe('onSubmit event', () => {
    it('login value is required', async () => {
      const formSubmit = jest.fn((data) => data);

      const { getByPlaceholderText, getByText } = render(
        <Router>
          <SignInForm formSubmit={formSubmit} />
        </Router>,
      );

      const passwordField = getByPlaceholderText('Пароль');
      const confirmationPasswordField = getByPlaceholderText('Повторите пароль');
      const submitBtn = getByText('Зарегестрироваться');

      fireEvent.input(passwordField, { target: { value: 'FizzBarBuzz' } });
      fireEvent.input(confirmationPasswordField, { target: { value: 'FizzBarBuzz' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(getByText('Login field is required')).toBeInTheDocument();
    });

    it('password field is required', async () => {
      const formSubmit = jest.fn((data) => data);

      const { getByPlaceholderText, getByText } = render(
        <Router>
          <SignInForm formSubmit={formSubmit} />
        </Router>,
      );

      const loginField = getByPlaceholderText('Логин');
      const confirmationPasswordField = getByPlaceholderText('Повторите пароль');
      const submitBtn = getByText('Зарегестрироваться');

      fireEvent.input(loginField, { target: { value: 'Foo' } });
      fireEvent.input(confirmationPasswordField, { target: { value: 'FizzBarBuzz' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(getByText('Password field is required')).toBeInTheDocument();
    });

    it('the passwords do not match', async () => {
      const formSubmit = jest.fn((data) => data);

      const { getByPlaceholderText, getByText } = render(
        <Router>
          <SignInForm formSubmit={formSubmit} />
        </Router>,
      );

      const loginField = getByPlaceholderText('Логин');
      const passwordField = getByPlaceholderText('Пароль');
      const confirmationPasswordField = getByPlaceholderText('Повторите пароль');
      const submitBtn = getByText('Зарегестрироваться');

      fireEvent.input(loginField, { target: { value: 'Foo' } });
      fireEvent.input(passwordField, { target: { value: 'FizzBarBuzz' } });
      fireEvent.input(confirmationPasswordField, { target: { value: 'FizzBarBurr' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(getByText('The passwords do not match')).toBeInTheDocument();
    });

    it('collect data from fields correctly', async () => {
      const formSubmit = jest.fn((data) => data);

      const { getByPlaceholderText, getByText } = render(
        <Router>
          <SignInForm formSubmit={formSubmit} />
        </Router>,
      );

      const loginField = getByPlaceholderText('Логин');
      const passwordField = getByPlaceholderText('Пароль');
      const confirmationPasswordField = getByPlaceholderText('Повторите пароль');
      const submitBtn = getByText('Зарегестрироваться');

      fireEvent.input(loginField, { target: { value: 'Foo' } });
      fireEvent.input(passwordField, { target: { value: 'FizzBarBuzz' } });
      fireEvent.input(confirmationPasswordField, { target: { value: 'FizzBarBuzz' } });

      await act(async () => {
        fireEvent.click(submitBtn);
      });

      expect(formSubmit).toBeCalledWith({
        login: 'Foo',
        password: 'FizzBarBuzz',
        confirm_password: 'FizzBarBuzz',
      });
    });
  });
});
