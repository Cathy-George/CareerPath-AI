import React, { useState } from 'react';

export default function InputForm({ onSubmit, isLoading }) {
    const [resume, setResume] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (resume.trim().length >= 50 && jobDescription.trim().length >= 50) {
            onSubmit(resume, jobDescription);
        }
    };

    const isValid = resume.trim().length >= 50 && jobDescription.trim().length >= 50;

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-form">
                {/* Resume Input */}
                <div className="input-group">
                    <div className="input-group__header">
                        <label className="input-group__label">
                            <span className="input-group__icon">📄</span>
                            Your Resume
                        </label>
                        <span className="input-group__count">
                            {resume.length} characters
                        </span>
                    </div>
                    <textarea
                        className="input-group__textarea"
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                        placeholder="Paste your resume content here...

Include your:
• Professional summary
• Work experience
• Skills & technologies
• Education
• Projects & achievements

Minimum 50 characters required."
                        disabled={isLoading}
                    />
                </div>

                {/* Job Description Input */}
                <div className="input-group">
                    <div className="input-group__header">
                        <label className="input-group__label">
                            <span className="input-group__icon">💼</span>
                            Job Description
                        </label>
                        <span className="input-group__count">
                            {jobDescription.length} characters
                        </span>
                    </div>
                    <textarea
                        className="input-group__textarea"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the job description here...

Include:
• Job title & company
• Required qualifications
• Responsibilities
• Required skills
• Preferred qualifications

Minimum 50 characters required."
                        disabled={isLoading}
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="submit-container">
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={!isValid || isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="submit-btn__icon">⏳</span>
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <span className="submit-btn__icon">✨</span>
                            Analyze My Resume
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
