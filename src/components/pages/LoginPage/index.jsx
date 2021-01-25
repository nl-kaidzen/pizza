/* eslint-disable no-console */
import React, { useCallback } from 'react';

import LoginForm from 'components/forms/LoginForm';

const LoginPage = () => {
  const onSubmit = useCallback(() => console.log('The form have been submitted!'), []);

  return <LoginForm onSubmit={onSubmit} />;
};

export default React.memo(LoginPage);
