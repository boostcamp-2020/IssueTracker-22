import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import UserProvider from './lib/userProvider';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes/>
      </Router>
    </UserProvider>
  );
}

export default App;
