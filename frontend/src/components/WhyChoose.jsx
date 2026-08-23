import { motion } from 'framer-motion';
import { whyBlocks } from '../data/mock';

export default function WhyChoose() {
  return (
    <section id="tentang" className="py-24 lg:py-40 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">Kenapa Realisteel?</span>
          <h2 className="text-display text-black text-[44px] sm:text-[64px] lg:text-[88px] uppercase">
            Empat alasan sederhana.
          </h2>
        </motion.div>

        <ul className="space-y-24 lg:space-y-36">
          {whyBlocks.map((b, i) => (
            <motion.li
              key={b.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              <div className="lg:col-span-1 pt-8">
                <span className="text-neutral-400 font-mono text-[14px]">0{i + 1}</span>
              </div>
              <div className="lg:col-span-8">
                <motion.h3
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-display text-black text-[72px] sm:text-[110px] lg:text-[150px] xl:text-[180px] uppercase leading-[0.9]"
                >
                  {b.label}
                </motion.h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[17px] lg:text-[20px] leading-[1.5] text-neutral-800 max-w-md lg:mt-8">
                  {b.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
