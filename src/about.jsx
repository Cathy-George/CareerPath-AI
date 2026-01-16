import React from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const team = [
    { name: "Azhar Ali", role: "Lead Architect", icon: "fa-user" },
    { name: "Cathy Geo", role: "AI Developer", icon: "fa-user" },
    { name: "Abhinav Krish", role: "UX Designer", icon: "fa-user" },
    { name: "Amayasree", role: "Data Scientist", icon: "fa-user" }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/[0.01] backdrop-blur-xl border-b border-white/[0.1] sticky top-0 z-50">
        <div 
          className="text-2xl font-bold text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] cursor-pointer"
          onClick={() => navigate('/')} // Optional: Navigate home on logo click
        >
          CareerPath AI
        </div>
        <div className="hidden md:flex space-x-10 text-slate-400 font-medium text-base">
          <button onClick={() => navigate('/')} className="hover:text-blue-400 transition-colors">Home</button>
          <button onClick={() => navigate('/login')} className="hover:text-blue-400 transition-colors">Get Started</button>
          <button className="hover:text-blue-400 transition-colors">My Path</button>
          <button className="text-blue-500 font-bold border-b-2 border-blue-500/50 pb-1">About</button>
        </div>
        <button 
          onClick={() => navigate('/login')} // Navigate to login/welcome on click
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
        >
          Get Started
        </button>
      </nav>

      {/* Header */}
      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
          About <span className="text-blue-500">CareerPath AI</span>
        </h1>
        <p className="text-xl text-blue-400/80 font-medium italic tracking-wide">Empowering your career journey with data-driven insights.</p>
      </header>

      <main className="container mx-auto px-6 pb-20 space-y-20">
        
        {/* Mission Section */}
        <section className="bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] p-10 shadow-2xl max-w-5xl mx-auto ring-1 ring-white/[0.15] border border-white/[0.05]">
          <div className="space-y-6 text-lg lg:text-xl leading-relaxed text-slate-300">
            <p>
              CareerPath AI is an innovative platform designed to assist students and job seekers in navigating the complex landscape of career development.
            </p>
            <p>
              Our mission is to demystify career planning by providing clear, actionable insights into desired job roles, necessary skills, and potential alternative pathways.
            </p>
            <p className="text-white font-semibold">
              We leverage advanced analytics to help you identify skill gaps, recommend targeted learning, and suggest roles that align with your evolving capabilities and ambitions.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 text-center">How Our System Works</h2>
          <p className="text-slate-500 text-center mb-12 tracking-widest uppercase text-xs font-black">A simple three-step process to guide your career.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1. Input Your Data", desc: "Begin by telling us your desired job role and the skills you currently possess. Our intuitive interface makes it easy to add your experience." },
              { step: "2. Skill Gap Analysis", desc: "Our AI engine analyzes requirements for your target role and compares them against your skills. It identifies crucial gaps for enhancement." },
              { step: "3. Recommendations", desc: "Receive tailored suggestions for new skills to acquire and explore alternative job roles that leverage your strengths." }
            ].map((item, index) => (
              <div key={index} className="bg-white/[0.08] backdrop-blur-2xl p-8 rounded-[2rem] shadow-xl transition-all hover:bg-white/[0.15] group">
                <div className="text-blue-500 text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.step}</div>
                <p className="text-slate-300 text-base leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 text-center">Meet the Team</h2>
          <p className="text-slate-500 text-center mb-16 tracking-widest uppercase text-xs font-black">Dedicated professionals passionate about career development.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white/[0.1] backdrop-blur-md rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-white/[0.2] transition-all shadow-2xl">
                  <i className={`fas ${member.icon} text-slate-400 text-3xl group-hover:text-blue-400 transition-colors`}></i>
                </div>
                <div className="font-bold text-white tracking-wide text-lg">{member.name}</div>
                <div className="text-xs font-black text-blue-500/80 uppercase tracking-tighter mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Contact & Feedback</h2>
          <div className="bg-white/[0.02] backdrop-blur-3xl p-10 rounded-[2.5rem] shadow-2xl ring-1 ring-white/[0.15] border border-white/[0.05]">
            <p className="text-slate-400 mb-6 italic text-lg">We'd love to hear from you. Your feedback helps us improve!</p>
            <div className="text-2xl lg:text-3xl font-bold text-blue-500 mb-8 tracking-tight">support@careerpathai.com</div>
            <div className="flex justify-center gap-8">
              <a href="#" className="text-slate-500 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group tracking-widest">
                <i className="fab fa-github text-xl group-hover:text-blue-400 transition-colors"></i> GITHUB
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group tracking-widest">
                <i className="fab fa-linkedin text-xl group-hover:text-blue-400 transition-colors"></i> LINKEDIN
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-950 border-t border-white/[0.05] text-center">
        <div className="text-slate-700 text-xs font-black tracking-[0.4em] uppercase">
          &copy; 2026 CareerPath AI. All rights reserved.
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default AboutUs;