import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/articles', methods=['GET'])
def get_articles():
    md_directory = '/app/public/md'
    md_files = [f for f in os.listdir(md_directory) if f.endswith('.md')]

    articles = []
    for file in md_files:
        with open(os.path.join(md_directory, file), 'r', encoding='utf-8') as f:
            title = f.readline().strip().lstrip('#').strip()
            article_body = f.read()
            articles.append({"title": title, "filename": file, "article_body": article_body})

    return jsonify(articles)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
