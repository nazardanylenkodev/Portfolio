import { Download, Mail, ArrowUpRight, GraduationCap, Globe2 } from 'lucide-react';

export default function Hero() {
  const languages = [
    { name: "Ukrainian", level: "C2 (Native)" },
    { name: "Russian", level: "C2" },
    { name: "English", level: "B2 (Working)" },
    { name: "Estonian", level: "A2" },
  ];

  return (
    <section className="pt-28 pb-16 px-4 max-w-6xl mx-auto">
      {/* Bento Grid Header / Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Головна картка позиціонування (Займає 2 колонки) */}
        <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Open to Junior / Trainee Positions
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 font-sans leading-tight mb-4">
              Nazar Danylenko 
            </h1>
            <p className="text-lg sm:text-xl font-mono text-sky-400 font-medium mb-6">
              Future Software & DevOps Engineer
            </p>

            <p className="text-slate-400 text-base leading-relaxed max-w-2xl font-sans mb-8">
              Student 4th year of NURE with a solid foundation in algorithms, object-oriented programming and automation. Passionate about development, high-performance computing and infrastructure solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a 
              href="mailto:nazardanilenko22804@gmail.com" 
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a 
              href="/CV_Nazar_Danylenko.pdf" 
              download 
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-sky-400" /> Download CV
            </a>
          </div>
        </div>

        {/* Права картка: Освіта та Мови */}
        <div className="flex flex-col gap-6">
          {/* Освіта */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                Education (Bachelor)
              </div>
              <h3 className="text-base font-bold text-slate-100">
                Kharkiv National University of Radio Electronics (NURE)
              </h3>
              <p className="text-xs text-sky-400 font-mono mt-1">
                4th year • Specialization «Software Engineering»
              </p>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed font-sans">
              Focus: Software Architecture, Algorithms and Data Structures, OOP, Databases, Networks.
            </p>
          </div>

          {/* Мови */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider mb-4">
              <Globe2 className="w-4 h-4" />
              Languages
            </div>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              {languages.map((lang, idx) => (
                <div key={idx} className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/50">
                  <div className="text-slate-200 font-semibold">{lang.name}</div>
                  <div className="text-sky-400/80 text-[11px] mt-0.5">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}