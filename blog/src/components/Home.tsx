import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  filename: string;
}

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
    const res = await fetch('http://localhost:5000/api/articles');
    const data = await res.json();
    setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>My Blog</h1>
      <h2>Article List</h2>
      <ul className='article-list'>
        {articles.map((article) => (
          <li className='article-title' key={article.title}>
            <Link to={`/article/${article.filename}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
