# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "Flask backend is running!"})

@app.route('/api/data', methods=['GET'])
def get_data():
    # Sample data - replace with your actual data logic
    data = {
        "items": [
            {"id": 1, "name": "Item 1", "description": "Description for item 1"},
            {"id": 2, "name": "Item 2", "description": "Description for item 2"},
            {"id": 3, "name": "Item 3", "description": "Description for item 3"}
        ]
    }
    return jsonify(data)

@app.route('/api/submit', methods=['POST'])
def submit_data():
    # Get JSON data from request
    data = request.json
    
    # Process the data (this is where you'd add your business logic)
    print(f"Received data: {data}")
    
    # Return a response
    return jsonify({"success": True, "message": "Data received successfully"})

if __name__ == '__main__':
    app.run(debug=True, port=5001)