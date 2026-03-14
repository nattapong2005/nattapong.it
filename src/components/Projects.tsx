"use client";

import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  fork: boolean;
  readme?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  github,
  role,
  readme,
  isMockup = false,
}: {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  role: string;
  readme?: string;
  isMockup?: boolean;
}) => {
  // Use README as description if available, otherwise fallback to repo description
  const displayDescription = readme || description || "โปรเจคบน GitHub พัฒนาด้วยความมุ่งมั่นและใส่ใจในรายละเอียด";

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
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-4">
          {displayDescription}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-bold tracking-widest text-slate-500"
              >
                # {tag}
              </span>
            ))
          ) : (
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-800">
              # NoTags
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="bento-card col-span-1 md:col-span-2 p-10 flex flex-col bg-white/5 animate-pulse min-h-[400px]">
    <div className="w-20 h-3 bg-white/10 rounded mb-6"></div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex justify-between mb-6">
        <div className="w-48 h-7 bg-white/10 rounded"></div>
        <div className="w-6 h-6 bg-white/10 rounded-full"></div>
      </div>
      <div className="space-y-3 mb-8 flex-grow">
        <div className="w-full h-3 bg-white/10 rounded"></div>
        <div className="w-5/6 h-3 bg-white/10 rounded"></div>
        <div className="w-4/6 h-3 bg-white/10 rounded"></div>
      </div>
      <div className="flex gap-4 mt-auto pt-4">
        <div className="w-16 h-3 bg-white/10 rounded"></div>
        <div className="w-16 h-3 bg-white/10 rounded"></div>
        <div className="w-16 h-3 bg-white/10 rounded"></div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/nattapong2005/repos?sort=updated&per_page=10");
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const filtered = data
            .filter((repo: Repo) => !repo.fork)
            .slice(0, 4); // Limit to 4 to avoid excessive README fetches

          // Fetch READMEs for each filtered repo
          const reposWithReadme = await Promise.all(
            filtered.map(async (repo: Repo) => {
              try {
                // Try to get README from GitHub content API (returns base64)
                const readmeRes = await fetch(`https://api.github.com/repos/nattapong2005/${repo.name}/readme`);
                if (readmeRes.ok) {
                  const readmeData = await readmeRes.json();
                  const decodedContent = decodeURIComponent(
                    atob(readmeData.content.replace(/\n/g, ""))
                      .split("")
                      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                      .join("")
                  );
                  
                  // Simple cleaning of markdown: remove headers, bold, links
                  const cleanContent = decodedContent
                    .replace(/#+\s+/g, "") // remove headers
                    .replace(/!\[.*?\]\(.*?\)/g, "") // remove images
                    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // remove links but keep text
                    .replace(/(\*\*|__)(.*?)\1/g, "$2") // remove bold
                    .replace(/`{1,3}[\s\S]*?`{1,3}/g, "") // remove code blocks (compatible with older ES)
                    .replace(/\n+/g, " ") // replace newlines with space
                    .trim()
                    .slice(0, 200); // Take first 200 chars

                  return { ...repo, readme: cleanContent + "..." };
                }
              } catch (e) {
                console.error(`Error fetching README for ${repo.name}:`, e);
              }
              return repo;
            })
          );

          setRepos(reposWithReadme);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Sync intersection observer after loading completes
  useEffect(() => {
    if (!loading) {
      const elements = document.querySelectorAll("#projects-grid .slide-up");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      elements.forEach((el, index) => {
        (el as HTMLElement).style.animationDelay = `${(index % 4) * 150}ms`;
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [loading, repos]);

  // Format repo name: my-project-name -> My Project Name
  const formatName = (name: string) => {
    return name
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <div
        id="projects"
        className="slide-up col-span-1 md:col-span-3 lg:col-span-4 mt-32 mb-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">ผลงานของผม</span>
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
            ดูผลงานทั้งหมด <i className="fas fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>

      <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-4 gap-6 col-span-1 md:col-span-3 lg:col-span-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={formatName(repo.name)}
              description={repo.description}
              readme={repo.readme}
              tags={[...repo.topics, repo.language].filter(Boolean).slice(0, 4)}
              github={repo.html_url}
              role={repo.language || "Project"}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Projects;
