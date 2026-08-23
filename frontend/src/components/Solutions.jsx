import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { solutionTiles } from '../data/mock';

export default function Solutions() {
  const scroller = useRef(null);
  const scroll = (dir) => {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: dir * 460, behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1500px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <h3 className="text-display text-black text-[44px] lg:text-[72px] uppercase max-w-3xl">
            One platform. Every business function.
          </h3>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll(-1)} className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <ChevronLeft size={18}/>
            </button>
            <button onClick={() => scroll(1)} className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <ChevronRight size={18}/>
            </button>
          </div>
        </div>
      </div>

      <div ref={scroller} className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-6 lg:px-10 pb-6">
        {solutionTiles.map((s) => (
          <a key={s.name} href="#more" className="group relative shrink-0 w-[360px] lg:w-[440px] aspect-square rounded-[24px] overflow-hidden bg-white">
            <img src={s.img} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-white text-[24px] font-semibold tracking-tight drop-shadow">{s.name}</span>
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-black"/>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
