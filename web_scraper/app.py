# app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def get_scraped_data():
    # Your web scraper logic here
    scraped_data = [
        {'name': 'John', 'age': 30, 'location': 'New York'},
        {'name': 'Alice', 'age': 25, 'location': 'London'},
        {'name': 'Bob', 'age': 35, 'location': 'Paris'}
    ]
    return jsonify(scraped_data)

if __name__ == '__main__':
    app.run(debug=True)
