import { Terminal, Code, ExternalLink, Cpu, Wrench } from 'lucide-react';

export default function Projects() {
  const petProjects = [
    {
     title: "Personal Portfolio Website",
     language: "JavaScript",
     category: "Web Development / Portfolio",
     description: "A personal portfolio website designed to showcase my projects, certificates, educational background, and professional profile. It provides an intuitive interface for exploring my work, accessing my GitHub profile, finding contact information, and learning more about my skills and experience.",
     techStack: ["Vite", "React", "Tailwind CSS", "JavaScript"],
     githubUrl: "https://github.com/nazardanylenkodev/Portfolio"
    }
   
  ];

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto border-t border-slate-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-sky-400 font-mono text-xs uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            engineering projects
          </div>
          <h2 className="text-3xl font-bold text-slate-100">Pet Projects & Scripts</h2>
        </div>
        <p className="text-slate-400 text-sm mt-2 md:mt-0 font-mono">
          Practical verification of knowledge and scripting
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {petProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/50 transition-all font-sans"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {project.language}
                </span>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <Code className="w-4 h-4" />
                </a>
              </div>

              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{project.category}</span>
              <h3 className="text-lg font-bold text-slate-100 mt-1 mb-3">{project.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-sans">{project.description}</p>
            </div>

            <div className="pt-4 border-t border-slate-800/60">
              <div className="text-[11px] font-mono text-slate-400 mb-2">Used:</div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-950 text-sky-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}