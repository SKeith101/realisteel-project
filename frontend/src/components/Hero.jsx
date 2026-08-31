import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { WA_LINK } from '../data/mock';
import WhatsAppIcon from './WhatsAppIcon';

const word = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.08 },
  }),
};

export default function Hero() {
  const lenis = useLenis();

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    lenis?.scrollTo('#portofolio', { offset: -80, duration: 1.2 });
  };
  return (
    <section id="hero" className="relative pt-36 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/background/background-hero.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,40,40,0.25),transparent_32%)]" />

      <div className="relative z-10 mx-auto px-6 lg:px-10 max-w-[1600px]">
        <div className="max-w-4xl py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-white/90 mb-8 shadow-lg shadow-black/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#C62828] animate-pulse"/>
            Kualitas & Kepercayaan
          </motion.div>

          <h1 className="text-display text-white text-[52px] sm:text-[84px] lg:text-[110px] xl:text-[132px] uppercase leading-[0.88] tracking-[-0.05em]">
            {['Build', 'Strong', 'Last', 'Strong',].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className={`block ${i >= 3 ? 'italic font-medium text-[#C62828]' : 'text-white'}`}
                  style={i >= 3 ? { fontFamily: 'Archivo, serif' } : {}}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 max-w-xl text-[17px] leading-[1.6] text-white/80"
          >
            Realisteel membantu rumah, ruko, dan bisnis Anda mendapatkan struktur baja yang aman, kokoh, dan rapi—dengan proses yang jelas, cepat, dan sesuai kebutuhan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-[#C62828] text-white px-7 py-4 rounded-full font-medium hover:bg-[#8d1f1f] transition-colors shadow-lg shadow-black/20">
              <WhatsAppIcon size={18} className="text-white"/>
              Konsultasi Gratis via WhatsApp
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>
            </a>
            <a href="#portofolio" onClick={handlePortfolioClick} className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white rounded-full px-7 py-4 font-medium hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
              Lihat Galeri
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
