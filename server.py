from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/chat', methods=['POST'])
def chat():
    """Process chat messages and return AI responses"""
    data = request.json
    user_message = data.get('message', '')
    
    # Simulate AI processing time
    time.sleep(0.5)
    
    # Generate mock response
    responses = [
        "I've analyzed your document and found several ways to improve the content.",
        "Would you like me to help you restructure this section for better clarity?",
        "I've generated some additional content related to your topic. Would you like me to add it?",
        "The formatting looks good, but I'd suggest some improvements to the introduction.",
        "I can see you're working on a complex document. Is there a specific part you'd like help with?",
        f"I've reviewed your message: '{user_message}'. I can help you develop this idea further if you'd like.",
        "Have you considered adding more examples to illustrate your points?",
        "Your writing is clear, but we could enhance the conclusion to make it more impactful."
    ]
    
    return jsonify({
        "response": random.choice(responses),
        "timestamp": time.time()
    })

@app.route('/api/generate', methods=['POST'])
def generate():
    """Generate content based on a prompt"""
    data = request.json
    prompt = data.get('prompt', '')
    length = data.get('length', 'medium')
    
    # Simulate processing time based on requested length
    processing_time = 1.0 if length == 'short' else 2.0 if length == 'medium' else 3.0
    time.sleep(processing_time)
    
    # Generate different responses based on the length requested
    if length == 'short':
        response = f"Here's a brief response to: '{prompt}'. This is a concise answer to help you quickly address this point."
    elif length == 'medium':
        response = f"I've analyzed your request: '{prompt}'. Here's a comprehensive response that covers the main aspects of your query while providing enough detail to be useful in your document."
    else:
        response = f"Based on your prompt: '{prompt}', I've created an extensive response. This detailed analysis covers multiple perspectives and provides in-depth information that you can incorporate into your document."
    
    return jsonify({
        "content": response,
        "prompt": prompt,
        "timestamp": time.time()
    })

@app.route('/api/improve', methods=['POST'])
def improve():
    """Improve existing text"""
    data = request.json
    text = data.get('text', '')
    improvements = data.get('improvements', ['grammar', 'clarity'])
    
    # Simulate processing time
    time.sleep(1.5)
    
    # Generate response based on requested improvements
    response = f"I've improved your text with focus on {', '.join(improvements)}. The improved version maintains your original meaning while enhancing the requested aspects."
    
    return jsonify({
        "improved_text": response,
        "original": text,
        "improvements_applied": improvements,
        "timestamp": time.time()
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000) 