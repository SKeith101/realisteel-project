import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { stats } from '../data/mock';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => {
    if (value.includes('.') || value.includes('/')) return value;
    return Math.round(v).toLocaleString();
  });

  useEffect(() => {
    const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
    const controls = animate(mv, num, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [value, mv]);

  if (value.includes('.') || value.includes('/')) {
    return <span>{value}</span>;
  }
  return <><motion.span>{rounded}</motion.span>{suffix}</>;
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
        >
          {stats.map((s, i) => {
            const suffix = s.num.includes('+') ? '+' : '';
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-black/15 pt-6"
              >
                <div className="text-display text-black text-[56px] lg:text-[88px] leading-none">
                  <Counter value={s.num} suffix={suffix}/>
                </div>
                <div className="mt-3 text-[15px] text-neutral-600">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
