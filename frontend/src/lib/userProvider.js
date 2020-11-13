import React from 'react';
import useAuth from './useAuth';
import UserContext from './userContext';

function UserProvider({ children }) {
  const user = useAuth();
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
