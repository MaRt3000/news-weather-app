import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const API_KEY = "d39634a4cfa74d7f881f36a35fc4c9b8";

  const fetchNews = async () => {
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us${
        category ? `&category=${category}` : ""
      }&q=${searchTerm}&apiKey=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setArticles(Array.isArray(data.articles) ? data.articles : []);
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([])
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 lg:ml-[230px]">
      <header className="bg-blue-700 text-white py-6 shadow-lg">
        <h1 className="text-center text-4xl font-extrabold">LATEST NEWS</h1>
        <p className="text-center mt-2 text-sm font-light">
          Stay updated with the latest news!
        </p>
      </header>
      <main className="max-w-6xl mx-auto p-4">
        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6"
        >
          <input
            type="text"
            placeholder="Search for news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-2/3 p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["", "business", "entertainment", "health", "science", "sports", "technology"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {cat === "" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* News Articles */}
        {loading ? (
          <p className="text-center text-lg text-gray-700">Loading news...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {articles!==null&&articles.length > 0 ? (
              articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-700">
                No articles found.
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default News;
