import React from 'react';
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';

const LoginContainer = () => {
  const githubLogin = () => {
    console.log('github login');
  };
  return (
    <>
      <LoginForm/>
      <LoginButton onClick={githubLogin}/>
    </>
  );
};

export default LoginContainer;
