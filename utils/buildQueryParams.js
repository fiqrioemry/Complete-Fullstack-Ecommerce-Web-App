import { useCallback } from "react";

const buildQueryParams = useCallback((filters) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });
  return params.toString();
}, []);

export default buildQueryParams;
