"use client";

const Certifications = () => {
  const certs = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: "fab fa-free-code-camp",
    },
    {
      title: "JS Algorithms",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: "fab fa-js-square",
    },
    {
      title: "CS50 Computer Science",
      issuer: "HarvardX",
      date: "2023",
      icon: "fas fa-university",
    },
    {
      title: "AWS Practitioner",
      issuer: "Amazon AWS",
      date: "2024",
      icon: "fab fa-aws",
    },
  ];

  return (
    <div className="bento-card slide-up col-span-1 md:col-span-3 lg:col-span-4 p-10 bg-transparent/20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
          <i className="fas fa-certificate text-sm"></i>
        </div>
        <h3 className="text-lg font-medium text-white">Certifications</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert) => (
          <div
            key={cert.title}
            className="group p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className={`${cert.icon} text-xl text-slate-500 group-hover:text-primary transition-colors`}></i>
            </div>
            <h4 className="text-sm font-bold text-slate-200 mb-1 group-hover:text-white transition-colors">
              {cert.title}
            </h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">
              {cert.issuer} • {cert.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
