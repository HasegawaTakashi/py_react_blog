import os
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/genres', methods=['GET'])
def get_genred():
    md_directory = '/app/public/md'
    genres = [d for d in os.listdir(md_directory) if os.path.isdir(os.path.join(md_directory, d))]
    return jsonify(genres)

@app.route('/api/articles/<filename>', methods=['GET'])
def get_article(filename):
    md_directory = '/app/public/md'
    genre = request.args.get('genre')

    if genre:
        md_directory = os.path.join(md_directory, genre)
        md_files = [f for f in os.listdir(md_directory) if f.endswith('.md')]

        for file in md_files:
            if file == filename:
                with open(os.path.join(md_directory, file), 'r', encoding='utf-8') as f:
                    title = f.readline().strip().lstrip('#').strip()
                    article_body = f.read()
                    return jsonify({"title": title, "filename": file, "article_body": article_body})

    return jsonify({"error": "Article not found"}), 404

@app.route('/api/articles', methods=['GET'])
def get_articles():
    genre = request.args.get('genre')
    md_directory = '/app/public/md'
    if genre:
        md_directory = os.path.join(md_directory, genre)

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
