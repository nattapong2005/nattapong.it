"use client";

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      techs: [
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "TypeScript", icon: "fab fa-js" },
        { name: "PHP", icon: "fab fa-php" },
        { name: "Java", icon: "fab fa-java" },
        { name: "C++", icon: "fas fa-code" },
        { name: "Python", icon: "fab fa-python" },
      ],
    },
    {
      title: "Frontend",
      icon: "fas fa-window-maximize",
      techs: [
        { name: "React", icon: "fab fa-react" },
        { name: "Next.js", icon: "fas fa-n" },
        { name: "Vue.js", icon: "fab fa-vuejs" },
        { name: "Tailwind", icon: "fas fa-wind" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
      ],
    },
    {
      title: "Backend & Database",
      icon: "fas fa-server",
      techs: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express", icon: "fas fa-server" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-leaf" },
        { name: "Firebase", icon: "fas fa-fire" },
      ],
    },
    {
      title: "Tools & Design",
      icon: "fas fa-tools",
      techs: [
        { name: "Git", icon: "fab fa-github" },
        { name: "Figma", icon: "fab fa-figma" },
        { name: "Photoshop", icon: "fas fa-image" },
        { name: "Vercel", icon: "fas fa-caret-up" },
        { name: "Docker", icon: "fab fa-docker" },
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
            <div className="flex flex-col gap-3">
              {category.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <i className={`${tech.icon} text-slate-600 group-hover:text-primary transition-colors text-sm w-5 text-center`}></i>
                  <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
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
