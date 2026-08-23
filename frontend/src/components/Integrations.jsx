import { integrations } from '../data/mock';

export default function Integrations() {
  const doubled = [...integrations, ...integrations];
  return (
    <section className="py-16 lg:py-24 bg-black text-white overflow-hidden">
      <div className="mx-auto px-6 lg:px-10 max-w-[1500px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <h3 className="text-display text-[40px] lg:text-[64px] uppercase max-w-2xl">
            Works with the systems you already run.
          </h3>
          <p className="text-neutral-400 max-w-sm text-[15px] leading-relaxed">
            Native integrations with the enterprise stack. Hero logs in, executes, and validates directly inside your ERP.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="marquee flex gap-16 items-center whitespace-nowrap w-max">
          {doubled.map((it, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
              <img src={it.logo} alt={it.name} className="h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
