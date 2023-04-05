import { useState, useEffect, useCallback } from "react";
import { Conversation } from "../types/conversation";
import { Message } from "../types/message";
import { User } from "../types/user";

const useFetch = (
  url: string,
  method = "GET"
): [any | null, boolean, Error | null] => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url, {
        method,
      });
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [url, method]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, loading, error];
};

export default useFetch;
