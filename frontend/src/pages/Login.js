import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import LoginContainer from '../containers/login/LoginContainer';
import userContext from '../lib/userContext';
import pathUri from '../constants/path';

const Login = () => {
  const user = useContext(userContext);

  if (user) return <Redirect to={pathUri.issue}/>;

  return (
    <>
      <GlobalStyle bg="#f6f8fa"/>
      <LoginContainer/>
    </>
  );
};

export default Login;
