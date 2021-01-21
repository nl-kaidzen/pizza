import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <h1>Хорошие новости! Мы не забыли про страницу 404.</h1>
      <Link to="/">На главную</Link>
    </>
  );
};

export default React.memo(PageNotFound);
