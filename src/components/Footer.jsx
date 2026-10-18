import { Mail, Phone, MapPin, Code, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-slate-900 bg-slate-950 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">open to work</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Ready for new challenges!</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-md">
              If you are looking for a motivated Junior developer or intern — feel free to reach out to me in a convenient way.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a 
              href="mailto:nazardanilenko22804@gmail.com" 
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>

            <a 
              href="https://t.me/DNjuni" 
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-sky-400" /> Telegram
            </a> 

            <a 
              href="tel:+37253833738" 
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" /> +372 53833738
            </a>
            
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 border-t border-slate-900 pt-8">
          <div>© 2026 Nazar Danylenko • Junior Software / DevOps Engineer</div>
          <div className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Tallinn, Estonia
          </div>
        </div>
      </div>
    </footer>
  );
}