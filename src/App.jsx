import React from 'react';
import { useNavigate } from "react-router-dom";

// --- Sub-Components ---

const Navbar = ({ onGetStarted, onAbout }) => (
  <nav className="flex justify-between items-center p-6 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
    <div className="text-2xl font-bold text-blue-500 hover:scale-105 transition-transform cursor-pointer">
      CareerPath AI
    </div>
    <div className="hidden md:flex space-x-8 font-medium">
      <a href="#home" className="text-slate-100 hover:text-blue-400 transition-colors relative group">
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
      </a>
      <button 
        onClick={onAbout}
        className="text-slate-100 hover:text-blue-400 transition-colors relative group bg-transparent border-none p-0 font-medium cursor-pointer"
      >
        About
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
      </button>
    </div>
    <button 
      onClick={onGetStarted}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all active:scale-95"
    >
      Get Started
    </button>
  </nav>
);

const Hero = ({ onGetStarted }) => (
  <header className="container mx-auto px-6 py-20 text-center lg:text-left lg:flex items-center overflow-hidden">
    <div className="lg:w-1/2 animate-in fade-in slide-in-from-left duration-1000">
      <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-100">
        Unlock Your Potential: Chart Your Career with <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">AI Insights</span>
      </h1>
      <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
        CareerPath AI helps students and job seekers identify skill gaps, recommend new skills, and explore alternative roles for a clear career journey.
      </p>
      <button 
        onClick={onGetStarted}
        className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 active:scale-95"
      >
        Get Started
      </button>
    </div>
    <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative animate-in fade-in slide-in-from-right duration-1000">
      <div className="relative group">
        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-500"></div>
        <div className="relative bg-slate-800 border border-slate-700 p-12 rounded-3xl shadow-2xl text-blue-500 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all duration-500 transform group-hover:rotate-3">
          <i className="fas fa-microchip text-8xl"></i>
        </div>
      </div>
    </div>
  </header>
);

const Features = () => {
  const features = [
    {
      title: "Pinpoint Skill Gaps",
      desc: "Effortlessly identify the skills you need to bridge between your current abilities and your desired job role.",
      icon: "fa-search-plus"
    },
    {
      title: "Personalized Skill Recommendations",
      desc: "Receive tailored suggestions for courses, certifications, and resources to acquire in-demand skills.",
      icon: "fa-graduation-cap"
    },
    {
      title: "Explore Alternative Paths",
      desc: "Discover related job roles that align with your existing skill set, opening new opportunities.",
      icon: "fa-route"
    }
  ];

  return (
    <section className="bg-slate-800/50 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-100">How CareerPath AI Empowers Your Journey</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-blue-500 text-4xl mb-6 group-hover:scale-110 group-hover:text-blue-400 transition-transform"><i className={`fas ${f.icon}`}></i></div>
              <h3 className="text-xl font-bold mb-4 text-slate-100 group-hover:text-blue-300 transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-20 text-slate-100">Our Simple 3-Step Process</h2>
      <div className="relative flex flex-col md:flex-row justify-between items-center space-y-16 md:space-y-0">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
        
        <Step number="1" title="Define Your Ambition" desc="Tell us your dream job and list your current skills. Our AI does the rest." />
        <Step number="2" title="Smart Analysis" desc="Our system evaluates your profile against market demands and role requirements." />
        <Step number="3" title="Discover Your Path" desc="Get actionable insights, recommended skills, and exciting new career options." />
      </div>
    </div>
  </section>
);

const Step = ({ number, title, desc }) => (
  <div className="relative z-10 flex-1 text-center px-4 group">
    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-blue-900/40 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-blue-500/50">
      {number}
    </div>
    <h4 className="font-bold text-xl mb-3 text-slate-100 group-hover:text-blue-300 transition-colors">{title}</h4>
    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{desc}</p>
  </div>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-800/30">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-slate-100">Inspiration Corner</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Testimonial 
          text="Choose a job you love, and you will never have to work a day in your life."
          name="Confucius"
          initials="CS"
        />
        <Testimonial 
          text="Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary."
          name="Steve Jobs"
          initials="SJ"
          color="bg-indigo-500"
        />
      </div>
    </div>
  </section>
);

const Testimonial = ({ text, name, role, initials, color = "bg-blue-500" }) => (
  <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700 relative group hover:border-blue-500/30 hover:bg-slate-700/40 transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>
    <i className="fas fa-quote-left text-blue-500/10 text-6xl absolute top-6 left-6 group-hover:text-blue-500/20 transition-colors"></i>
    <p className="mb-6 text-slate-300 relative z-10 text-lg leading-relaxed italic group-hover:text-slate-200 transition-colors">"{text}"</p>
    <div className="flex items-center relative z-10">
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center font-bold mr-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
        {initials}
      </div>
      <div>
        <div className="font-bold text-white group-hover:text-blue-200 transition-colors">{name}</div>
        <div className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">{role}</div>
      </div>
    </div>
  </div>
);

const Footer = ({ onGetStarted }) => (
  <footer className="bg-slate-950 text-white py-24 border-t border-slate-900">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-slate-100 animate-pulse">Ready to Map Your Future?</h2>
      <p className="mb-10 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Join thousands of users who are taking control of their career journey with CareerPath AI.</p>
      <button 
        onClick={onGetStarted}
        className="bg-blue-600 text-white px-12 py-3 rounded-full font-bold text-xl hover:bg-blue-500 shadow-2xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 hover:shadow-blue-500/40"
      >
        Start Your Career Path Now
      </button>
      <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; 2026 CareerPath AI. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-github mr-2"></i>GitHub</a>
          <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-linkedin mr-2"></i>LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function CareerPathLanding() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/login');
  };

  const handleAboutNavigation = () => {
    navigate('/about');
  };

  return (
    <div className="bg-slate-900 min-h-screen font-sans selection:bg-blue-500/30 text-slate-100">
      <Navbar onGetStarted={handleNavigation} onAbout={handleAboutNavigation} />
      <Hero onGetStarted={handleNavigation} />
      <Features />
      <Process />
      <Testimonials />
      <Footer onGetStarted={handleNavigation} />
    </div>
  );
}