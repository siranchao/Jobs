import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': process.env.EXPO_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await axios.request(options);
            setData(res.data.data);
        }
        catch (error) {
            setError(error);
            alert('There was an error');
        }
        finally {
            setIsLoading(false);
        }
    }

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])


    return { data, isLoading, error, reFetch }
}

export default useFetch;