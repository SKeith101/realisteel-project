import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, WA_LINK } from '../data/mock';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <path d="M6 24 L16 4 L26 24 Z" fill="#0a0a0a"/>
            <path d="M11 22 L16 12 L21 22 Z" fill="#f5d949"/>
          </svg>
          <span className="text-[22px] font-bold tracking-tight text-black">Realisteel</span>
        </a>

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

        <div className="hidden lg:block">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-[15px] font-medium hover:bg-neutral-800 transition-colors"
          >
            <MessageCircle size={16}/>
            Konsultasi Gratis
          </a>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-3 bg-white rounded-2xl shadow-lg border border-black/5 p-4"
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block px-4 py-3 text-neutral-800 hover:bg-neutral-50 rounded-lg" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mt-2 bg-black text-white px-6 py-3 rounded-full font-medium">
              <MessageCircle size={16}/> Konsultasi Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
