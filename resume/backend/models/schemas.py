"""
Pydantic models for request/response validation
"""
from pydantic import BaseModel, Field
from typing import Optional, List
from enum import Enum


class SkillMatchLevel(str, Enum):
    STRONG = "strong"
    PARTIAL = "partial"
    MISSING = "missing"


class SkillAnalysis(BaseModel):
    skill: str
    match_level: SkillMatchLevel
    notes: Optional[str] = None


class PreparationPhase(BaseModel):
    title: str
    duration: str
    tasks: List[str]


class StudyTopic(BaseModel):
    topic: str
    resources: List[str]
    priority: str


class ProjectSuggestion(BaseModel):
    name: str
    description: str
    skills_demonstrated: List[str]
    difficulty: str


class InterviewFocus(BaseModel):
    area: str
    topics: List[str]
    tips: Optional[str] = None


class ResumeImprovement(BaseModel):
    section: str
    suggestion: str
    keywords: Optional[List[str]] = None


class AnalysisRequest(BaseModel):
    """Request model for resume analysis"""
    resume: str = Field(..., min_length=50, description="Resume text content")
    job_description: str = Field(..., min_length=50, description="Job description text")


class AnalysisResponse(BaseModel):
    """Response model containing all 8 analysis sections"""
    # Section 1: Role Match Analysis
    role_match: dict = Field(..., description="Role match analysis with percentage and explanation")
    
    # Section 2: Skill Gap Breakdown
    skill_gaps: List[dict] = Field(..., description="List of skills with match levels")
    
    # Section 3: 30-60-90 Day Plan
    preparation_plan: dict = Field(..., description="30-60-90 day preparation timeline")
    
    # Section 4: Study Topics & Resources
    study_topics: List[dict] = Field(..., description="Topics to study with resources")
    
    # Section 5: Project Suggestions
    project_suggestions: List[dict] = Field(..., description="Portfolio project ideas")
    
    # Section 6: Interview Prep Guide
    interview_guide: dict = Field(..., description="Interview preparation guidance")
    
    # Section 7: Resume Improvements
    resume_improvements: List[dict] = Field(..., description="Suggestions for resume enhancement")
    
    # Section 8: Final Verdict
    final_verdict: dict = Field(..., description="Overall readiness assessment")


class HealthResponse(BaseModel):
    """Health check response"""
    status: str
    llm_available: bool
    message: str
