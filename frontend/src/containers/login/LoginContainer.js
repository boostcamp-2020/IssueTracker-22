import React from 'react';
import Title from './components/Title';
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import FormContaienr from './components/FormContainer';

const LoginContainer = () => {
  const githubLogin = () => {
    console.log('github login');
  };
  return (
    <>
      <Title>이슈 트래커</Title>
      <FormContaienr>
        <LoginForm/>
        <LoginButton onClick={githubLogin}/>
      </FormContaienr>
    </>
  );
};

export default LoginContainer;
