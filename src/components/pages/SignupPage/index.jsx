/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const onSubmit = useCallback(() => console.log('The form have been submitted!'), []);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="login">
        Логин
        <input type="text" name="login" />
      </label>
      <label htmlFor="password">
        Пароль
        <input type="password" name="password" />
      </label>
      <label htmlFor="password">
        Повторите пароль
        <input type="password" name="confirm_password" />
      </label>
      <button type="submit" onClick={onSubmit}>
        Зарегестрироваться
      </button>
      <Link to="/login">Есть аккаунт? Авторизоваться</Link>
    </form>
  );
};

export default React.memo(SignupPage);
