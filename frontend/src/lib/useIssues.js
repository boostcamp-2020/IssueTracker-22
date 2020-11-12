import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiUri from '../constants/api';

const useIssues = () => {
  const [issues, setIssues] = useState([]);
  const URL = apiUri.issues + useLocation().search
  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const newIssues = [...res.content.issues];
          setIssues(newIssues);
        }
      });
  }, []);
  return issues;
}

export default useIssues;
