import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { navItems, WA_LINK } from '../data/mock';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lenis = useLenis((l) => {
    setScrolled(l.scroll > 20);
  });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (!href || href === '#' || href === '#hero') {
      lenis?.scrollTo(0, { duration: 1.2 });
    } else {
      const el = document.querySelector(href);
      if (el) {
        lenis?.scrollTo(el, { offset: -80, duration: 1.2 });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center shrink-0">
          <img
            src="/background/logo-realisteeel.png"
            alt="Realisteel"
            className="h-9 lg:h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center bg-white/70 backdrop-blur-md rounded-full px-2 py-1.5 shadow-sm border border-black/5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
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
            className="inline-flex items-center gap-2 bg-[#C62828] text-white px-6 py-3 rounded-full text-[15px] font-medium hover:bg-neutral-800 transition-colors"
          >
            <WhatsAppIcon size={16} className="text-white"/>
            Konsultasi Gratis
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-full border transition-colors ${
            scrolled
              ? 'bg-neutral-100 border-black/10 text-black'
              : 'bg-black/20 backdrop-blur-sm border-white/20 text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 text-neutral-800 hover:bg-neutral-50 rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mt-2 bg-[#C62828] text-white px-6 py-3 rounded-full font-medium">
              <WhatsAppIcon size={16} className="text-white"/> Konsultasi Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}