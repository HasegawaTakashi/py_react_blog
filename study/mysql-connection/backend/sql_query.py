import mysql.connector

def show_database():
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

def create_table():
    pass