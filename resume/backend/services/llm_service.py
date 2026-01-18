"""
LLM Service for Ollama integration
"""
import httpx
import json
import re
from typing import Optional
from prompts.analysis_prompt import get_analysis_prompt


class OllamaService:
    """Service class for interacting with Ollama LLM"""
    
    def __init__(self, base_url: str = "http://localhost:11434"):
        self.base_url = base_url
        self.models = ["llama3.2", "llama3.1", "mistral", "llama2"]
        self.timeout = 300.0  # 5 minutes for LLM response
    
    async def check_health(self) -> tuple[bool, str]:
        """Check if Ollama is running and has a model available"""
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.get(f"{self.base_url}/api/tags")
                if response.status_code == 200:
                    data = response.json()
                    models = [m.get("name", "") for m in data.get("models", [])]
                    if models:
                        return True, f"Ollama running with models: {', '.join(models[:3])}"
                    return False, "Ollama running but no models installed. Run: ollama pull llama3.2"
                return False, f"Ollama returned status {response.status_code}"
        except httpx.ConnectError:
            return False, "Cannot connect to Ollama. Make sure it's running (ollama serve)"
        except Exception as e:
            return False, f"Error checking Ollama: {str(e)}"
    
    async def get_available_model(self) -> Optional[str]:
        """Get the first available model from preferred list"""
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.get(f"{self.base_url}/api/tags")
                if response.status_code == 200:
                    data = response.json()
                    available = [m.get("name", "").split(":")[0] for m in data.get("models", [])]
                    
                    # Try preferred models first
                    for model in self.models:
                        if model in available:
                            return model
                    
                    # Return any available model
                    if available:
                        return available[0]
        except Exception:
            pass
        return None
    
    def _extract_json(self, text: str) -> dict:
        """Extract JSON from LLM response, handling markdown code blocks"""
        # Try to find JSON in code blocks
        json_match = re.search(r'```(?:json)?\s*([\s\S]*?)```', text)
        if json_match:
            text = json_match.group(1)
        
        # Clean up the text
        text = text.strip()
        
        # Try to parse directly
        try:
            return json.loads(text)
        except json.JSONDecodeError:
            # Try to find JSON object boundaries
            start = text.find('{')
            end = text.rfind('}')
            if start != -1 and end != -1:
                try:
                    return json.loads(text[start:end+1])
                except json.JSONDecodeError:
                    pass
        
        # Return error structure
        return {
            "error": "Failed to parse LLM response",
            "raw_response": text[:500]
        }
    
    async def analyze_resume(self, resume: str, job_description: str) -> dict:
        """Send resume and job description to LLM for analysis"""
        model = await self.get_available_model()
        if not model:
            return {
                "error": "No LLM model available",
                "message": "Please install a model: ollama pull llama3.2"
            }
        
        prompt = get_analysis_prompt(resume, job_description)
        
        try:
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await client.post(
                    f"{self.base_url}/api/generate",
                    json={
                        "model": model,
                        "prompt": prompt,
                        "stream": False,
                        "options": {
                            "temperature": 0.7,
                            "num_predict": 4096
                        }
                    }
                )
                
                if response.status_code == 200:
                    data = response.json()
                    llm_response = data.get("response", "")
                    return self._extract_json(llm_response)
                else:
                    return {
                        "error": f"LLM request failed with status {response.status_code}",
                        "details": response.text
                    }
        except httpx.TimeoutException:
            return {
                "error": "LLM request timed out",
                "message": "The analysis is taking too long. Try with a shorter resume or job description."
            }
        except Exception as e:
            return {
                "error": "LLM request failed",
                "message": str(e)
            }


# Global service instance
llm_service = OllamaService()
