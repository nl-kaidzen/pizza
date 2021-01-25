import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({ formSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => formSubmit(data);

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

LoginForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export default React.memo(LoginForm);
