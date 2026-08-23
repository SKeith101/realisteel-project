import { productShot, platformCards } from '../data/mock';
import { ArrowUpRight } from 'lucide-react';

export default function Platform() {
  return (
    <section id="platform" className="py-20 lg:py-32 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1500px]">
        {/* Product screenshot */}
        <div className="rounded-[28px] overflow-hidden bg-neutral-100 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
          <img
            src={productShot}
            alt="Dayos Hero product"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {platformCards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group relative bg-black text-white rounded-[24px] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 className="text-display text-[56px] lg:text-[72px] leading-none uppercase">{c.title}</h3>
                <p className="mt-6 text-[15px] leading-[1.55] text-neutral-300 max-w-sm">{c.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                <span className="text-[14px] font-medium">Learn more</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-2xl"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
