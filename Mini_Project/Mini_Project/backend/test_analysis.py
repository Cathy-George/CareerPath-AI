
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from services.llm_service import analyze_career_path

def test_analysis():
    print("Testing analysis...")
    role = "Frontend Developer"
    skills = "HTML, CSS"
    
    result = analyze_career_path(role, skills)
    
    print("Result keys:", result.keys())
    
    # Check for removed keys
    removed_keys = ["study_plan", "learning_resources", "github_repositories", "alternative_roles", "project_suggestions"]
    for key in removed_keys:
        if key in result:
            print(f"FAILED: {key} should be removed but is present.")
        else:
            print(f"PASSED: {key} is correctly removed.")
            
    # Check for strong skills
    strong_skills = result.get("skill_gap_report", {}).get("strong", [])
    print(f"Strong skills found: {strong_skills}")
    
    # Since we can't control LLM output deterministically, we just check if it's not empty if logical
    # But usually HTML/CSS should be strong for Frontend.
    if any(s.lower() in ["html", "css"] for s in strong_skills):
         print("PASSED: HTML or CSS identified as strong skill.")
    else:
         print("WARNING: Strong skills might be missing HTML/CSS, check output.")
         
    print("Test Complete.")

if __name__ == "__main__":
    test_analysis()
