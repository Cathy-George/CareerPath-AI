import React from 'react';

const Recommendations = () => {
  const evaluatedRequirements = [
    {
      category: "Core Languages",
      items: ["HTML", "CSS & JavaScript"]
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js"]
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Sass"]
    },
    {
      category: "Tooling & Version Control",
      items: ["Git", "Webpack & Babel"]
    },
    {
      category: "UI/UX Principles",
      items: ["Responsive Design", "Accessibility (A11y)"]
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen selection:bg-blue-500/30">
      {/* Navigation - Polished Edge with Welcome Page Blue */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/[0.01] backdrop-blur-xl border-b border-white/[0.1] sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">CareerPath AI</div>
        <div className="hidden md:flex space-x-10 text-slate-400 font-medium text-base">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-blue-500 font-bold border-b-2 border-blue-500/50 pb-1">My Path</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-all active:scale-95">
          Get Started
        </button>
      </nav>

      {/* Main Header - Typography from Welcome Page */}
      <header className="container mx-auto px-6 py-16 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
          Career Path <span className="text-blue-500">Recommendations</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Based on your current profile, we have analyzed the industry standards to help you bridge the gap to your desired role.
        </p>
      </header>

      <main className="container mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Career Profile Card - High Shine Outer Border */}
          <section className="bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] p-10 shadow-2xl ring-1 ring-white/[0.15] border border-white/[0.05] relative overflow-hidden">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-5 bg-blue-500/10 rounded-2xl shadow-inner ring-1 ring-white/[0.1]">
                <i className="fas fa-id-badge text-blue-500 text-4xl"></i>
              </div>
              <div>
                <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.2em] mb-1">Career Profile</h2>
                <div className="flex flex-col">
                  <span className="text-base text-slate-500 font-medium italic">Your Target:</span>
                  <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Frontend Developer</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08]">
              <h3 className="text-sm font-black text-blue-500 uppercase tracking-[0.2em] mb-6">Current Skills:</h3>
              <div className="flex flex-wrap gap-4">
                {/* Lighter color small boxes without outlines */}
                {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Figma"].map((skill) => (
                  <span key={skill} className="bg-white/[0.12] backdrop-blur-md px-5 py-2.5 rounded-xl text-lg font-semibold text-white hover:bg-white/[0.2] transition-all cursor-default shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Evaluated Requirements - High Shine Outer Border */}
          <section className="bg-white/[0.01] backdrop-blur-3xl rounded-[2.5rem] p-10 shadow-2xl ring-1 ring-white/[0.15] border border-white/[0.05]">
            <h2 className="text-3xl font-bold mb-12 text-white flex items-center gap-4">
              <i className="fas fa-clipboard-check text-blue-500/80"></i>
              Evaluated Role Requirements
            </h2>
            
            <div className="space-y-12">
              {evaluatedRequirements.map((group, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-sm font-black text-blue-500/60 uppercase tracking-[0.2em] mb-6 group-hover:text-blue-400 transition-colors">
                    {group.category}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((item, sIdx) => (
                      /* Lighter color requirement boxes without outlines */
                      <div key={sIdx} className="p-6 bg-white/[0.07] backdrop-blur-md rounded-2xl hover:bg-white/[0.15] transition-all shadow-inner">
                        <span className="text-xl font-bold text-white tracking-wide leading-none">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Alternative Roles Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-white/[0.01] backdrop-blur-3xl ring-1 ring-white/[0.12] border border-white/[0.05] rounded-[2.5rem] p-10 shadow-2xl sticky top-28 transition-all hover:bg-white/[0.03]">
            <h2 className="text-xs font-black mb-12 text-blue-500/40 uppercase tracking-[0.3em] text-center italic">Alternative Job Roles</h2>
            <div className="space-y-16">
              {[
                { title: "UI Developer", desc: "Focus on translating designs into interactive interfaces." },
                { title: "React Developer", desc: "Build robust user interfaces and components using React." },
                { title: "Web Designer", desc: "Combine design principles with front-end skills." }
              ].map((role, rIdx) => (
                <div key={rIdx} className="group cursor-pointer">
                  <h3 className="text-2xl font-bold text-slate-200 group-hover:text-blue-400 transition-all flex items-center gap-4">
                    <span className="w-2 h-2 bg-blue-500/30 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all"></span>
                    {role.title}
                  </h3>
                  <p className="text-lg mt-4 leading-relaxed text-slate-500 font-medium group-hover:text-slate-300 transition-colors pl-6 border-l border-white/[0.08]">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <footer className="py-16 bg-slate-950 border-t border-white/[0.08] text-center">
        <div className="text-slate-700 text-sm tracking-[0.4em] font-bold uppercase">
          &copy; 2026 CareerPath AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Recommendations;