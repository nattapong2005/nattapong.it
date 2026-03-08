"use client";

const Experience = () => {
  return (
    <div className="bento-card slide-up col-span-1 md:col-span-2 p-10 flex flex-col justify-center bg-transparent/20">
      <h3 className="text-lg font-medium mb-10 flex items-center gap-3 text-white">
        <i className="fas fa-briefcase text-slate-400 text-xl"></i>{" "}
        Work Experience
      </h3>
      <div className="space-y-8">
        <div className="relative pl-8 border-l border-white/5 pb-10 last:pb-0">
          <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
          <div className="text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-[0.2em]">
            Present
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            Freelance Web Developer
          </h4>
          <p className="text-slate-400 text-sm mb-3">
            รับพัฒนาเว็บไซต์และเว็บแอปพลิเคชันขนาดเล็ก สำหรับร้านค้าและการจัดการข้อมูล
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              Full Stack
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              Client Management
            </span>
          </div>
        </div>

        <div className="relative pl-8 border-l border-white/5">
          <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-slate-600"></div>
          <div className="text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-[0.2em]">
            2023 (10 Months)
          </div>
          <h4 className="text-lg font-bold text-white mb-1">
            IT Support Intern (Mockup)
          </h4>
          <p className="text-slate-400 text-sm mb-3">
            ฝึกงานด้านการดูแลระบบเครือข่าย และแก้ไขปัญหาคอมพิวเตอร์เบื้องต้นในสำนักงาน
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              System Admin
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/10">
              Networking
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
