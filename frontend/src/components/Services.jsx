import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/mock';

export default function Services() {
  return (
    <section id="layanan" className="py-24 lg:py-36 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-16 lg:mb-24"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">Layanan Kami</span>
          <h2 className="text-display text-black text-[44px] sm:text-[72px] lg:text-[100px] uppercase">
            Dari kanopi rumah hingga konstruksi berat.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.no}
              href="#kontak"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-[24px] overflow-hidden border border-black/5 hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" loading="lazy"/>
              </div>
              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="text-[13px] font-mono text-neutral-500">{s.no}</span>
                  <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"/>
                </div>
                <h3 className="text-[26px] lg:text-[28px] font-bold tracking-tight text-black leading-tight">{s.title}</h3>
                <p className="mt-4 text-[14.5px] leading-[1.6] text-neutral-600">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
