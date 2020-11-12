import { useState, useEffect } from 'react';
import apiUri from '../constants/api';

function useAuth() {
  const [user, setUser] = useState(null);

  const getLoggedInUser = () => {
    fetch(apiUri.profile)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setUser(res.content.user);
        }
      });
  };

  useEffect(getLoggedInUser, []);

  return user;
}

export default useAuth;
