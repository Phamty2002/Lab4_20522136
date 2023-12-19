import { useState, useEffect } from 'react';

const useMessages = (forum) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let didCancel = false;

    const fetchMessages = async () => {
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(`/messages/${forum}`);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Unable to read messages for ${forum}: ${text}`);
        }

        const body = await response.json();
        if (!didCancel) {
          setData(body);
        }
      } catch (err) {
        if (!didCancel) {
          setError(err);
        }
      } finally {
        if (!didCancel) {
          setLoading(false);
        }
      }
    };

    fetchMessages();

    return () => {
      didCancel = true;
    };
  }, [forum]);

  return { data, loading, error };
};

export default useMessages;
