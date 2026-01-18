import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <div className="header__icon">🎯</div>
                <h1 className="header__title">Resume Analyzer</h1>
            </div>
            <p className="header__subtitle">
                AI-powered resume analysis to help you land your dream job.
                Get personalized insights, skill gap analysis, and a tailored preparation plan.
            </p>
        </header>
    );
}
