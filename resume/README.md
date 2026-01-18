# Resume Analyzer

🎯 AI-powered resume analysis web application that helps you land your dream job by comparing your resume against job descriptions.

## Features

- **Role Match Analysis** - Identify target role, seniority level, and match percentage
- **Skill Gap Breakdown** - Detailed analysis of required skills (Strong/Partial/Missing)
- **30-60-90 Day Plan** - Structured preparation timeline
- **Study Topics & Resources** - Curated learning paths with free resources
- **Project Suggestions** - Portfolio-ready project ideas
- **Interview Prep Guide** - Technical, behavioral, and system design focus areas
- **Resume Improvements** - Wording, structure, and keyword suggestions
- **Final Verdict** - Honest readiness assessment with timeline

## Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Python FastAPI
- **LLM**: Ollama (Llama 3.2 or other open-source models)

## Prerequisites

1. **Node.js 18+** - For the React frontend
2. **Python 3.10+** - For the FastAPI backend
3. **Ollama** - For running local LLM

### Install Ollama

1. Download and install Ollama from [ollama.ai](https://ollama.ai)
2. Pull a model:
   ```bash
   ollama pull llama3.2
   ```
3. Start Ollama service:
   ```bash
   ollama serve
   ```

## Quick Start

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

API docs: `http://localhost:8000/docs`

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies (already done if you used create-vite)
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Usage

1. Make sure Ollama is running (`ollama serve`)
2. Start the backend server
3. Start the frontend development server
4. Open `http://localhost:5173` in your browser
5. Paste your resume content in the left panel
6. Paste the job description in the right panel
7. Click "Analyze My Resume"
8. Review the comprehensive 8-section analysis

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root endpoint with API info |
| GET | `/health` | Health check with LLM status |
| POST | `/analyze` | Analyze resume against job description |

### Analyze Request

```json
{
  "resume": "Your resume text here...",
  "job_description": "Job description text here..."
}
```

## Project Structure

```
Recom/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   ├── models/
│   │   └── schemas.py       # Pydantic models
│   ├── services/
│   │   └── llm_service.py   # Ollama integration
│   └── prompts/
│       └── analysis_prompt.py  # LLM prompt templates
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css        # Design system
        ├── components/
        │   ├── Header.jsx
        │   ├── InputForm.jsx
        │   ├── LoadingSpinner.jsx
        │   └── AnalysisResults.jsx
        └── services/
            └── api.js       # Backend API calls
```

## Troubleshooting

### "LLM Service Unavailable"
- Make sure Ollama is running: `ollama serve`
- Check if you have a model installed: `ollama list`
- If no models, install one: `ollama pull llama3.2`

### "Cannot connect to backend"
- Make sure the FastAPI server is running on port 8000
- Check for CORS issues in browser console

### Analysis taking too long
- Large resumes/job descriptions take longer to process
- Local LLMs depend on your hardware (8GB+ RAM recommended)
- Consider using a smaller model like `phi` if you have limited resources

## License

MIT
