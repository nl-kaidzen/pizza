/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const onSubmit = useCallback(() => console.log('The form have been submitted!'), []);
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login">
        Логин
        <input
          type="text"
          name="login"
          placeholder="Логин"
          ref={register({
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
        />
      </label>
      <p>{errors.login?.message}</p>
      <label htmlFor="password">
        Пароль
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          ref={register({
            minLength: {
              value: 6,
              message: 'Password should be longer than 6 characters',
            },
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
        />
      </label>
      <p>{errors.password?.message}</p>

      <button type="submit">Войти</button>
      <Link href="/signup">Нет аккаунта? Зарегестрироваться</Link>
    </form>
  );
};

export default React.memo(LoginPage);
