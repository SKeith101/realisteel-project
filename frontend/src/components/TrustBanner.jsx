import { motion } from 'framer-motion';
import { ShieldCheck, Award, Clock, Users, Ruler, BadgeCheck } from 'lucide-react';
import { trustBadges, partners } from '../data/mock';

const icons = [BadgeCheck, Award, ShieldCheck, Clock, Ruler, Users];

export default function TrustBanner() {
  return (
    <section id="trust" className="py-14 lg:py-20 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-y border-black/10 py-8 lg:py-10"
        >
          {trustBadges.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col items-start gap-2 rounded-2xl border border-black/5 bg-white/40 p-4 shadow-[0_10px_25px_rgba(0,0,0,0.02)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black">
                  <Icon size={18} />
                </div>
                <div className="text-[15px] font-semibold text-black leading-tight">{b.name}</div>
                <div className="text-[12px] text-neutral-600">{b.sub}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partner marquee */}
        <div className="mt-10 overflow-hidden">
          <div className="marquee flex gap-16 items-center whitespace-nowrap w-max text-neutral-400 uppercase tracking-[0.2em] text-[13px] font-semibold">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="flex items-center gap-4">
                {p}
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"/>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
