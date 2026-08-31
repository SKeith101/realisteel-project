import { motion } from 'framer-motion';
import { MessageCircle, MapPin, PenTool, Hammer, Wrench, ShieldCheck } from 'lucide-react';
import { process } from '../data/mock';

const iconMap = { MessageCircle, MapPin, PenTool, Hammer, Wrench, ShieldCheck };

export default function Process() {
  return (
    <section id="proses" className="py-24 lg:py-36 bg-black text-white overflow-hidden">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">Proses Kerja</span>
            <h2 className="text-display text-white text-[44px] sm:text-[72px] lg:text-[96px] uppercase">
              Enam langkah,<br/>hasil pasti.
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-[15.5px] leading-[1.6]">
            Dari chat pertama hingga garansi. Transparan, tidak berbelit, dan setiap tahap terdokumentasi lewat foto & laporan.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/10"/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {process.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-[22px] border border-white/10 bg-white/[0.02] p-4 lg:p-5"
                >
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-black border-2 border-white/15 mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#C62828]/15 shadow-[0_0_20px_rgba(198,40,40,0.2)]"/>
                    <Icon size={28} className="text-[#C62828] relative z-10"/>
                  </div>
                  <div className="text-[12px] font-mono text-neutral-500 mb-2">STEP {p.step}</div>
                  <h4 className="text-[20px] font-bold text-white mb-2 tracking-tight">{p.title}</h4>
                  <p className="text-[13.5px] leading-[1.55] text-neutral-400 max-w-[220px]">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
