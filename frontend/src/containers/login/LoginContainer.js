import React from 'react';
import Title from './components/Title';
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import FormBox from './components/FormBox';
import { apiUri } from '../../constants/path';

const LoginContainer = () => {
  const githubLogin = () => {
    window.location.href = apiUri.login;
  };

  return (
    <>
      <Title>이슈 트래커</Title>
      <FormBox>
        <LoginForm/>
        <LoginButton onClick={githubLogin}/>
      </FormBox>
    </>
  );
};

export default LoginContainer;
