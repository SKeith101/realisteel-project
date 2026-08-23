import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-36 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">Testimoni</span>
          <h2 className="text-display text-black text-[40px] sm:text-[60px] lg:text-[80px] uppercase">
            Dari klien untuk calon klien.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="bg-white rounded-[24px] p-8 lg:p-10 border border-black/5 hover:shadow-xl transition-shadow"
            >
              <Quote size={28} className="text-[#c9a90a] mb-5"/>
              <p className="text-[17px] lg:text-[19px] leading-[1.5] text-neutral-900 mb-8">
                &ldquo;{t.body}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  {t.name.split(' ').slice(-1)[0][0]}
                </div>
                <div>
                  <div className="font-semibold text-black">{t.name}</div>
                  <div className="text-[13px] text-neutral-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
