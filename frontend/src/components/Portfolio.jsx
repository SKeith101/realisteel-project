import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolio } from '../data/mock';
import { useRef } from 'react';

export default function Portfolio() {
  // 1. Buat referensi ke kontainer yang akan jadi landasan scroll
  const targetRef = useRef(null);
  
  // 2. Lacak seberapa jauh kita sudah men-scroll dalam targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] // Mulai saat nempel atas, selesai saat ujung bawah nempel
  });

  // 3. Ubah (Transform) progress scroll Y (0 sampai 1) menjadi pergeseran X (horizontal)
  // Minus menandakan geser ke kiri saat kita scroll ke bawah
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]); 

  return (
    <section id="portofolio" className="py-24 lg:py-36 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        {/* === HEADER SECTION (Tetap sama) === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
        >
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">Galeri Karya</span>
            <h2 className="text-display text-black text-[44px] sm:text-[72px] lg:text-[100px] uppercase">
              Wujudkan
              <br />Impian Anda.
            </h2>
          </div>
          <p className="max-w-sm text-neutral-700 text-[15.5px] leading-[1.6]">
            Punya acuan model sendiri atau ingin kustomisasi bentuk? Tim kami berpengalaman dalam menerjemahkan sketsa menjadi struktur nyata yang kokoh.
          </p>
        </motion.div>

        {/* === BAGIAN DESKTOP (Tetap sama, Grid) === */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[280px] gap-4">
          {portfolio.map((p, i) => (
            <motion.a
              key={p.title}
              href="#kontak"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className={`portfolio-tile group relative rounded-[20px] overflow-hidden bg-neutral-200 ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                width={940}
                height={p.span.includes('row-span-2') ? 1120 : 560}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#C62828] mb-1.5">{p.cat}</div>
                <div className="text-white text-[18px] font-semibold leading-tight">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* === BAGIAN MOBILE (Strict 1-Swipe = 1-Item) === */}
      <div className="md:hidden">
        <div className="mb-3 flex items-center justify-center px-6">
          <p className="text-[11px] font-light tracking-[0.22em] text-neutral-500 uppercase">Geser untuk lihat proyek</p>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 px-6 pb-4 pt-2">
          {portfolio.map((p, i) => (
            <motion.a
              key={`${p.title}-mobile`}
              href="#kontak"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative block w-[85vw] shrink-0 snap-center snap-always overflow-hidden rounded-[20px] bg-neutral-200 shadow-sm"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#C62828] mb-1.5">{p.cat}</div>
                <div className="text-white text-[19px] font-semibold leading-tight">{p.title}</div>
              </div>
            </motion.a>
          ))}
          <div className="w-[5vw] shrink-0 snap-center" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}