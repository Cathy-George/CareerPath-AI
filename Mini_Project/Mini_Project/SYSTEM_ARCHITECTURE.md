# Career Skill Gap Analyzer - Technical Documentation

## 1. Project Overview
The **Career Skill Gap Analyzer** is a full-stack web application designed to help users understand their career readiness. By analyzing a user's current skills against a target job role, it provides a comprehensive report including match percentage, missing skills, a study plan, and project suggestions. The core intelligence is driven by a local Large Language Model (LLM) running via Ollama.

## 2. Technology Stack

### Frontend (Client-Side)
- **React (Vite)**: Selected for high performance and fast development experience.
- **Tailwind CSS**: Used for rapid, utility-first styling with a custom "Emerald" green theme.
- **Lucide React**: Provides lightweight, clean icons.
- **Fetch API**: Handles communication with the backend.

### Backend (Server-Side)
- **Python & FastAPI**: A modern, high-speed web framework for building APIs.
- **Pydantic**: data validation library that ensures the AI's JSON output matches the strict structure the frontend expects.
- **Uvicorn**: An ASGI web server implementation to run the FastAPI app.

### AI / Intelligence Layer
- **Ollama**: A tool for running open-source LLMs locally.
- **Llama 3.2**: The specific model used for analysis, chosen for its balance of speed and reasoning capability.

---

## 3. How It Works: End-to-End Workflow

Here is exactly what happens when a user clicks "Generate Analysis":

### Step 1: Input Collection (Frontend)
- The user enters a **Target Role** (e.g., "Frontend Developer") and **Current Skills** (e.g., "HTML, CSS") in `InputForm.jsx`.
- When the form is submitted, the app creates a JSON payload:
  ```json
  {
    "target_role": "Frontend Developer",
    "current_skills": "HTML, CSS"
  }
  ```

### Step 2: API Request
- The frontend sends a `POST` request to `http://localhost:8000/analyze`.
- The request is intercepted by the **FastAPI** backend in `main.py`.

### Step 3: AI Processing (Backend)
- The backend passes the data to `services/llm_service.py`.
- It constructs a **Prompt** for the AI. This prompt is critical; it instructs the AI to:
  1. Act as a career coach.
  2. STRICTLY include all user skills in the "Strong Skills" list (fixing previous logic issues).
  3. Calculate a non-zero match score if any relevant skills exist.
  4. Format the response as a **strict JSON object**.
- The prompt is sent to the local **Ollama** instance (`localhost:11434`).

### Step 4: Data Parsing & Response
- The LLM processes the prompt and returns a JSON string containing:
  - `job_match_analysis` (Score, reasoning, seniority)
  - `skill_gap_report` (Strong/Missing skills)
  - `study_plan`, `project_suggestions`, etc.
- The Python backend receives this string and validates it against the `AnalysisResponse` **Pydantic model**.
  - *Self-Correction*: If the AI misses a field, the validation would normally fail, but our robust model ensures structure.
- The validated JSON is sent back to the frontend.

### Step 5: Visualization (Frontend)
- The `App.jsx` component receives the data and switches the view from `InputForm` to `Dashboard`.
- **Match Analysis**: `SkillGapChart.jsx` renders circular progress bars using SVG to show the Match Score (e.g., 20%).
- **Skill Lists**: The Dashboard maps over the `strong` and `missing` arrays to display pill tags.

---

## 4. Key Directory Structure

```plaintext
Mini_Project/
├── backend/
│   ├── main.py                # API Entry point & CORS configuration
│   ├── services/
│   │   └── llm_service.py     # AI Logic & Prompt Engineering
│   ├── venv/                  # Python virtual environment
│   └── requirements.txt       # Python dependencies
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── InputForm.jsx      # User input capture
    │   │   ├── Dashboard.jsx      # Main results view
    │   │   └── SkillGapChart.jsx  # SVG visualization
    │   ├── App.jsx            # Main controller
    │   └── index.css          # Tailwind directives
    └── package.json           # Node dependencies
```

## 5. Recent Critical Improvements
- **Graph Logic**: Updated the prompt to ensure users with valid skills (like HTML/CSS) never receive a 0% match score.
- **Skill Categorization**: Enforced strict rules so the AI acknowledges basic skills as "Strong" rather than ignoring them.
- **Validation**: Expanded the Python data models to prevent backend crashes when the AI generates rich content like study plans.
