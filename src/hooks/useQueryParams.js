import { useSearchParams } from "react-router-dom";

export default function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setParam(key, value) {
    setSearchParams((params) => {
      if (value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      return params;
    });
  }
  function getParam(key) {
    return searchParams.get(key);
  }

  return {
    getParam,
    setParam,
  };
}
