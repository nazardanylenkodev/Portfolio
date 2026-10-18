import Header from './components/Header';
import Hero from './components/Hero';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import AboutSkills from './components/AboutSkills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <Certificates />
        <Projects />
        <AboutSkills />
      </main>
      <Footer />
    </div>
  );
}