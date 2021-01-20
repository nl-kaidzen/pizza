/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
      <button type="submit" onClick={onSubmit}>
        Войти
      </button>
      <Link to="/signup">Нет аккаунта? Зарегестрироваться</Link>
    </form>
  );
};

export default React.memo(LoginPage);
