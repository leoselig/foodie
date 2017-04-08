// @flow

import React from 'react';
import { reduxForm, Field, type FormPropsType } from 'redux-form';

type PropsType = {

} & FormPropsType;

function LoginForm({
  handleSubmit
}: PropsType) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component="input"
        name="email"
        type="email"
      />
      <Field
        component="input"
        name="password"
        type="password"
      />
      <button type="submit">
        {'Login'}
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
