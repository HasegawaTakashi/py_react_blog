import React, { useState, useEffect } from 'react';

interface Article {
  title: string;
  filename: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
    //   const res = await fetch('http://backend:5000/api/articles');
    const res = await fetch('http://172.19.0.3:5000/api/articles');
      const data = await res.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>My Blog</h1>
      <h2>Article List</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
