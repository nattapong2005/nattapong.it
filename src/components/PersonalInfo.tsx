"use client";

const PersonalInfo = () => {
  return (
    <>
      {/* Personal Detail Box */}
      <div className="bento-card slide-up col-span-1 p-8 flex flex-col justify-between group overflow-hidden bg-transparent/20">
        <div>
          <div className="w-10 h-10 rounded-full bg-white/5 text-slate-400 flex items-center justify-center text-lg mb-8 border border-white/10">
            <i className="fas fa-id-card"></i>
          </div>
          <h3 className="text-white font-medium text-base mb-6">
            Basic Information
          </h3>
          <ul className="space-y-5">
            <li className="flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Age</span>
              <span className="text-sm text-slate-300">20 Years Old</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Location</span>
              <span className="text-sm text-slate-300">Nakhon Pathom, TH</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">GitHub</span>
              <a href="https://github.com/nattapong2005" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-primary transition-colors">
                nattapong2005
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Email</span>
              <a href="mailto:azzzx30089@gmail.com" className="text-sm text-slate-300 hover:text-primary transition-colors">
                azzzx30089@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hobbies Box */}
      <div className="bento-card slide-up col-span-1 p-8 flex flex-col justify-between group overflow-hidden bg-transparent/20">
        <div>
          <div className="w-10 h-10 rounded-full bg-white/5 text-slate-400 flex items-center justify-center text-lg mb-8 border border-white/10">
            <i className="fas fa-heart"></i>
          </div>
          <h3 className="text-white font-medium text-base mb-8">
            Interests
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 group/item">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover/item:text-blue-400 transition-colors">
                <i className="fas fa-code text-xs"></i>
              </div>
              <span className="text-xs text-slate-400">Coding</span>
            </div>
            <div className="flex items-center gap-3 group/item">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover/item:text-purple-400 transition-colors">
                <i className="fas fa-gamepad text-xs"></i>
              </div>
              <span className="text-xs text-slate-400">Gaming</span>
            </div>
            <div className="flex items-center gap-3 group/item">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover/item:text-green-400 transition-colors">
                <i className="fas fa-headphones text-xs"></i>
              </div>
              <span className="text-xs text-slate-400">Music</span>
            </div>
            <div className="flex items-center gap-3 group/item">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover/item:text-yellow-400 transition-colors">
                <i className="fas fa-film text-xs"></i>
              </div>
              <span className="text-xs text-slate-400">Cinema</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Passion for learning new technologies and constant improvement.
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
