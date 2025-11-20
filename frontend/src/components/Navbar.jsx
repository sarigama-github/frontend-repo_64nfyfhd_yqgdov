import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="text-lg font-semibold tracking-wide">
            <span className="text-white">Abdullah</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">.Talib</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <button key={s.id} onClick={() => handleNav(s.id)} className="text-sm text-gray-300 hover:text-white transition-colors">
                {s.label}
              </button>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm shadow-lg shadow-cyan-500/20 hover:shadow-violet-600/20 transition">
              Hire Me
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {sections.map((s) => (
                <button key={s.id} onClick={() => handleNav(s.id)} className="w-full text-left text-gray-300 hover:text-white px-2 py-2 rounded-md hover:bg-white/5">
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
