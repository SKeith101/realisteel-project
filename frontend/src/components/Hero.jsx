import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WA_LINK } from '../data/mock';

const word = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.08 },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-2 text-[13px] font-medium text-neutral-800 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#f5d949] animate-pulse"/>
              Bengkel Las &amp; Konstruksi Baja — Sejak 2014
            </motion.div>

            <h1 className="text-display text-black text-[52px] sm:text-[84px] lg:text-[116px] xl:text-[140px] uppercase">
              {['Baja Bukan', 'Sekadar', 'Material.', 'Karya Yang', 'Berbicara.'].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    custom={i}
                    variants={word}
                    initial="hidden"
                    animate="show"
                    className={`block ${i >= 3 ? 'italic font-medium text-[#c9a90a]' : ''}`}
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
              className="mt-10 max-w-md text-[17px] leading-[1.55] text-neutral-800"
            >
              Realisteel merancang, memfabrikasi, dan memasang kanopi, pagar, railing, hingga konstruksi baja berat. Presisi las argon, material bergaransi SNI, harga transparan sejak awal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors">
                <MessageCircle size={18}/>
                Konsultasi Gratis via WhatsApp
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>
              </a>
              <a href="#portofolio" className="inline-flex items-center gap-2 border border-black/20 rounded-full px-7 py-4 font-medium hover:bg-black hover:text-white transition-colors">
                Lihat Portofolio
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[420px] sm:h-[520px] lg:h-[680px] flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <SteelSculpture />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SteelSculpture() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 600 700" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5a5a5a"/>
              <stop offset="0.5" stopColor="#b8b8b8"/>
              <stop offset="1" stopColor="#3a3a3a"/>
            </linearGradient>
            <linearGradient id="steelDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2a2a2a"/>
              <stop offset="1" stopColor="#0a0a0a"/>
            </linearGradient>
            <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f5d949"/>
              <stop offset="1" stopColor="#c9a90a"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <ellipse cx="300" cy="640" rx="200" ry="18" fill="#00000020"/>

          {/* H-Beam column */}
          <g transform="translate(300 350)">
            <rect x="-80" y="-260" width="160" height="30" fill="url(#steel)"/>
            <rect x="-20" y="-230" width="40" height="440" fill="url(#steel)"/>
            <rect x="-80" y="210" width="160" height="30" fill="url(#steel)"/>
            <rect x="-80" y="-260" width="160" height="4" fill="#e5e5e5"/>
            <rect x="-80" y="238" width="160" height="3" fill="#e5e5e5"/>
          </g>

          {/* Cross beam */}
          <g transform="translate(300 260) rotate(28)">
            <rect x="-220" y="-14" width="440" height="28" fill="url(#steelDark)"/>
            <rect x="-220" y="-14" width="440" height="3" fill="#4a4a4a"/>
          </g>

          {/* Bolts */}
          {[-1, 0, 1].map((i) => (
            <g key={i}>
              <circle cx={280 + i * 20} cy="110" r="6" fill="#f5d949"/>
              <circle cx={280 + i * 20} cy="580" r="6" fill="#f5d949"/>
            </g>
          ))}

          {/* Gold accent triangle */}
          <polygon points="420,140 500,180 460,240" fill="url(#gold)"/>
          <polygon points="100,440 180,480 140,540" fill="url(#gold)" opacity="0.9"/>

          {/* Sparks */}
          <g filter="url(#glow)">
            <circle cx="195" cy="290" r="3" fill="#fff2a8"/>
            <circle cx="215" cy="265" r="2" fill="#f5d949"/>
            <circle cx="180" cy="320" r="2" fill="#fff2a8"/>
            <circle cx="155" cy="260" r="2.5" fill="#f5d949"/>
            <circle cx="235" cy="310" r="2" fill="#fff2a8"/>
          </g>

          {/* Weld point glow */}
          <circle cx="200" cy="290" r="14" fill="#f5d949" opacity="0.35" filter="url(#glow)"/>
          <circle cx="200" cy="290" r="5" fill="#fff2a8"/>

          {/* Realisteel stamp */}
          <g transform="translate(300 460)">
            <rect x="-50" y="-16" width="100" height="32" rx="4" fill="#0a0a0a"/>
            <text x="0" y="6" textAnchor="middle" fill="#f5d949" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="12" letterSpacing="1">REALISTEEL</text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
