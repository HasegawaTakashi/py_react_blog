import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Article {
  title: string;
  filename: string;
}

const Genre = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { genre } = useParams<{ genre: string }>();

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(`http://localhost:5000/api/articles?genre=${genre}`);
      const data = await res.json();
      setArticles(data);
    };

    fetchArticles();
  }, [genre]);

  return (
    <div>
      <h1>{genre}</h1>
      <h2>Article List</h2>
      <ul className="article-list">
        {articles.map((article) => (
          <li className="article-title" key={article.title}>
            <Link to={`/article/${article.filename}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
