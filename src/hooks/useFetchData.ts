import { useState, useEffect } from 'react';

const useFetchData = (type: string, sort: string, order: string, limit: string, genre?: string, search?: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  let apiUrl = `${url}/api/movies?type=${type}&sort=${sort}&order=${order}&limit=${limit}`;
  
  if (genre) apiUrl += `&genre=${genre}`;
  else if (search) apiUrl += `&search=${search}`;
  
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

export default useFetchData;
