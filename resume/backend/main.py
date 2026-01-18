"""
Resume Analyzer API - FastAPI Backend
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from models.schemas import AnalysisRequest, AnalysisResponse, HealthResponse
from services.llm_service import llm_service


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifecycle manager for startup/shutdown events"""
    # Startup: Check LLM availability
    available, message = await llm_service.check_health()
    if available:
        print(f"✅ LLM Service: {message}")
    else:
        print(f"⚠️  LLM Service: {message}")
    yield
    # Shutdown
    print("👋 Shutting down Resume Analyzer API")


app = FastAPI(
    title="Resume Analyzer API",
    description="Analyze resumes against job descriptions using AI",
    version="1.0.0",
    lifespan=lifespan
)

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Root"])
async def root():
    """Root endpoint"""
    return {
        "message": "Resume Analyzer API",
        "version": "1.0.0",
        "docs": "/docs"
    }


@app.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """Check API and LLM service health"""
    available, message = await llm_service.check_health()
    return HealthResponse(
        status="healthy" if available else "degraded",
        llm_available=available,
        message=message
    )


@app.post("/analyze", tags=["Analysis"])
async def analyze_resume(request: AnalysisRequest):
    """
    Analyze a resume against a job description.
    
    Returns comprehensive analysis including:
    - Role match analysis with percentage
    - Skill gap breakdown
    - 30-60-90 day preparation plan
    - Study topics and resources
    - Project suggestions
    - Interview preparation guide
    - Resume improvement suggestions
    - Final verdict
    """
    # Check LLM availability
    available, message = await llm_service.check_health()
    if not available:
        raise HTTPException(
            status_code=503,
            detail={
                "error": "LLM service unavailable",
                "message": message,
                "suggestion": "Make sure Ollama is running: ollama serve"
            }
        )
    
    # Perform analysis
    result = await llm_service.analyze_resume(
        resume=request.resume,
        job_description=request.job_description
    )
    
    # Check for errors in result
    if "error" in result:
        raise HTTPException(
            status_code=500,
            detail=result
        )
    
    return result


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
