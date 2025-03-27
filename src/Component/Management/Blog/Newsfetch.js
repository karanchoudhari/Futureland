// Newsfetch.jsx
import { useState, useEffect } from 'react';

function Newsfetch() {
  const [articles, setArticles] = useState([]);
  const API_KEY = '5cc9c49142324da19d13437e9db8b430';

  const getData = async () => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=india&apiKey=${API_KEY}`);
        
      
      
      const jsonData = await response.json();
      // console.log('Fetched Articles:', jsonData.articles); // Debugging log
      setArticles(jsonData.articles || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4">
      <div>
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 p-2 rounded-lg shadow-md mb-4"
          >
            <div className="flex-1 pr-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold text-white hover:text-blue-600 cursor-pointer"
              >
                {article.title.length > 20
                  ? `${article.title.substring(0, 20)}... Read More`
                  : article.title}
              </a>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="Thumbnail"
                className="w-20 h-16 object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newsfetch;
