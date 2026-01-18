import React from 'react';

export default function LoadingSpinner() {
    return (
        <div className="loading">
            <div className="loading__spinner"></div>
            <p className="loading__text">Analyzing your resume...</p>
            <p className="loading__subtext">
                This may take 30-60 seconds depending on your resume length
            </p>
        </div>
    );
}
