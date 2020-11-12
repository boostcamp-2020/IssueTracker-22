import { useState, useEffect } from 'react';
import apiUri from '@constants/api';

function useLabels() {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch(apiUri.labels, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const newLabels = [...res.content.labels];
          setLabels(newLabels);
        }
      });
  }, []);

  return [labels, setLabels];
}

export default useLabels;
