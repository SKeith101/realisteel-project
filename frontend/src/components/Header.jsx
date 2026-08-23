import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/mock';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z" stroke="#0a0a0a" strokeWidth="2.5" fill="none"/>
            <circle cx="16" cy="16" r="3.5" fill="#0a0a0a"/>
          </svg>
          <span className="text-[22px] font-semibold tracking-tight text-black">Dayos</span>
        </a>

        {/* Pill nav */}
        <nav className="hidden lg:flex items-center bg-white/70 backdrop-blur-md rounded-full px-2 py-1.5 shadow-sm border border-black/5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-2 rounded-full text-[15px] font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-[15px] font-medium hover:bg-neutral-800 transition-colors"
          >
            Schedule a Demo
          </a>
        </div>

        {/* Mobile */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-6 mt-3 bg-white rounded-2xl shadow-lg border border-black/5 p-4">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block px-4 py-3 text-neutral-800 hover:bg-neutral-50 rounded-lg" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#demo" className="block mt-2 text-center bg-black text-white px-6 py-3 rounded-full font-medium">Schedule a Demo</a>
        </div>
      )}
    </header>
  );
}
