import React from "react";

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, source } = article;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">Source: {source.name}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
