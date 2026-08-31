import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { testimonials } from '../data/mock';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-36 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        {/* === HEADER SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-10 lg:mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">Material Pilihan</span>
          <h2 className="text-display text-black text-[40px] sm:text-[60px] lg:text-[80px] uppercase">
            Kekuatan material, hasil yang lebih siap pakai.
          </h2>
        </motion.div>

        {/* === INDIKATOR GESER KHUSUS MOBILE === */}
        <div className="md:hidden flex items-center justify-end px-1 mb-3 text-neutral-500">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold mr-2">Geser</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>
        </div>

        {/* === BAGIAN MOBILE (HORIZONTAL SLIDER) === */}
        <div className="md:hidden w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 pb-4">
          {testimonials.map((t, i) => (
            <motion.article
              key={`${t.name}-mobile`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group w-[82vw] shrink-0 snap-center snap-always overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-52 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-black backdrop-blur-sm">
                  {t.role}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-[22px] font-bold tracking-tight text-black">{t.name}</h3>
                  <ArrowUpRight size={18} className="text-[#C62828]"/>
                </div>
                <p className="text-[14px] leading-[1.65] text-neutral-600">
                  {t.body}
                </p>
              </div>
            </motion.article>
          ))}
          {/* Spacer penyangga akhir slider */}
          <div className="w-[4vw] shrink-0 snap-center" aria-hidden="true" />
        </div>

        {/* === BAGIAN DESKTOP (GRID ORIGINAL) === */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-black backdrop-blur-sm">
                  {t.role}
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-[24px] font-bold tracking-tight text-black">{t.name}</h3>
                  <ArrowUpRight size={18} className="text-[#C62828] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                </div>
                <p className="text-[14.5px] leading-[1.7] text-neutral-600">
                  {t.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}