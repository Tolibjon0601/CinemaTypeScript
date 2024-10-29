import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface FetchDataResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetchData<T>(url: string): FetchDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Fetching data failed";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}

export default useFetchData;
