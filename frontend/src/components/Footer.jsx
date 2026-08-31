import React from 'react';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { useLenis } from 'lenis/react';

function TikTokIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14.5 3.5c.7 1.9 2.1 3.4 4.3 4.2v2.3c-1.5.2-2.8-.4-4.1-1.6v7.1c0 2.8-2.2 5-5 5a5 5 0 0 1-5-5 5 5 0 0 1 5-5c.3 0 .6 0 .9.1v2.3c-.3-.1-.6-.1-.9-.1a2.7 2.7 0 0 0 0 5.4 2.7 2.7 0 0 0 2.7-2.7V3.5h2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Mapping target section untuk Layanan
const linkTargetMap = {
  'Kanopi': '#layanan',
  'Pagar & Gerbang': '#layanan',
  'Railing Tangga': '#layanan',
  'Teralis Keamanan': '#layanan',
  'Mezanin Custom': '#layanan',
};

// Data Sosial Media
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/realisteel_project',
    icon: <Instagram size={18} />,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@realisteel',
    icon: <TikTokIcon size={20} className="shrink-0" />,
  },
];

// Data Info Kontak
const contactInfo = [
  {
    icon: <MapPin size={16} className="shrink-0 mt-0.5" />,
    text: 'Jl. Riung Arum Barat 7 No.10, Cisaranten Kidul, Kec. Gedebage, Kota Bandung, Jawa Barat 40295',
    href: 'https://maps.google.com/?q=Realisteel+Bandung',
  },
  {
    icon: <Phone size={16} className="shrink-0 mt-0.5" />,
    text: '+62 819-3372-4791',
    href: 'tel:+6281933724791',
  },
  {
    icon: <Mail size={16} className="shrink-0 mt-0.5" />,
    text: 'realisteel.project@gmail.com',
    href: 'mailto:realisteel.project@gmail.com',
  },
];

// Data Kolom Navigasi
const cols = [
  { 
    title: 'Layanan', 
    links: ['Kanopi', 'Pagar & Gerbang', 'Teralis Keamanan', 'Railing Tangga', 'Mezanin Custom'] 
  },
  { 
    title: 'Wilayah', 
    links: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi', 'Bandung'] 
  },
];

export default function Footer() {
  const lenis = useLenis();

  const handleScroll = (e, targetId) => {
    // Abaikan jika bukan tautan hash internal
    if (!targetId.startsWith('#')) return;
    
    e.preventDefault();
    
    if (targetId === '#hero') {
      lenis?.scrollTo(0, { duration: 1.2 });
    } else {
      const el = document.querySelector(targetId);
      if (el) {
        lenis?.scrollTo(el, { offset: -80, duration: 1.2 });
      } else {
        // Fallback ke atas jika elemen tidak ditemukan
        lenis?.scrollTo(0, { duration: 1.2 });
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px] relative z-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">
          
          {/* Kolom Kiri: Brand & Kontak */}
          <div className="max-w-xl lg:w-[52%]">
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, '#hero')} 
              className="inline-block group"
              aria-label="Kembali ke atas"
            >
              <img
                src="/background/logo-realisteeel.png"
                alt="Realisteel Logo"
                className="h-10 lg:h-12 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            <p className="mt-6 text-neutral-400 text-[15px] leading-relaxed max-w-md">
              Realisteel adalah spesialis pembuatan kanopi, pagar, tralis, dan railing custom dengan material berkualitas tinggi, pengerjaan rapi, dan bergaransi.
            </p>

            {/* Info Kontak */}
            <ul className="mt-8 space-y-4 text-[14px] text-neutral-300">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="text-neutral-500">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-white transition-colors leading-snug"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="leading-snug">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Sosial Media */}
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kunjungi ${social.name} kami`}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Navigasi Link */}
          <div className="flex flex-col gap-10 sm:flex-row lg:justify-end lg:items-start lg:gap-20 lg:w-[40%]">
            {cols.map((col) => (
              <div key={col.title} className="min-w-[140px]">
                <h5 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white mb-5">
                  {col.title}
                </h5>
                <ul className="space-y-3">
                  {col.links.map((link) => {
                    // Fallback ke #kontak jika link tidak ada di mapping (misal: Wilayah)
                    const target = linkTargetMap[link] || '#kontak';
                    return (
                      <li key={link}>
                        <a
                          href={target}
                          onClick={(e) => handleScroll(e, target)}
                          className="text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-[14.5px] inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Garis Pembatas & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-neutral-500 text-[13px] relative z-10">
          <div>
            &copy; {new Date().getFullYear()} Realisteel. All rights reserved.
          </div>
        </div>

        {/* Teks Raksasa Latar Belakang */}
        <div className="mt-16 text-center overflow-hidden pointer-events-none select-none">
          <div className="text-[80px] sm:text-[150px] md:text-[220px] lg:text-[280px] xl:text-[270px] leading-[0.85] uppercase text-white/[0.04] font-black tracking-tighter">
            Realisteel
          </div>
        </div>
      </div>
    </footer>
  );
}