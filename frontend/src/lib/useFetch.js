import { useState, useEffect } from 'react';

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(true);

  console.log(`use fetch - ${url}`);

  const fetchInitialData = async () => {
    console.log(`fetch initial data - ${url}`);

    setLoading(true);
    const response = await fetch(url);
    const initialData = await response.json();
    callback(initialData);
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
};

export default useFetch;
