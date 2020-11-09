import { useState, useEffect } from 'react';

function useLabels() {
  const [lables, setLabels] = useState([]);

  useEffect(() => {
    fetch('/labels', {
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

  return lables;
}

export default useLabels;
