import React, { useState } from 'react';

function AnalysisSection({ number, title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`section ${isOpen ? 'section--open' : ''}`}>
            <div className="section__header" onClick={() => setIsOpen(!isOpen)}>
                <span className="section__number">{number}</span>
                <h3 className="section__title">{title}</h3>
                <span className="section__toggle">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && <div className="section__content">{children}</div>}
        </div>
    );
}

function MatchScore({ data }) {
    const percentage = data?.match_percentage || 0;
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="match-score">
            <div className="match-score__circle">
                <svg className="match-score__svg" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                    <circle className="match-score__track" cx="50" cy="50" r="45" />
                    <circle
                        className="match-score__progress"
                        cx="50"
                        cy="50"
                        r="45"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </svg>
                <span className="match-score__value">{percentage}%</span>
            </div>
            <div className="match-score__details">
                <h4 className="match-score__role">{data?.target_role || 'Target Role'}</h4>
                <span className="match-score__level">{data?.seniority_level || 'Level'}</span>
                <p className="match-score__summary">{data?.summary || ''}</p>
            </div>
        </div>
    );
}

function SkillsGrid({ skills }) {
    if (!skills || skills.length === 0) return <p>No skills data available</p>;

    const getIcon = (level) => {
        switch (level) {
            case 'strong': return '✅';
            case 'partial': return '⚡';
            case 'missing': return '❌';
            default: return '•';
        }
    };

    return (
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div key={index} className={`skill-item skill-item--${skill.match_level}`}>
                    <span className="skill-item__icon">{getIcon(skill.match_level)}</span>
                    <div className="skill-item__content">
                        <div className="skill-item__name">{skill.skill}</div>
                        <div className="skill-item__evidence">{skill.evidence}</div>
                    </div>
                    <span className="skill-item__badge">{skill.match_level}</span>
                </div>
            ))}
        </div>
    );
}

