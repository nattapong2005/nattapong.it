"use client";

const ITKnowledge = () => {
  return (
    <div className="bento-card slide-up col-span-1 lg:col-span-2 p-10 bg-transparent/20">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400/80 border border-white/10">
          <i className="fas fa-network-wired text-sm"></i>
        </div>
        <h3 className="text-lg font-medium text-white">IT Fundamentals</h3>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-dark/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <i className="fas fa-tools text-lg opacity-80"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-200">System Troubleshooting</h4>
            <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">OS / Hardware / Repairs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-dark/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <i className="fas fa-server text-lg opacity-80"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-200">Server & Hosting</h4>
            <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">Basic Ops / Deployment</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-dark/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <i className="fab fa-git-alt text-lg opacity-80"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-200">Version Control</h4>
            <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">Git / GitHub Workflow</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-dark/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <i className="fas fa-sitemap text-lg opacity-80"></i>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-200">Data Structures</h4>
            <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">Algorithms / Logic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITKnowledge;
