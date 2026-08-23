import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Phone } from 'lucide-react';
import { WA_LINK } from '../data/mock';

export default function CTA() {
  return (
    <section id="kontak" className="py-24 lg:py-40 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black text-white rounded-[32px] p-10 lg:p-20 relative overflow-hidden"
        >
          {/* Gold accent */}
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#f5d949]/10 blur-3xl"/>
          <div className="absolute -bottom-32 -left-24 w-[360px] h-[360px] rounded-full bg-white/5 blur-3xl"/>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#f5d949] mb-5">Konsultasi Gratis</span>
              <h3 className="text-display text-[48px] lg:text-[112px] uppercase leading-[0.92]">
                Ceritakan<br/>proyek Anda.
              </h3>
              <p className="mt-6 max-w-xl text-neutral-300 text-[16px] leading-[1.6]">
                Kami merespons chat dalam hitungan menit. Free survey lokasi &amp; RAB detail dalam 2 hari kerja.
                Tanpa biaya, tanpa komitmen.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 lg:justify-end">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-between gap-3 bg-[#f5d949] text-black px-8 py-5 rounded-full font-semibold text-[16px] hover:bg-[#ffe270] transition-colors">
                <span className="inline-flex items-center gap-3">
                  <MessageCircle size={20}/>
                  Chat WhatsApp
                </span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </a>
              <a href="tel:+6281234567890" className="group inline-flex items-center justify-between gap-3 bg-white/10 border border-white/15 text-white px-8 py-5 rounded-full font-medium text-[16px] hover:bg-white/15 transition-colors">
                <span className="inline-flex items-center gap-3">
                  <Phone size={18}/>
                  Telepon Langsung
                </span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
