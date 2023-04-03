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
      const genreParam = genre ? `?genre=${genre}` : "";
      const res = await fetch(`http://localhost:5000/api/articles${genreParam}`);
      const data = await res.json();
      console.log(data)
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
            <Link to={`/articles/${genre}/${article.filename}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
