import { useState } from 'react';
import { Menu, X, Terminal, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 z-50 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-sky-400 hover:text-sky-300 transition-colors">
          <Terminal className="w-5 h-5 text-sky-400" />
          <span>nazar_danylenko.dev$</span>
        </a>

        {/* Локація */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Tallinn, Estonia</span>
        </div>

        {/* Десктопне меню */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#certificates" className="hover:text-sky-400 transition-colors">Certificates</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all shadow-md shadow-sky-500/20">
            Contact
          </a>
        </nav>

        {/* Мобільна кнопка */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Мобільне меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 flex flex-col gap-4 text-sm font-sans">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-sky-400 py-1">About</a>
          <a href="#certificates" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-sky-400 py-1">Certificates</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-sky-400 py-1">Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-2.5 rounded-lg bg-sky-500 text-slate-950 font-bold text-center">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}