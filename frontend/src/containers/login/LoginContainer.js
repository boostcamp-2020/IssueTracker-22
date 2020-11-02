import React from 'react';
import Title from './components/Title';
import LoginButton from './components/LoginButton';
import LoginForm from './components/LoginForm';
import FormContaienr from './components/FormContainer';

const LoginContainer = () => {
  const githubLogin = () => {
    window.location.href = '/users/github-login';
    // fetch('/users/github-login', {
    //   redirect: 'manual',
    // }).then((res) => {
    //   window.location.href = res.url;
    // }).catch((err) => {
    //   console.log(err);
    // });
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
