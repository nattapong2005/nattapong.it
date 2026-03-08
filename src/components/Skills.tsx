"use client";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bento-card slide-up col-span-1 lg:col-span-2 row-span-2 p-8"
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <i className="fas fa-laptop-code text-primary"></i> Programming Skills
      </h3>

      <div className="space-y-6">
        {/* Skill Item */}
        <div className="group">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium flex items-center gap-2">
              <i className="fab fa-js text-yellow-400"></i> JavaScript /
              TypeScript
            </span>
            <span className="text-slate-500 group-hover:text-yellow-400 transition-colors">
              กำลังศึกษาเชิงลึก
            </span>
          </div>
          <div className="w-full bg-surface rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 h-2.5 rounded-full w-[75%] relative">
              <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] w-full"></div>
            </div>
          </div>
        </div>

        {/* Skill Item */}
        <div className="group">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium flex items-center gap-2">
              <i className="fab fa-html5 text-orange-500"></i> HTML & CSS
              (Tailwind)
            </span>
            <span className="text-slate-500 group-hover:text-orange-500 transition-colors">
              ใช้งานได้คล่องแคล่ว
            </span>
          </div>
          <div className="w-full bg-surface rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-300 h-2.5 rounded-full w-[90%] relative"></div>
          </div>
        </div>

        {/* Skill Item */}
        <div className="group">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium flex items-center gap-2">
              <i className="fab fa-react text-blue-400"></i> Next.js / React
            </span>
            <span className="text-slate-500 group-hover:text-blue-400 transition-colors">
              ระดับเริ่มต้น - ปานกลาง
            </span>
          </div>
          <div className="w-full bg-surface rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full w-[55%] relative"></div>
          </div>
        </div>

        {/* Skill Item */}
        <div className="group">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium flex items-center gap-2">
              <i className="fab fa-php text-indigo-400"></i> PHP & SQL Databases
            </span>
            <span className="text-slate-500 group-hover:text-indigo-400 transition-colors">
              เข้าใจพื้นฐานการออกแบบ DB
            </span>
          </div>
          <div className="w-full bg-surface rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 h-2.5 rounded-full w-[65%] relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
