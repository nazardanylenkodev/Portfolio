import { Wrench, Music, Car, Activity, UserCheck } from 'lucide-react';

export default function AboutSkills() {
  const softSkills = [
    "Fast Learner", "Analytical Thinking", "Problem Solving", "Communication", "Responsibility",
    "Discipline", "Honesty & Transparency", "Team Player"
  ];

  return (
    <section id="about" className="py-16 px-4 max-w-6xl mx-auto border-t border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Головна картка: Особисті якості та підхід */}
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
          <div className="inline-flex items-center gap-1.5 text-sky-400 font-mono text-xs uppercase tracking-wider mb-4">
            <UserCheck className="w-4 h-4" />
            Engineering Approach
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            About Me and My Work Philosophy
          </h2>

          <div className="space-y-4 text-slate-400 text-sm leading-relaxed font-sans mb-8">
            <p>
              I am a 4th-year student at KhNURE with a deep passion for system computing, automation, and engineering tasks. Since I am at the beginning of my career, my main asset is a strong foundation in fundamental disciplines (OOP, algorithms, parallel computing CUDA, databases) and the speed of learning new tools.
            </p>
            <p>
              I believe that honesty, responsibility, and communication are the main pillars of productive work in a team.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Personal (Soft Skills):</div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs">
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Захоплення (Bento Cards) */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold mb-2">
              <Car className="w-4 h-4" /> Cars & Automotive
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              I have a deep understanding of the technical aspects and mechanics of cars. I regularly help friends with car selection, diagnostics, and repair.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold mb-2">
              <Music className="w-4 h-4" /> Music (6 years)
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              Successfully completed music school in 6 years instead of 9 (percussion instruments and piano), which developed a sense of rhythm, focus, and discipline.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold mb-2">
              <Activity className="w-4 h-4" /> Sports
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              I was involved in individual and team sports. This developed endurance, self-control, and the ability to work in a team.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}