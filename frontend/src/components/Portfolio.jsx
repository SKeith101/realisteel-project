import { motion } from 'framer-motion';
import { portfolio } from '../data/mock';

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 lg:py-36 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
        >
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">Portofolio</span>
            <h2 className="text-display text-black text-[44px] sm:text-[72px] lg:text-[100px] uppercase">
              Gambar yang berbicara.
            </h2>
          </div>
          <p className="max-w-sm text-neutral-700 text-[15.5px] leading-[1.6]">
            Sebagian kecil dari 500+ proyek yang telah kami selesaikan di 15 kota di Indonesia. Klik untuk melihat detail proyek.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[280px] gap-4">
          {portfolio.map((p, i) => (
            <motion.a
              key={p.title}
              href="#kontak"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className={`group relative rounded-[20px] overflow-hidden bg-neutral-200 ${p.span}`}
            >
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#f5d949] mb-1.5">{p.cat}</div>
                <div className="text-white text-[18px] font-semibold leading-tight">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
