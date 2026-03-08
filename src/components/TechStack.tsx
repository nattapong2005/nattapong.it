"use client";

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      techs: [
        { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "TypeScript", icon: "fab fa-js", color: "#3178C6" },
        { name: "PHP", icon: "fab fa-php", color: "#777BB4" },
        { name: "Java", icon: "fab fa-java", color: "#007396" },
        { name: "C++", icon: "fas fa-code", color: "#00599C" },
        { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      ],
    },
    {
      title: "Frontend",
      icon: "fas fa-window-maximize",
      techs: [
        { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
        { name: "Next.js", icon: "fas fa-n", color: "#FFFFFF" },
        { name: "Vue.js", icon: "fab fa-vuejs", color: "#4FC08D" },
        { name: "Tailwind", icon: "fas fa-wind", color: "#06B6D4" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
      ],
    },
    {
      title: "Backend & Database",
      icon: "fas fa-server",
      techs: [
        { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
        { name: "Express", icon: "fas fa-server", color: "#A9A9A9" },
        { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
        { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248" },
        { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
      ],
    },
    {
      title: "Tools & Design",
      icon: "fas fa-tools",
      techs: [
        { name: "Git", icon: "fab fa-github", color: "#F05032" },
        { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
        { name: "Photoshop", icon: "fas fa-image", color: "#31A8FF" },
        { name: "Vercel", icon: "fas fa-caret-up", color: "#FFFFFF" },
        { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      ],
    },
  ];

  return (
    <div className="bento-card slide-up col-span-1 md:col-span-3 lg:col-span-4 p-10 bg-transparent/20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
          <i className="fas fa-layer-group text-sm"></i>
        </div>
        <h3 className="text-lg font-medium text-white">Technologies & Tools</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {categories.map((category) => (
          <div key={category.title}>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              {category.title}
            </h4>
            <div className="flex flex-col gap-4">
              {category.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                    <i
                      className={`${tech.icon} text-sm`}
                      style={{ color: tech.color }}
                    ></i>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
