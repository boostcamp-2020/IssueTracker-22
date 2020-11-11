import { useState, useEffect } from 'react';
import apiUri from '../constants/api';

const useIssues = (query) => {
  const [issues, setIssues] = useState([]);
  const URL = apiUri.issues + (query ? query : '')
  console.log('URL', URL)
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
