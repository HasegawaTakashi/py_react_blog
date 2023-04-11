from flask import Flask

import sql_query

app = Flask(__name__)

@app.route('/')
def do_query():
    result = sql_query.show_database()
    return result


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
