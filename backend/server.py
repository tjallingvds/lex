from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time
import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Get API key from environment variable
API_KEY = os.getenv("OPENAI_API_KEY")
API_URL = "https://api.openai.com/v1/chat/completions"

def get_ai_response(prompt, max_tokens=1000):
    """Get an AI-generated response using the OpenAI API"""
    if not API_KEY:
        # Fallback to mock responses if no API key
        return get_mock_response(prompt)
    
    try:
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_KEY}"
        }
        
        data = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": max_tokens,
            "temperature": 0.7
        }
        
        response = requests.post(API_URL, headers=headers, json=data)
        response.raise_for_status()
        
        return response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        # Fall back to mock response if API call fails
        return get_mock_response(prompt)

def get_mock_response(prompt):
    """Generate a mock response when API is not available"""
    responses = [
        "I've analyzed your document and found several ways to improve the content.",
        "Would you like me to help you restructure this section for better clarity?",
        "I've generated some additional content related to your topic. Would you like me to add it?",
        "The formatting looks good, but I'd suggest some improvements to the introduction.",
        "I can see you're working on a complex document. Is there a specific part you'd like help with?",
        f"I've reviewed your message: '{prompt}'. I can help you develop this idea further if you'd like.",
        "Have you considered adding more examples to illustrate your points?",
        "Your writing is clear, but we could enhance the conclusion to make it more impactful."
    ]
    
    return random.choice(responses)

@app.route('/api/chat', methods=['POST'])
def chat():
    """Process chat messages and return AI responses"""
    data = request.json
    user_message = data.get('message', '')
    
    # Get response from AI
    ai_response = get_ai_response(user_message)
    
    return jsonify({
        "response": ai_response,
        "timestamp": time.time()
    })

@app.route('/api/generate', methods=['POST'])
def generate():
    """Generate content based on a prompt"""
    data = request.json
    prompt = data.get('prompt', '')
    length = data.get('length', 'medium')
    
    # Adjust max_tokens based on requested length
    max_tokens = 150 if length == 'short' else 400 if length == 'medium' else 800
    
    # Enhance the prompt based on the requested length
    enhanced_prompt = f"Generate a {length} response to: {prompt}"
    
    # Get AI-generated content
    content = get_ai_response(enhanced_prompt, max_tokens)
    
    return jsonify({
        "content": content,
        "prompt": prompt,
        "timestamp": time.time()
    })

@app.route('/api/improve', methods=['POST'])
def improve():
    """Improve existing text"""
    data = request.json
    text = data.get('text', '')
    improvements = data.get('improvements', ['grammar', 'clarity'])
    
    # Construct a prompt for text improvement
    prompt = f"Improve the following text focusing on {', '.join(improvements)}:\n\n{text}"
    
    # Get improved text from AI
    improved_text = get_ai_response(prompt)
    
    return jsonify({
        "improved_text": improved_text,
        "original": text,
        "improvements_applied": improvements,
        "timestamp": time.time()
    })

# Add health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "AI Chat backend is running!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000) 