const API_BASE_URL = 'http://localhost:8000';

/**
 * Check if the API and LLM service are available
 */
export async function checkHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        return await response.json();
    } catch (error) {
        return {
            status: 'error',
            llm_available: false,
            message: 'Cannot connect to backend. Make sure the server is running.'
        };
    }
}

/**
 * Analyze resume against job description
 */
export async function analyzeResume(resume, jobDescription) {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            resume: resume,
            job_description: jobDescription,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail?.message || errorData.detail?.error || 'Analysis failed');
    }

    return await response.json();
}
