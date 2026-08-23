import { teamCards } from '../data/mock';
import { ArrowUpRight } from 'lucide-react';

export default function TeamsGrid() {
  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1500px]">
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-5">By Team</span>
          <h3 className="text-display text-black text-[44px] lg:text-[72px] uppercase">
            Built for the teams doing the work.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamCards.map((t) => (
            <a key={t.name} href="#more" className="group bg-white rounded-[24px] overflow-hidden border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-[22px] font-semibold tracking-tight text-black">{t.name}</h4>
                  <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-black transition-colors"/>
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.55] text-neutral-600">{t.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
