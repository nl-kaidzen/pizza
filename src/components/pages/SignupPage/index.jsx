/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignupPage = () => {
  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit, errors } = useForm();
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
          ref={register({
            required: {
              value: true,
              message: 'This field is required',
            },
            minLength: {
              value: 8,
              message: 'Password should be longer than 8 characters',
            },
          })}
        />
      </label>
      <p>{errors.password?.message}</p>
      <label htmlFor="password">
        Повторите пароль
        <input
          type="password"
          name="confirm_password"
          ref={register({
            required: {
              value: true,
              message: 'This field is required',
            },
            minLength: {
              value: 8,
              message: 'Password should be longer than 8 characters',
            },
          })}
        />
      </label>
      <p>{errors.confirm_password?.message}</p>
      <button type="submit">Зарегестрироваться</button>
      <Link to="/login">Есть аккаунт? Авторизоваться</Link>
    </form>
  );
};

export default React.memo(SignupPage);
