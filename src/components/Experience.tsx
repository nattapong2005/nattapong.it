"use client";

const Experience = () => {
  return (
    <div className="bento-card slide-up col-span-1 md:col-span-2 p-10 flex flex-col justify-center bg-transparent/20">
      <h3 className="text-lg font-medium mb-10 flex items-center gap-3 text-white">
        <i className="fas fa-briefcase text-slate-400 text-xl"></i>{" "}
        Work Experience
      </h3>
      <div className="space-y-12">
        <div className="relative pl-8 border-l border-white/5 pb-10 last:pb-0">
          <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-slate-600"></div>
          <div className="text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-[0.2em]">
            2025 (7 MONTHS)
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            Masaru Marketing
          </h4>
          <p className="text-slate-400 text-sm mb-3">
            ดูแลและพัฒนาเว็บไซต์ รวมถึงงานด้านเทคนิคและการจัดการพื้นฐานในองค์กร
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              Web Developer
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              IT Technical
            </span>
          </div>
        </div>

        <div className="relative pl-8 border-l border-white/5">
          <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-slate-600"></div>
          <div className="text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-[0.2em]">
            2023 (4 MONTHS)
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            สรรพากร นครปฐม
          </h4>
          <p className="text-slate-400 text-sm mb-3">
            ฝึกปฏิบัติงานด้านการจัดการข้อมูล และสนับสนุนงานด้านไอทีในส่วนราชการ
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              IT Support
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              Data Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
