/* eslint-disable no-console */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const SignInForm = ({ formSubmit }) => {
  const onSubmit = (data) => formSubmit(data);
  const { register, handleSubmit, errors, watch } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login">
        Логин
        <input
          type="text"
          name="login"
          ref={register({
            required: {
              value: true,
              message: 'Login field is required',
            },
          })}
          placeholder="Логин"
        />
      </label>
      <p>{errors.login?.message}</p>
      <label htmlFor="password">
        Пароль
        <input
          type="password"
          name="password"
          ref={register({
            required: {
              value: true,
              message: 'Password field is required',
            },
            minLength: {
              value: 8,
              message: 'Password should be longer than 8 characters',
            },
          })}
          placeholder="Пароль"
        />
      </label>
      <p>{errors.password?.message}</p>
      <label htmlFor="password">
        Повторите пароль
        <input
          type="password"
          name="confirm_password"
          ref={register({
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
          placeholder="Повторите пароль"
        />
      </label>
      <p>{errors.confirm_password?.message}</p>
      <button type="submit">Зарегестрироваться</button>
      <Link to="/login">Есть аккаунт? Авторизоваться</Link>
    </form>
  );
};

SignInForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export default React.memo(SignInForm);
