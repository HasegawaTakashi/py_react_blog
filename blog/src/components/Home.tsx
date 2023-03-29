import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
    const [markdownContent, setMarkdownContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetch("/md/test.md")
          .then((response) => response.text())
          .then((text) => {
            setMarkdownContent(text);

            const titleMatch = text.match(/^#\s+(.*)/m);
            if (titleMatch) {
              setTitle(titleMatch[1]);
            }
          });
      }, []);

    return (
        <div className="home">
            <h2>Welcome to My Blog</h2>
            <p>ここに最近のブログ記事のリストを表示します。</p>
            <ul>
                <li>
                    <strong>{title}</strong>
                </li>
            </ul>
        </div>
    );
};

export default Home;