import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="demo" className="py-24 lg:py-40 bg-[#ececec]">
      <div className="mx-auto px-6 lg:px-10 max-w-[1500px]">
        <div className="bg-black text-white rounded-[32px] p-10 lg:p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end relative z-10">
            <div className="lg:col-span-8">
              <h3 className="text-display text-[52px] lg:text-[112px] uppercase">
                Ready to see<br/>Hero in action?
              </h3>
              <p className="mt-6 max-w-xl text-neutral-300 text-[16px] leading-[1.55]">
                Production-ready in two weeks. Watch Hero log in, execute, and validate work directly inside Oracle, Workday, and SAP.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a href="#schedule" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-[16px] hover:bg-neutral-200 transition-colors">
                Schedule a Demo
                <ArrowUpRight size={18}/>
              </a>
            </div>
          </div>
          <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-white/5 blur-3xl"/>
          <div className="absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl"/>
        </div>
      </div>
    </section>
  );
}
