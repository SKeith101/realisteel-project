import { useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { caseStudies } from '../data/mock';

export default function CaseStudies() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => setI((v) => (v - 1 + caseStudies.length) % caseStudies.length);
  const next = () => setI((v) => (v + 1) % caseStudies.length);

  const c = caseStudies[i];

  return (
    <section className="py-20 lg:py-32 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-neutral-200">
              <img key={c.img} src={c.img} alt={c.title} className="w-full h-full object-cover transition-opacity duration-500" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Case Study — {c.tag}</span>
            <h3 className="text-display text-black text-[40px] lg:text-[54px] uppercase">
              {c.title}
            </h3>
            <p className="mt-6 text-[16px] leading-[1.55] text-neutral-800 max-w-md">{c.body}</p>

            <a href="#more" className="mt-8 inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-[14px] font-medium hover:bg-black hover:text-white transition-colors">
              More details
            </a>

            {/* Controls */}
            <div className="mt-10 flex items-center gap-4">
              <button onClick={prev} className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <ChevronRight size={18} />
              </button>
              <button onClick={() => setPaused((p) => !p)} className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                {paused ? <Play size={16} /> : <Pause size={16} />}
              </button>
              <div className="ml-2 text-sm text-neutral-500">Slide {i + 1} / {caseStudies.length}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
