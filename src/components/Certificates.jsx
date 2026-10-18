import { useState } from 'react';
import { ShieldCheck, Clock, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Business Model Innovation",
      issuer: "Udemy",
      duration: "5.5 hours",
      date: "June 2026",
      tags: ["Business", "Architecture", "Strategy"],
      image: "/certificates/business.png"
    },
    {
      title: "Mastering GPU Parallel Programming with CUDA: Hardware & Software",
      issuer: "Udemy",
      duration: "23 hours",
      date: "December 2025",
      tags: ["C++", "CUDA", "Parallel Computing", "GPU"],
      image: "/certificates/cuda.png"
    },
    {
      title: "Java Programming Elementary",
      issuer: "IT Univer",
      duration: "68 hours",
      date: "May 2023",
      tags: ["Java", "OOP", "Data Structures"],
      image: "/certificates/java.jpg"
    },
    {
      title: "Web Programming Intermediate",
      issuer: "IT Univer",
      duration: "64 hours",
      date: "June 2022",
      tags: ["HTML/CSS", "JavaScript", "Web Fundamentals"],
      image: "/certificates/web.jpg"
    },
    {
      title: "Python Intermediate",
      issuer: "IT Univer",
      duration: "68 hours",
      date: "May 2021",
      tags: ["Python", "Algorithms", "Automation"],
      image: "/certificates/python.jpg"
    },
    {
      title: "Python Elementary",
      issuer: "IT Univer",
      duration: "68 hours",
      date: "May 2020",
      tags: ["Python", "Syntax", "Logic"],
      image: "/certificates/pythonE.jpg"
    },
    {
      title: "Game Design",
      issuer: "IT Univer",
      duration: "136 hours",
      date: "May 2019",
      tags: ["Game Logic", "Level Design", "UX/UI"],
      image: "/certificates/game.jpg"
    },
    {
      title: "DevOps Engineer",
      issuer: "GAMMA INTELLIGENCE",
      duration: "200 hours",
      date: "studying",
      tags: ["Linux", "Architecture", "CICD"],
      image: "/certificates/devops.png"
    }
  ];

  return (
    <section id="certificates" className="py-16 px-4 max-w-6xl mx-auto border-t border-slate-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-sky-400 font-mono text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            Certificates & Qualifications
          </div>
          <h2 className="text-3xl font-bold text-slate-100">Certificates & Qualifications</h2>
        </div>
        <p className="text-slate-400 text-sm mt-2 md:mt-0 font-mono">
          Click on a card to view the certificate
        </p>
      </div>

      {/* Bento Grid з сертифікатами */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(cert)}
            className="bg-slate-900/60 border border-slate-800 hover:border-sky-500/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-sky-400 font-semibold border border-slate-700/50">
                  {cert.issuer}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" /> {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition-colors mb-3 leading-snug flex items-start justify-between gap-2">
                <span>{cert.title}</span>
                <ZoomIn className="w-4 h-4 text-slate-500 group-hover:text-sky-400 shrink-0 mt-1 transition-colors" />
              </h3>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Duration: {cert.duration}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальне вікно перегляду зображення сертифіката */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 max-w-4xl w-full relative flex flex-col items-center max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закриття */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80 border border-slate-700/50 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full text-left mb-4 pr-10 font-mono">
              <span className="text-xs text-sky-400 font-semibold">{selectedImage.issuer} • {selectedImage.date}</span>
              <h3 className="text-lg font-bold text-slate-100 mt-0.5">{selectedImage.title}</h3>
            </div>

            {/* Картинка сертифіката */}
            <div className="w-full flex-1 overflow-auto rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-center p-2">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/800x600/0f172a/38bdf8?text=Certificate+Preview";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}