import { useQuery } from 'react-query';
import fetch from 'node-fetch';
/**
 * useFetch
 * @param {*} url
 * @param {*} reqName
 * @returns {isLoading, isError, status, data}
 */
const useFetch = (url, reqName) => {
  const { isLoading, isError, status, data } = useQuery(reqName, () =>
    fetch(url)
      .then((res) => res.json())
      .catch((err) => err)
  );

  return { isLoading, isError, status, data };
};

export { useFetch };
