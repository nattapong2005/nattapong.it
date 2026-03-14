import { useState, useEffect } from "react";

const Navbar = ({ onOpenTerminal }: { onOpenTerminal: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState("#profile");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active segment based on scroll position
      const sections = ["profile", "education", "skills", "activities", "projects"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSegment(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Profile", href: "#profile", icon: "fa-user-ninja" },
    { name: "Education", href: "#education", icon: "fa-book-open" },
    { name: "Skills", href: "#skills", icon: "fa-bolt" },
    { name: "Activities", href: "#activities", icon: "fa-flag" },
    { name: "Projects", href: "#projects", icon: "fa-fire" },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-[100] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'top-6' : 'top-0'
      }`}>
      <div className={`mx-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
        ? 'max-w-4xl px-4 sm:px-6'
        : 'max-w-7xl px-8 sm:px-12'
        }`}>
        <div className={`relative flex items-center justify-between transition-all duration-700 ${scrolled
          ? 'bg-dark/40 backdrop-blur-3xl border border-white/10 rounded-2xl py-2.5 px-3 pr-4 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-10 px-0 border-b border-transparent'
          }`}>
          {/* Logo Section */}
          <div
            className="flex items-center gap-4 cursor-pointer group select-none relative"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`w-10 h-10 rounded-lg bg-white text-dark flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] ${scrolled ? 'scale-90' : 'scale-100'}`}>
                <i className="fas fa-terminal text-sm z-10 transition-transform group-hover:scale-125 duration-500"></i>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-tighter text-white leading-none">
                NATTAPONG<span className="text-primary">.IT</span>
              </h1>
              {!scrolled && (
                <div className="flex items-center gap-2 mt-1.5 overflow-hidden">
                  <div className="h-[1px] w-4 bg-primary/50"></div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-bold whitespace-nowrap animate-fade-in">
                    Creative Developer
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* HUD Menu - Desktop */}
          <div className={`hidden lg:flex items-center gap-1 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-100'}`}>
            <div className="bg-white/5 p-1 rounded-full border border-white/5 flex gap-1 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${activeSegment === link.href ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                >
                  {activeSegment === link.href && (
                    <span className="absolute inset-0 bg-white/10 rounded-full animate-fade-in shadow-[0_0_15px_rgba(255,255,255,0.05)]"></span>
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Linux Terminal Trigger - Desktop */}
            <button
              onClick={onOpenTerminal}
              className={`group flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] ${scrolled ? 'w-10 h-10' : 'px-5 py-3 gap-3 text-[10px]'}`}
              title="Open Terminal"
            >
              <i className="fas fa-terminal"></i>
              {!scrolled && <span className="font-bold uppercase tracking-widest">Shell</span>}
            </button>


            {/* Futuristic Menu Button */}
            <button
              className={`lg:hidden w-11 h-11 flex flex-col items-center justify-center rounded-xl transition-all duration-500 border border-white/10 ${isOpen ? 'bg-primary border-primary shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'bg-white/5 hover:bg-white/10'
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="space-y-1.5 flex flex-col items-end">
                <span className={`h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? 'w-5 translate-y-2 rotate-45' : 'w-5'}`}></span>
                <span className={`h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-3'}`}></span>
                <span className={`h-0.5 bg-white rounded-full transition-all duration-500 ${isOpen ? 'w-5 -translate-y-2 -rotate-45' : 'w-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Glass Panel */}
      <div className={`lg:hidden fixed inset-0 z-[90] transition-all duration-700 ${isOpen ? 'visible' : 'invisible'
        }`}>
        <div className={`absolute inset-0 bg-dark/60 backdrop-blur-md transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'
          }`} onClick={() => setIsOpen(false)}></div>

        <div className={`absolute top-24 right-4 left-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}>
          <div className="bg-surface/90 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>

            <div className="grid gap-2 relative z-10">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-5 p-5 rounded-xl hover:bg-white/5 transition-all group"
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500">
                    <i className={`fas ${link.icon} text-lg`}></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white uppercase tracking-tight">{link.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Go to Section</span>
                  </div>
                  <i className="fas fa-arrow-right ml-auto text-slate-700 group-hover:text-primary transition-all group-hover:translate-x-1"></i>
                </a>
              ))}

              <div className="h-[1px] bg-white/5 my-4"></div>

              {/* Terminal Trigger - Mobile */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenTerminal();
                }}
                className="w-full flex items-center gap-5 p-5 rounded-xl bg-primary/10 border border-primary/20 transition-all group mb-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <i className="fas fa-terminal text-lg"></i>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-lg font-bold text-white uppercase tracking-tight">Launch Terminal</span>
                  <span className="text-[10px] text-primary/70 uppercase tracking-widest font-bold">Interactive Shell</span>
                </div>
                <i className="fas fa-chevron-right ml-auto text-primary"></i>
              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
