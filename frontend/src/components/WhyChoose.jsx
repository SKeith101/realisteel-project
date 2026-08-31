import { motion } from 'framer-motion';
import { whyBlocks } from '../data/mock';

export default function WhyChoose() {
  return (
    <section id="tentang" className="py-20 lg:py-40 bg-[#ececec] overflow-hidden">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 lg:mb-24"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">
            Kenapa Realisteel?
          </span>
          <h2 className="text-display text-black text-[36px] sm:text-[64px] lg:text-[88px] uppercase">
            Empat alasan sederhana.
          </h2>
        </motion.div>

        <ul className="space-y-16 lg:space-y-36">
          {whyBlocks.map((b, i) => (
            <motion.li
              key={b.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start border-t border-black/10 pt-8 lg:border-none lg:pt-0"
            >
              <div className="lg:col-span-1 pt-2 lg:pt-8">
                <span className="text-neutral-400 font-mono text-[14px]">0{i + 1}</span>
              </div>
              <div className="lg:col-span-8 overflow-hidden">
                <motion.h3
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-display text-black text-[38px] min-[400px]:text-[48px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[120px] uppercase leading-[0.95] tracking-tight break-words"
                >
                  {b.label}
                </motion.h3>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.6] text-neutral-800 max-w-md lg:mt-8">
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