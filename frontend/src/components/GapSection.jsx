import { useEffect, useRef, useState } from 'react';
import { gapBlocks } from '../data/mock';

export default function GapSection() {
  const [visible, setVisible] = useState(new Array(gapBlocks.length).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setVisible((v) => { const n = [...v]; n[idx] = true; return n; });
          }
        });
      },
      { threshold: 0.35 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-40 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <ul className="space-y-24 lg:space-y-40">
          {gapBlocks.map((b, i) => (
            <li
              key={b.label}
              data-idx={i}
              ref={(el) => (refs.current[i] = el)}
              className={`fade-up ${visible[i] ? 'in' : ''} grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`}
            >
              <div className="lg:col-span-7">
                <h2 className="text-display text-black text-[96px] sm:text-[140px] lg:text-[200px] xl:text-[260px] uppercase">
                  {b.label}
                </h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-[19px] lg:text-[22px] leading-[1.4] text-neutral-900 max-w-md mt-6">
                  {b.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
