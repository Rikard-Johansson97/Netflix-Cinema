import { Movie } from '@/types/types';
import { useState, useEffect } from 'react';

const useFetchMovieId = (id: string) => {
  const [data, setData] = useState<Movie[] | []>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  const apiUrl = `${url}/api/movies/${id}`;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(apiUrl);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err : any) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    if (apiUrl) {
      fetchData();
    }
  }, [apiUrl]);

  return { data, loading, error };
};

export default useFetchMovieId;
