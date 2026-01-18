import React, { useState } from 'react';
import { Target, Code2, Loader2 } from 'lucide-react';

const InputForm = ({ onAnalyze, loading }) => {
    const [targetRole, setTargetRole] = useState('');
    const [currentSkills, setCurrentSkills] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (targetRole && currentSkills) {
            onAnalyze({ target_role: targetRole, current_skills: currentSkills });
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-extrabold text-[#15803D]">
                    Career Skill Gap Analyzer
                </h2>
                <p className="text-slate-600 text-lg">
                    Discover your path to your dream job with AI-powered analysis
                </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-emerald-100 shadow-xl space-y-6">
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#0F172A]">
                        <Target className="w-4 h-4 text-[#15803D]" />
                        Target Role
                    </label>
                    <input
                        type="text"
                        value={targetRole}
                        onChange={(e) => setTargetRole(e.target.value)}
                        placeholder="e.g. Senior Frontend Engineer"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400 text-[#0F172A]"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#0F172A]">
                        <Code2 className="w-4 h-4 text-[#15803D]" />
                        Current Skills
                    </label>
                    <textarea
                        value={currentSkills}
                        onChange={(e) => setCurrentSkills(e.target.value)}
                        placeholder="e.g. React, JavaScript, HTML, CSS, Git"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400 text-[#0F172A] min-h-[120px]"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#15803D] hover:bg-[#166534] text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Analyzing Career Path...
                        </>
                    ) : (
                        'Generate Analysis'
                    )}
                </button>
            </form>
        </div>
    );
};

export default InputForm;
