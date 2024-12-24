import { useState, useEffect } from 'react';


    const useNews = (query) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=47eed3fcf5c341cb930f3a721ddfcd9f`);
                const result = await response.json();
                setArticles(result.articles);
            } catch (err) {
                setError('Failed to fetch news.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [query]);

    return { articles, error, loading };
};

export default useNews