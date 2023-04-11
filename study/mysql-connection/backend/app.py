from flask import Flask
import mysql.connector

app = Flask(__name__)

@app.route('/')
def hello():
    db = mysql.connector.connect(
        host="db",
        user="root",
        password="password",
        database="my_database",
    )

    cursor = db.cursor()
    cursor.execute("SHOW DATABASES")
    result = cursor.fetchall()

    return str(result)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
