import React from 'react';

const Login = () => {
  return (
    <div className="bg-[#020617] text-slate-50 font-sans min-h-screen flex items-center justify-center p-6 selection:bg-cyan-500/30">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 shadow-2xl overflow-hidden group">
        
        {/* Subtle Shine Reflection on the Card itself */}
        <div className="absolute -top-[100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-12 transition-transform duration-1000 group-hover:translate-x-[10%] group-hover:translate-y-[10%] pointer-events-none"></div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Login</h1>
          <p className="text-slate-400 font-medium">Enter your credentials to continue</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3 ml-1">
              Email
            </label>
            <input 
              type="email" 
              placeholder="user@example.com" 
              className="w-full px-5 py-4 bg-slate-950/50 border border-white/10 rounded-2xl text-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3 ml-1">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-4 bg-slate-950/50 border border-white/10 rounded-2xl text-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>

          {/* Login Button with Shine Effect */}
          <button 
            type="submit" 
            className="relative w-full bg-cyan-500 text-[#020617] py-4 rounded-2xl font-black text-xl overflow-hidden group/btn hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-cyan-400/40 active:scale-[0.98] mt-4"
          >
            {/* Shining Glare Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none"></span>
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400 font-medium">
            Don't have an account?{" "}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:underline font-bold transition-colors">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;