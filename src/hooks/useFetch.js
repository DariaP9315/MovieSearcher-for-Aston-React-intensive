import { useState, useEffect } from 'react';

export function useFetch(name, type) {
  const [status, setStatus] = useState({
    data: [],
    error: false,
  });

  function fetchNow() {
    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY_OMDB}&s=${name}&type=${type}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setStatus({ data: res.Search });
      })
      .catch((error) => {
        setStatus({ error: true });
      });
  }

  useEffect(() => {
    fetchNow();
  }, [type, name]);

  return { ...status };
}
