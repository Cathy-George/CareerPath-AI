"""
Prompt templates for resume analysis
"""

ANALYSIS_PROMPT = """You are an expert career counselor and resume analyst. Analyze the following resume against the job description and provide a comprehensive analysis.

## RESUME:
{resume}

## JOB DESCRIPTION:
{job_description}

## INSTRUCTIONS:
Provide a detailed analysis in the following JSON format. Be honest, specific, and constructive.

```json
{{
    "role_match": {{
        "target_role": "identified role title",
        "seniority_level": "entry/mid/senior/lead/executive",
        "match_percentage": 75,
        "strengths": ["list of candidate strengths relevant to role"],
        "gaps": ["list of gaps or areas needing improvement"],
        "summary": "brief 2-3 sentence explanation of the match"
    }},
    "skill_gaps": [
        {{
            "skill": "skill name from job description",
            "match_level": "strong|partial|missing",
            "evidence": "evidence from resume or reason for gap",
            "importance": "critical|important|nice-to-have"
        }}
    ],
    "preparation_plan": {{
        "first_30_days": {{
            "focus": "fundamentals & missing basics",
            "tasks": ["specific task 1", "specific task 2", "specific task 3"]
        }},
        "days_31_to_60": {{
            "focus": "advanced concepts & hands-on practice",
            "tasks": ["specific task 1", "specific task 2", "specific task 3"]
        }},
        "days_61_to_90": {{
            "focus": "interview readiness & real-world projects",
            "tasks": ["specific task 1", "specific task 2", "specific task 3"]
        }}
    }},
    "study_topics": [
        {{
            "topic": "topic name",
            "priority": "high|medium|low",
            "resources": ["free resource 1", "documentation link", "practice platform"],
            "estimated_time": "X hours/days"
        }}
    ],
    "project_suggestions": [
        {{
            "name": "project title",
            "description": "what to build and why",
            "skills_demonstrated": ["skill1", "skill2"],
            "difficulty": "beginner|intermediate|advanced",
            "estimated_time": "X weeks"
        }}
    ],
    "interview_guide": {{
        "technical_focus": [
            {{
                "area": "topic area",
                "key_concepts": ["concept1", "concept2"],
                "sample_questions": ["question1", "question2"]
            }}
        ],
        "behavioral_questions": [
            {{
                "theme": "leadership/teamwork/problem-solving/etc",
                "sample_questions": ["question1", "question2"],
                "tips": "how to answer effectively"
            }}
        ],
        "system_design": {{
            "applicable": true,
            "topics": ["topic1", "topic2"],
            "preparation_tips": "how to prepare"
        }}
    }},
    "resume_improvements": [
        {{
            "section": "section of resume",
            "current_issue": "what's wrong or missing",
            "suggestion": "specific improvement",
            "missing_keywords": ["keyword1", "keyword2"]
        }}
    ],
    "final_verdict": {{
        "ready_now": false,
        "readiness_level": "not ready|almost ready|ready with prep|fully ready",
        "estimated_preparation_time": "X weeks/months",
        "confidence_after_prep": 85,
        "conclusion": "One paragraph honest but motivational assessment of the candidate's situation and path forward."
    }}
}}
```

Respond ONLY with the JSON object, no additional text before or after.
"""


def get_analysis_prompt(resume: str, job_description: str) -> str:
    """Generate the analysis prompt with resume and job description"""
    return ANALYSIS_PROMPT.format(
        resume=resume,
        job_description=job_description
    )
