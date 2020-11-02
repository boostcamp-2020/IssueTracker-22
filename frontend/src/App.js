import React from 'react';
// import Header from './components/Header';
import GlobalStyle from './assets/styles/GlobalStyle';
import LoginContainer from './containers/login/LoginContainer';

function App() {
  return (
    <>
      {/* <Header /> */}
      <GlobalStyle bg="#f6f8fa"/>
      <LoginContainer />
    </>
  );
}

export default App;
