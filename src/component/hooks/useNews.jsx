import { useState, useEffect } from 'react';


    const useNews = (query) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=2fa1039c7cbe45baa0f93b35233a6252`);
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