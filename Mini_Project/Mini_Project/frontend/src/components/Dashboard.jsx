import React from 'react';
import SkillGapChart from './SkillGapChart';

const Dashboard = ({ data, onBack }) => {
    if (!data) return null;

    const { job_match_analysis, skill_gap_report } = data;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8 w-full max-w-6xl mx-auto pb-12">
            <button onClick={onBack} className="text-[#15803D] hover:text-[#166534] mb-4 flex items-center gap-2 transition-colors font-medium">
                &larr; Analyze Another Role
            </button>

            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white/80 p-8 rounded-2xl border border-emerald-100 shadow-sm backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-[#15803D] mb-2">{job_match_analysis.seniority_level} Role Analysis</h2>
                    <p className="text-[#0F172A] mb-6">{job_match_analysis.reasoning}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                            <span className="text-[#15803D] text-sm font-bold uppercase tracking-wider">Strong Skills</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {skill_gap_report.strong.length > 0 ? (
                                    skill_gap_report.strong.map(s => <span key={s} className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-medium border border-emerald-200">{s}</span>)
                                ) : (
                                    <span className="text-xs text-emerald-600/70 italic">No specific strong skills identified yet.</span>
                                )}
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                            <span className="text-[#F59E0B] text-sm font-bold uppercase tracking-wider">Missing</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {skill_gap_report.missing.map(s => <span key={s} className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-medium border border-amber-200">{s}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <SkillGapChart analysis={job_match_analysis} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
