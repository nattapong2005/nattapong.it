"use client";

import { useEffect } from "react";

const AmbientGlow = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const glow1 = document.getElementById("glow-1");
      const glow2 = document.getElementById("glow-2");
      const glow3 = document.getElementById("glow-3");

      if (glow1) glow1.style.transform = `translateY(${scrolled * 0.2}px)`;
      if (glow2)
        glow2.style.transform = `translateY(${scrolled * 0.1}px) translateX(${
          scrolled * 0.05
        }px)`;
      if (glow3) glow3.style.transform = `translateY(${scrolled * -0.15}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        id="glow-1"
        className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px] will-change-transform"
      ></div>
      <div
        id="glow-2"
        className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] rounded-full bg-fuchsia-600/15 blur-[100px] will-change-transform"
      ></div>
      <div
        id="glow-3"
        className="absolute -bottom-[20%] left-[30%] w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px] will-change-transform"
      ></div>
    </div>
  );
};

export default AmbientGlow;
