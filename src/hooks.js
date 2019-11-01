import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (e) {
      throw new Error(`Cannot fetch data from url, error: ${e}`);
    }
  };

  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line
  }, []);

  return [
    data,
    loading,
  ];
};

export default { useFetch };
