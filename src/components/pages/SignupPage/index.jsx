/* eslint-disable no-console */
import React from 'react';

import SignInForm from 'components/forms/SignInForm';

const SignupPage = () => {
  const onSubmit = (data) => console.log(data);
  return <SignInForm formSubmit={onSubmit} />;
};

export default React.memo(SignupPage);