function Timeline({ plan }) {
    if (!plan) return <p>No preparation plan available</p>;

    const phases = [
        { key: 'first_30_days', title: 'First 30 Days', marker: '1' },
        { key: 'days_31_to_60', title: 'Days 31-60', marker: '2' },
        { key: 'days_61_to_90', title: 'Days 61-90', marker: '3' }
    ];

    return (
        <div className="timeline">
            {phases.map(({ key, title, marker }) => {
                const phase = plan[key];
                if (!phase) return null;
                return (
                    <div key={key} className="timeline__phase">
                        <span className="timeline__marker">{marker}</span>
                        <div className="timeline__header">
                            <h4 className="timeline__title">{title}</h4>
                            <span className="timeline__focus">{phase.focus}</span>
                        </div>
                        <ul className="timeline__tasks">
                            {(phase.tasks || []).map((task, i) => (
                                <li key={i} className="timeline__task">{task}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

function StudyTopics({ topics }) {
    if (!topics || topics.length === 0) return <p>No study topics available</p>;

    return (
        <div className="card-list">
            {topics.map((topic, index) => (
                <div key={index} className="card">
                    <div className="card__header">
                        <h4 className="card__title">📚 {topic.topic}</h4>
                        <span className="card__badge">{topic.priority} priority</span>
                    </div>
                    <p className="card__description">
                        Estimated time: {topic.estimated_time || 'Varies'}
                    </p>
                    <div className="card__tags">
                        {(topic.resources || []).map((resource, i) => (
                            <span key={i} className="card__tag">{resource}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function ProjectSuggestions({ projects }) {
    if (!projects || projects.length === 0) return <p>No project suggestions available</p>;

    return (
        <div className="card-list">
            {projects.map((project, index) => (
                <div key={index} className="card">
                    <div className="card__header">
                        <h4 className="card__title">🚀 {project.name}</h4>
                        <span className="card__badge">{project.difficulty}</span>
                    </div>
                    <p className="card__description">{project.description}</p>
                    <div className="card__tags">
                        {(project.skills_demonstrated || []).map((skill, i) => (
                            <span key={i} className="card__tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function InterviewGuide({ guide }) {
    if (!guide) return <p>No interview guide available</p>;

    return (
        <div className="card-list">
            {/* Technical Focus */}
            {(guide.technical_focus || []).map((area, index) => (
                <div key={`tech-${index}`} className="card">
                    <div className="card__header">
                        <h4 className="card__title">💻 {area.area}</h4>
                        <span className="card__badge">Technical</span>
                    </div>
                    <div className="card__tags" style={{ marginBottom: '0.5rem' }}>
                        {(area.key_concepts || []).map((concept, i) => (
                            <span key={i} className="card__tag">{concept}</span>
                        ))}
                    </div>
                    {(area.sample_questions || []).map((q, i) => (
                        <p key={i} className="card__description">• {q}</p>
                    ))}
                </div>
            ))}

            {/* Behavioral */}
            {(guide.behavioral_questions || []).map((item, index) => (
                <div key={`beh-${index}`} className="card">
                    <div className="card__header">
                        <h4 className="card__title">🗣️ {item.theme}</h4>
                        <span className="card__badge">Behavioral</span>
                    </div>
                    {(item.sample_questions || []).map((q, i) => (
                        <p key={i} className="card__description">• {q}</p>
                    ))}
                    {item.tips && <p className="card__description"><strong>Tip:</strong> {item.tips}</p>}
                </div>
            ))}

            {/* System Design */}
            {guide.system_design?.applicable && (
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__title">🏗️ System Design</h4>
                        <span className="card__badge">Advanced</span>
                    </div>
                    <div className="card__tags">
                        {(guide.system_design.topics || []).map((topic, i) => (
                            <span key={i} className="card__tag">{topic}</span>
                        ))}
                    </div>
                    <p className="card__description">{guide.system_design.preparation_tips}</p>
                </div>
            )}
        </div>
    );
}

function ResumeImprovements({ improvements }) {
    if (!improvements || improvements.length === 0) return <p>No improvement suggestions available</p>;

    return (
        <div className="card-list">
            {improvements.map((item, index) => (
                <div key={index} className="card">
                    <div className="card__header">
                        <h4 className="card__title">📝 {item.section}</h4>
                    </div>
                    <p className="card__description"><strong>Issue:</strong> {item.current_issue}</p>
                    <p className="card__description"><strong>Suggestion:</strong> {item.suggestion}</p>
                    {item.missing_keywords && item.missing_keywords.length > 0 && (
                        <div className="card__tags">
                            {item.missing_keywords.map((keyword, i) => (
                                <span key={i} className="card__tag">+ {keyword}</span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function FinalVerdict({ verdict }) {
    if (!verdict) return <p>No verdict available</p>;

    const getStatusIcon = () => {
        if (verdict.ready_now) return '🎉';
        switch (verdict.readiness_level) {
            case 'almost ready': return '🔥';
            case 'ready with prep': return '📈';
            default: return '🎯';
        }
    };

    return (
        <div className="verdict">
            <div className="verdict__status">
                <span>{getStatusIcon()}</span>
                <span>{verdict.readiness_level?.toUpperCase() || 'ASSESSMENT'}</span>
            </div>
            <div className="verdict__time">{verdict.estimated_preparation_time || 'TBD'}</div>
            <div className="verdict__label">Estimated Preparation Time</div>
            <p className="verdict__conclusion">{verdict.conclusion}</p>
        </div>
    );
}

export default function AnalysisResults({ data, onReset }) {
    if (!data) return null;

    return (
        <div className="results">
            <div className="results__header">
                <h2 className="results__title">📊 Analysis Results</h2>
                <div className="results__actions">
                    <button className="results__btn" onClick={onReset}>
                        ← New Analysis
                    </button>
                </div>
            </div>

            <AnalysisSection number="1" title="Role Match Analysis" defaultOpen={true}>
                <MatchScore data={data.role_match} />
                {data.role_match?.strengths && (
                    <>
                        <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>✅ Strengths</h4>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                            {data.role_match.strengths.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </>
                )}
                {data.role_match?.gaps && (
                    <>
                        <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>⚠️ Gaps</h4>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
                            {data.role_match.gaps.map((g, i) => <li key={i}>{g}</li>)}
                        </ul>
                    </>
                )}
            </AnalysisSection>

            <AnalysisSection number="2" title="Skill Gap Breakdown">
                <SkillsGrid skills={data.skill_gaps} />
            </AnalysisSection>

            <AnalysisSection number="3" title="30-60-90 Day Preparation Plan">
                <Timeline plan={data.preparation_plan} />
            </AnalysisSection>

            <AnalysisSection number="4" title="Study Topics & Resources">
                <StudyTopics topics={data.study_topics} />
            </AnalysisSection>

            <AnalysisSection number="5" title="Project & Practice Suggestions">
                <ProjectSuggestions projects={data.project_suggestions} />
            </AnalysisSection>

            <AnalysisSection number="6" title="Interview Preparation Guide">
                <InterviewGuide guide={data.interview_guide} />
            </AnalysisSection>

            <AnalysisSection number="7" title="Resume Improvement Suggestions">
                <ResumeImprovements improvements={data.resume_improvements} />
            </AnalysisSection>

            <AnalysisSection number="8" title="Final Verdict" defaultOpen={true}>
                <FinalVerdict verdict={data.final_verdict} />
            </AnalysisSection>
        </div>
    );
}
