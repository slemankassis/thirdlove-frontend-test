const { useState, useEffect } = require('react');

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
  }, []);

  return [
    data,
    loading,
  ];
};

module.exports = {
  useFetch,
};
