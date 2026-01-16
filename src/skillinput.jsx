import React, { useState } from 'react';

const SkillInput = () => {
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([
    'JavaScript', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js'
  ]);

  const addSkill = () => {
    if (skillInput.trim() !== '' && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 bg-slate-950 border-b border-slate-800">
        <div className="text-xl font-bold text-blue-500 tracking-tight">CareerPath AI</div>
        <div className="hidden md:flex space-x-8 text-slate-400 font-medium">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">My Path</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/10">
          Get Started
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">Define Your Career Path</h1>
          <p className="text-slate-400 text-lg">
            Tell us your desired job role and the skills you currently have. We'll help you chart your next steps.
          </p>
        </div>

        <div className="space-y-8">
          {/* Glassmorphism Card: Job Role - Removed Outline, Added Light Shade */}
          <div className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-2xl shadow-2xl transition-all hover:bg-white/[0.05]">
            <label className="block text-xl font-bold text-white mb-4">Desired Job Role</label>
            <input 
              type="text" 
              placeholder="e.g., Software Engineer, Data Scientist"
              className="w-full px-4 py-4 rounded-xl bg-slate-950/40 text-slate-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition shadow-inner"
            />
          </div>

          {/* Glassmorphism Card: Skills Input - Removed Outline, Added Light Shade */}
          <div className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-2xl shadow-2xl transition-all hover:bg-white/[0.05]">
            <label className="block text-xl font-bold text-white mb-4">Your Current Skills</label>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input 
                type="text" 
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                placeholder="Add a skill"
                className="flex-grow px-4 py-4 rounded-xl bg-slate-950/40 text-slate-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition shadow-inner"
              />
              <button 
                onClick={addSkill}
                className="flex items-center justify-center gap-2 bg-slate-800/50 text-blue-400 px-6 py-4 rounded-xl font-bold hover:bg-slate-700 transition active:scale-95 shadow-lg"
              >
                <i className="fas fa-plus"></i> Add Skill
              </button>
            </div>

            {/* Dynamic Skill Chips */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="bg-white/[0.06] text-slate-200 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:bg-white/[0.1]">
                  {skill} 
                  <i 
                    className="fas fa-times text-slate-500 cursor-pointer hover:text-red-400 transition"
                    onClick={() => removeSkill(skill)}
                  ></i>
                </span>
              ))}
            </div>
          </div>

          {/* Oval Shining Button with Arrow - Exact Size and Style */}
          <div className="flex justify-center pt-6">
            <button className="group relative bg-blue-600 text-white px-10 py-3.5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:bg-blue-500 transition-all duration-300 overflow-hidden active:scale-95 flex items-center gap-3">
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <span>Analyze My Path</span> 
              <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </button>
          </div>
        </div>
      </main>

      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center">
        <div className="text-slate-600 text-sm italic">
          &copy; 2026 CareerPath AI. All rights reserved.
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          100% {
            left: 150%;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillInput;