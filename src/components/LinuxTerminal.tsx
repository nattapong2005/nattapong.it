"use client";

import { useState, useEffect } from "react";

const LinuxTerminal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState<{ type: "cmd" | "out"; text: string }[]>([
    { type: "out", text: "Welcome to Nattapong's Linux Shell v2.4.0-release" },
    { type: "out", text: "Type 'help' to see available commands." },
  ]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementById("terminal-input")?.focus();
    }
  }, [isOpen]);


  const commandList = [
    { cmd: "whoami", output: "nattapong - Junior Dev / IT Student" },
    { cmd: "neofetch", output: "OS: Ubuntu 24.04 LTS / HOST: Nattapong-Portfolio / KERNEL: 6.8.0 / SHELL: bash 5.2" },
    { cmd: "ls", output: "expertise/  projects/  about_linux.txt" },
    { cmd: "ls expertise/", output: "web-dev backend iot networking linux-sysadmin" },
    { cmd: "cat about_linux.txt", output: "I love open source. Using Ubuntu & Debian for development." },
    { cmd: "uptime", output: "up 20 years, 1 user, load average: 0.05, 0.01, 0.00" },
    { cmd: "help", output: " > WHOAMI   : Identifier for current user profile\n  > NEOFETCH : Engineering system & hardware report\n  > LS       : Memory-mapped directory listing\n  > CAT      : Stream output from file buffers\n  > UPTIME   : Total active session cycle count\n  > CLEAR    : Flush terminal cache & clear screen\n  > HELP     : Access system instruction manual\n" },
  ];

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cleanInput = userInput.trim().toLowerCase();
      
      if (cleanInput === "clear") {
        setHistory([]);
        setUserInput("");
        return;
      }

      if (cleanInput === "") {
        setHistory(prev => [...prev, { type: "cmd", text: "" }]);
        return;
      }

      const found = commandList.find((c) => c.cmd === cleanInput);
      const newEntries: { type: "cmd" | "out"; text: string }[] = [
        { type: "cmd", text: cleanInput }
      ];

      if (found) {
        newEntries.push({ type: "out", text: found.output });
      } else {
        newEntries.push({ type: "out", text: `bash: ${cleanInput}: command not found` });
      }

      setHistory(prev => [...prev, ...newEntries]);
      setUserInput("");
    }
  };

  const scrollToEnd = () => {
    const el = document.getElementById("terminal-content");
    if (el) el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    scrollToEnd();
  }, [history]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="w-full max-w-4xl h-[500px] overflow-hidden flex flex-col bg-black/90 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] font-mono rounded-xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <i className="fab fa-ubuntu text-[#E95420]"></i> Nattapong Server
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>

        {/* Terminal Content */}
        <div 
          id="terminal-content"
          className="p-6 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
          onClick={() => document.getElementById("terminal-input")?.focus()}
        >
          <div className="flex flex-col gap-1.5 text-sm sm:text-base">
            {history.map((entry, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                {entry.type === "cmd" ? (
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">root@nattapong:~$</span>
                    <span className="text-slate-200">{entry.text}</span>
                  </div>
                ) : (
                  <div className="text-emerald-500/90 ml-0 pl-0 sm:pl-4 mb-2 leading-relaxed whitespace-pre-wrap">
                    {entry.text}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold shrink-0">root@nattapong:~$</span>
              <input
                id="terminal-input"
                type="text"
                className="bg-transparent border-none outline-none text-slate-200 w-full p-0 font-mono caret-primary"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleCommand}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
            </div>
          </div>
        </div>

        {/* Terminal Footer Dashboard */}
        <div className="bg-white/5 px-6 py-4 border-t border-white/5 font-mono text-[10px] sm:text-[11px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 font-bold uppercase tracking-tight">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center mr-2">
                <span>CPU Usage</span>
                <span className="text-emerald-500">12.4%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden flex">
                 <div className="w-[12%] bg-emerald-500 h-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center mr-2">
                <span>Memory</span>
                <span className="text-primary">42.1%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden flex">
                 <div className="w-[42%] bg-primary h-full"></div>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-1.5">
              <div className="flex justify-between items-center mr-2">
                <span>Network</span>
                <span className="text-secondary">↑1.2MB ↓4.5MB</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden flex">
                 <div className="w-[65%] bg-secondary h-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-right">
              <div className="text-slate-500">IP: 127.0.0.1</div>
              <div className="flex items-center justify-end gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-emerald-500/80">SERVER ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinuxTerminal;
