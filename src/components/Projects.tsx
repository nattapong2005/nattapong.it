"use client";

const ProjectCard = ({
  title,
  description,
  tags,
  github,
  role,
  isMockup = false,
}: {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  role: string;
  isMockup?: boolean;
}) => {
  return (
    <div
      className="bento-card slide-up col-span-1 md:col-span-2 p-10 flex flex-col group overflow-hidden bg-transparent/20 hover:bg-white/5 transition-all duration-500"
    >
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
            {role}
          </span>
          {isMockup && (
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-white/5 border border-white/10">
              Concept
            </span>
          )}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          )}
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-bold tracking-widest text-slate-500"
            >
              # {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="slide-up col-span-1 md:col-span-3 lg:col-span-4 mt-32 mb-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Selected Works</span>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              My <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/nattapong2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white text-xs font-medium transition-colors flex items-center gap-2 border-b border-white/5 pb-1"
          >
            Explore all repositories <i className="fas fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 col-span-1 md:col-span-3 lg:col-span-4">
        <ProjectCard
          title="CodeMentor AI"
          description="แพลตฟอร์มการเรียนรู้ที่ใช้ AI ช่วยตรวจงานเขียนโปรแกรม ให้คำแนะนำแบบเรียลไทม์และระบบวิเคราะห์ผลสำหรับผู้สอน"
          tags={["Next.js", "TypeScript", "Prisma", "AI"]}
          github="https://github.com/nattapong2005/CodeMentor-AI-Project"
          role="Full Stack"
        />

        <ProjectCard
          title="Game Account Store"
          description="ร้านค้าออนไลน์สำหรับสินค้าดิจิทัลและไอดีเกม พัฒนาด้วย PHP พร้อมระบบจัดการหลังบ้านและตะกร้าสินค้า"
          tags={["PHP", "MySQL", "UI/UX"]}
          github="https://github.com/nattapong2005/simple-php-game-account-store"
          role="Full Stack"
        />

        <ProjectCard
          title="Cafe & Bakery UI"
          description="ส่วนติดต่อผู้ใช้สไตล์มินิมอลสำหรับธุรกิจคาเฟ่ เน้นความสวยงามของ Typography และการโต้ตอบที่ลื่นไหล"
          tags={["JavaScript", "Tailwind"]}
          github="https://github.com/nattapong2005/cafe-nattapong"
          role="Frontend"
        />

        <ProjectCard
          title="Smart Farm Dashboard"
          description="ระบบติดตามข้อมูลเซนเซอร์ IoT แบบเรียลไทม์ แสดงผลสภาพแวดล้อมผ่านแดชบอร์ดที่สะอาดตาและเข้าใจง่าย"
          tags={["React", "MQTT", "IoT"]}
          role="IoT Designer"
          isMockup={true}
        />

        <ProjectCard
          title="Hospital Queue App"
          description="แอปพลิเคชันจองคิวโรงพยาบาล ออกแบบเพื่อลดความซับซ้อนในการนัดหมายและติดตามลำดับคิว"
          tags={["Figma", "Accessibility"]}
          role="UI/UX"
          isMockup={true}
        />
      </div>
    </>
  );
};

export default Projects;
