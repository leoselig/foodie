// @flow

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { getToken, setToken } from './auth';
import LoginForm from './login/Form';

type PropsType = {
  login: () => void,
  data: { currentUser: Object }
};

function App({
  login,
  data
}: PropsType): React$Element<*> {
  return data.currentUser
    ? <span>{'Logged in'}</span>
    : <LoginForm onSubmit={login} />;
}

const CurrentUserQuery = gql`
  query CurrentUserEmailQuery($token: String) {
    viewer(token: $token){
      currentUser {
        id,
        email
      }
    }
  }
`;

const CreateAuthTokenMutation = gql`
  mutation createAuthToken($email: String!, $password: String!) {
    createAuthToken(email: $email, password: $password) {
      token
    }
  }
`;

const withMutation = graphql(CreateAuthTokenMutation, {
  props: ({ mutate }: Object) => ({
    login: async ({ email, password }: Object) => {
      const { data } = await mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{
          query: ViewerQuery,
          variables: { token: 'abc' }
        }]
      });

      setToken(data.createAuthToken.token);
    }
  })
});

const withQuery = graphql(CurrentUserQuery, {
  options: ({ token }: PropsType) => ({
    variables: { }
  }),
});

export default withMutation(
  withQuery(
    App
  )
);
