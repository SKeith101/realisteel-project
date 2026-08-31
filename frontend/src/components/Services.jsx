import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/mock';

export default function Services() {
  const items = services.slice(0, 5);
  const sectionRef = useRef(null);

  // Preload gambar 500px SEBELUM section masuk viewport
  // Supaya saat animasi Framer Motion mulai, gambar sudah ada di cache browser
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((s) => {
            const img = new Image();
            img.src = s.img;
          });
          observer.disconnect();
        }
      },
      { rootMargin: '500px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [items]);

  return (
    <section id="layanan" ref={sectionRef} className="py-24 lg:py-36 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        {/* === HEADER SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-12 lg:mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">
            Layanan Kami
          </span>
          <h2 className="text-display text-black text-[44px] sm:text-[72px] lg:text-[100px] uppercase leading-[0.95]">
            Dari kanopi rumah hingga mezanin custom.
          </h2>
        </motion.div>
      </div>

      {/* === BAGIAN MOBILE === */}
      <div className="md:hidden">
        <div className="mb-3 flex items-center justify-center px-6">
          <p className="text-[11px] font-light tracking-[0.22em] text-neutral-500 uppercase">
            Geser untuk lihat proyek
          </p>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 px-6 pb-4 pt-2" style={{ willChange: 'scroll-position' }}>
          {items.map((s) => (
            <a
              key={`${s.no}-mobile`}
              href="#kontak"
              className="relative block w-[85vw] shrink-0 snap-center snap-always overflow-hidden rounded-[20px] bg-neutral-200 shadow-sm will-change-transform"
            >
              <img
                src={s.img}
                alt={s.title}
                width={800}
                height={380}
                className="h-[380px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#C62828] mb-1.5">
                  {s.no} — LAYANAN
                </div>
                <div className="text-white text-[19px] font-semibold leading-tight mb-2">
                  {s.title}
                </div>
                <p className="text-white/80 text-[13px] leading-relaxed line-clamp-2 mb-3">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium bg-white/20 text-white/90 px-2.5 py-0.5 rounded-full border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
          <div className="w-[5vw] shrink-0 snap-center" aria-hidden="true"></div>
        </div>
      </div>

      {/* === BAGIAN DESKTOP (Tetap Grid Original) === */}
      <div className="hidden md:block mx-auto px-6 lg:px-10 max-w-[1600px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => {
            const isHeroCard = i === 0;

            return (
              <motion.a
                key={s.no}
                href="#kontak"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className={`group relative bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-[0_2px_16px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300 will-change-transform flex flex-col justify-between ${
                  isHeroCard ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  <div className={`overflow-hidden bg-neutral-100 ${isHeroCard ? 'aspect-[16/9]' : 'aspect-[4/4.6]'}`}>
                    <img
                      src={s.img}
                      alt={s.title}
                      width={800}
                      height={isHeroCard ? 450 : 900}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="text-[13px] font-mono text-neutral-500">{s.no}</span>
                      <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-[transform,color] duration-300"/>
                    </div>
                    <h3 className={`font-bold tracking-tight text-black leading-tight ${isHeroCard ? 'text-[28px] lg:text-[36px]' : 'text-[24px] lg:text-[28px]'}`}>
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-neutral-600">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 lg:p-8 pt-0 flex flex-wrap gap-2 mt-4">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}