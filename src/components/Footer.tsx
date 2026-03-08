"use client";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-xl font-bold mb-2">
            Nattapong<span className="text-primary">.IT</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Nattapong Nakaom. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="mailto:azzzx30089@gmail.com"
            className="text-slate-400 hover:text-white transition group border border-white/5 w-12 h-12 flex items-center justify-center rounded-full bg-surface"
          >
            <i className="fas fa-envelope text-lg group-hover:scale-110 transition-transform"></i>
          </a>
          <a
            href="https://github.com/nattapong2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition group border border-white/5 w-12 h-12 flex items-center justify-center rounded-full bg-surface"
          >
            <i className="fab fa-github text-lg group-hover:scale-110 transition-transform"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
