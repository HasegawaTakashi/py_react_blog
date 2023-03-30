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
  const { filename } = useParams<{ filename: string }>();

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`http://localhost:5000/api/articles`);
      const data = await res.json();
      const foundArticle = data.find((a: Article) => a.filename === filename);
      setArticle(foundArticle);
    };

    fetchArticle();
  }, [filename]);

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
