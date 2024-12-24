import React from 'react';
import useNews from './hooks/useNews';


const News = () => {
    const { articles, error, loading } = useNews('bitcoin');

    return (
        <div className='mt-[70px] lg:ml-[250px] md:mt-0 lg:mt-0'>
            <h1 className='text-purple-800  sm:text-sm md:text-[25px] py-11 text-center  '>LATEST NEWS</h1>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            <div className="grid gap-2 lg:grid-cols-4">
                {articles.map((article, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={article.urlToImage}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                {article.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                                {article.content}
                            </p>
                            <a href={article.url} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
export { useNews };
