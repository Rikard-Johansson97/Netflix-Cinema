import { useState, useEffect } from 'react';

const useFetchData = (url : string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setLoading(false);
            } catch (err : any) {
                console.log(err);
                setError(err);
                setLoading(false);
            }
        };
        if (url) {
            fetchData();
        }
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;
