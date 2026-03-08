"use client";
import { useState, useEffect } from "react";

const Hero = () => {
  const titles = ["Web Developer", "IT Student", "Tech Enthusiast", "Networking"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(100);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <div
      id="profile"
      className="bento-card slide-up col-span-1 md:col-span-3 lg:col-span-4 p-10 lg:p-24 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden mb-6 group bg-transparent/20"
    >
      <div className="flex-1 z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Available for work
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight text-white">
          สวัสดีครับ, ผม <br />
          <span className="text-gradient">
            นัฐพงษ์ นาคอ่วม
          </span>
        </h1>

        <div className="h-8 mb-8">
          <p className="text-primary font-mono text-lg font-medium opacity-90">
            {currentText}
            <span className="animate-pulse ml-1 text-white opacity-50">|</span>
          </p>
        </div>

        <p className="text-slate-400 text-lg lg:text-xl max-w-2xl leading-relaxed mb-12 mx-auto lg:mx-0 opacity-80">
          นักพัฒนารุ่นใหม่วัย 20 ปี ผู้หลงใหลในการแก้ปัญหาด้วยเทคโนโลยี และมุ่งมั่นที่จะพัฒนาซอฟต์แวร์ที่ตอบโจทย์ผู้ใช้งานจริง
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
          <a
            href="#projects"
            className="px-10 py-4 rounded-full bg-white text-dark font-bold transition-all hover:bg-slate-200 active:scale-95 text-sm"
          >
            ผลงานของผม
          </a>
        </div>
      </div>

      <div className="mt-20 lg:mt-0 relative z-10">
        <div className="relative group">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-white/5 overflow-hidden shadow-2xl bg-dark/40 p-2 relative">
            <img
              src="/profile.png"
              alt="Nattapong Nakaom"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
