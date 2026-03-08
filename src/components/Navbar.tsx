import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "โปรไฟล์", href: "#profile" },
    { name: "การศึกษา", href: "#education" },
    { name: "ทักษะ", href: "#skills" },
    { name: "กิจกรรม", href: "#activities" },
    { name: "ผลงาน", href: "#projects" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-dark/60 border-b border-white/5 py-4' : 'bg-transparent py-6'} mx-auto`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div
          className="text-lg font-bold flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <i className="fas fa-terminal text-xs"></i>
          </div>
          <span className="hidden sm:inline text-white">
            Nattapong<span className="text-primary">.IT</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:azzzx30089@gmail.com"
            className="hidden sm:flex px-6 py-2 rounded-full border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-colors"
          >
            Say Hello
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 font-medium py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:azzzx30089@gmail.com"
            className="mt-2 w-full py-3 rounded-xl bg-primary text-center text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            ติดต่อสอบถาม
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
