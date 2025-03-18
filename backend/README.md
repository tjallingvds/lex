# AI Chat Backend

This backend provides API endpoints for AI chat functionality, text improvement, and content generation.

## Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Create a `.env` file:
   ```
   cp .env.example .env
   ```

4. Edit the `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_api_key
   ```

## Running the Server

To start the server:
```
python server.py
```

The server will start on port 5000 (http://localhost:5000).

## API Endpoints

The backend provides the following endpoints:

- **GET /api/health** - Check if the backend is running
- **POST /api/chat** - Send a message and receive an AI response
- **POST /api/generate** - Generate content based on a prompt
- **POST /api/improve** - Improve existing text

Refer to the `server.py` file for detailed API documentation and request/response formats.

## Error Handling

If the OpenAI API key is missing or invalid, the backend will fall back to mock responses. 