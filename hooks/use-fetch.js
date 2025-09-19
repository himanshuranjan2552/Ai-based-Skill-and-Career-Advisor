import { toast } from 'sonner';

const { useState } = require('react');

const useFetch = (fetch) => {
    const [data, setData] = useFormState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/some-endpoint');
            setData(response.data);
            setError(null);
        } catch (error) {
            setError(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
};

export default useFetch;