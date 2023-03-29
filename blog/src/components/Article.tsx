import "./Article.css";

const Article = () => {
    return (
        <div className="article">
            <h2>記事タイトル</h2>
            <div className="article-body">
                <p>ここに.mdファイルの中身</p>
            </div>
        </div>
    );
};

export default Article;