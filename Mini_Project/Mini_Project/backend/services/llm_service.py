import requests
import json
from typing import Dict, Any

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "llama3.2"

def call_ollama(prompt: str) -> str:
    """Helper to call Ollama API"""
    try:
        payload = {
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": False,
            "format": "json"
        }
        response = requests.post(OLLAMA_URL, json=payload)
        response.raise_for_status()
        return response.json().get("response", "")
    except Exception as e:
        print(f"Error calling Ollama: {e}")
        return "{}"

def analyze_career_path(target_role: str, current_skills: str) -> Dict[str, Any]:
    """
    Analyzes the career path based on target role and current skills.
    Returns a unified JSON structure with all required data.
    """
    
    prompt = f"""
    You are an expert career coach. Analyze the user's readiness for a target role based strictly on their current skills.

    **Input:**
    - Target Role: "{target_role}"
    - Current Skills: "{current_skills}"

    **Instructions:**
    1. **Analyze** the user's 'Current Skills' list.
    2. **Classify** matched skills:
        - **Strong Skills**: You MUST include EVERY skill from the 'Current Skills' input that is valid for the '{target_role}'. Do NOT exclude foundational skills. For example, if the role is Frontend and input has HTML/CSS, they MUST be listed here.
        - **Missing**: List critical skills for '{target_role}' that are completely absent from the 'Current Skills'.
    3. **Determine Seniority**: Assess the user's *current* competency level (Junior/Mid/Senior) based on provided skills.
    4. **Calculate Match**: Calculate a realistic match percentage based on the ratio of strong skills to total required skills. **IMPORTANT**: If the user has ANY strong/relevant skills (even just one), the match percentage MUST be greater than 0 (minimum 10%). Do not return 0% if there are strong skills.

    **Output JSON Structure:**
    {{
        "job_match_analysis": {{
            "match_percentage": <integer 0-100>,
            "seniority_level": "<Junior/Mid/Senior> (Calculated based on current skills)",
            "readiness_score": <integer 0-10>,
            "reasoning": "<Briefly explain the gap.>"
        }},
        "skill_gap_report": {{
            "strong": ["<Relevant skills found in user input>"],
            "missing": ["<Comprehensive list of missing standard requirements>"]
        }},
        "study_plan": {{
            "week_1": ["<Topic 1>", "<Topic 2>"],
            "week_2": ["<Topic 1>", "<Topic 2>"],
            "week_3": ["<Topic 1>", "<Topic 2>"],
            "week_4": ["<Topic 1>", "<Topic 2>"]
        }},
        "project_suggestions": [
            {{
                "name": "<Project Name>",
                "description": "<Brief Description>",
                "technologies": ["<Tech 1>", "<Tech 2>"]
            }}
        ],
        "learning_resources": [
            {{
                "title": "<Resource Title>",
                "type": "<Course/Article/Video>",
                "link": "<URL or description>"
            }}
        ],
        "github_repositories": [
            {{
                "name": "<Repo Name>",
                "description": "<Description>",
                "link": "<URL>"
            }}
        ],
        "alternative_roles": [
            {{
                "role": "<Role Name>",
                "match": "<High/Medium/Low>"
            }}
        ]
    }}
    
    RETURN ONLY JSON. DO NOT INCLUDE ANY MARKDOWN formatting like ```json.
    """
    
    response_text = call_ollama(prompt)
    try:
        return json.loads(response_text)
    except json.JSONDecodeError:
        # Fallback if model fails to return valid json, though 'format': 'json' helps
        print("Failed to parse JSON from LLM")
        return {"error": "Failed to generate analysis", "raw_response": response_text}
