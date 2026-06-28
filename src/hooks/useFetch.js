import { useState, useEffect, useCallback } from "react";

/**
 * Generic fetch hook.
 * Usage: const { data, loading, error, refetch } = useFetch(() => projectService.getAll());
 *
 * fetcher must be a function that returns a promise (an axios call), not the promise itself,
 * so it can be re-invoked on refetch/deps change.
 */
export const useFetch = (fetcher, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetcher();
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, refetch: load };
};
