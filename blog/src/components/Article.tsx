import "./Article.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

interface Article {
  filename: string;
  title: string;
  article_body: string;
}

const ArticleData = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { genre, filename } = useParams<{ genre: string; filename: string }>();

  useEffect(() => {
    const fetchArticle = async () => {
      const genreParam = genre ? `?genre=${genre}` : "";
      const res = await fetch(`http://localhost:5000/api/articles/${filename}${genreParam}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setArticle({ filename: data.filename, title: data.title, article_body: data.article_body });
      }
    };
    fetchArticle();
  }, [filename, genre]);


  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="articles">
      <div className="article">
        <h1>{article.title}</h1>
        <div className="article-body"><ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.article_body}</ReactMarkdown></div>
      </div>
    </div>
  );
};

export default ArticleData;
