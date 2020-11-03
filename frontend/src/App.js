import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
// import Header from './components/Header';
import GlobalStyle from './assets/styles/GlobalStyle';
import Routes from './routes';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <GlobalStyle bg="#f6f8fa"/>
      <Routes />
    </Router>
  );
}

export default App;
