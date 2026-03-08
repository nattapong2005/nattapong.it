"use client";

const Education = () => {
  return (
    <div
      id="education"
      className="bento-card slide-up col-span-1 md:col-span-2 p-10 flex flex-col bg-transparent/20"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
          <i className="fas fa-graduation-cap text-sm"></i>
        </div>
        <h3 className="text-lg font-medium text-white">Education</h3>
      </div>

      <div className="relative space-y-12 pl-4">
        {/* Timeline Line */}
        <div className="absolute left-[34px] top-6 bottom-6 w-px bg-white/5"></div>

        {/* ปวส. Item */}
        <div className="flex gap-8 relative z-10">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-lg shadow-primary/5">
            <i className="fas fa-university text-xs text-primary"></i>
          </div>
          <div className="pt-1">
            <h4 className="text-base font-bold text-white mb-2">
              วิทยาลัยอาชีวศึกษานครปฐม
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              สาขาวิชาเทคโนโลยีสารสนเทศ (ปวส.)
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/5 rounded border border-primary/10">
                GPAX: -
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                2024 - 2026
              </span>
            </div>
          </div>
        </div>

        {/* ปวช. Item */}
        <div className="flex gap-8 relative z-10 opacity-70">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <i className="fas fa-school text-xs text-slate-500"></i>
          </div>
          <div className="pt-1">
            <h4 className="text-base font-bold text-white mb-2">
              วิทยาลัยอาชีวศึกษานครปฐม
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              สาขาวิชาเทคโนโลยีสารสนเทศ (ปวช.)
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 bg-white/5 rounded border border-white/10">
                GPAX: 3.85
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                2021 - 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
