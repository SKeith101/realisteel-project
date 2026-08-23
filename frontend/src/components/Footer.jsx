export default function Footer() {
  const cols = [
    { title: 'Platform', links: ['Hero Answers', 'Hero Actions', 'Hero Experts', 'Hero Pro'] },
    { title: 'Solutions', links: ['Accounting', 'HR', 'Procurement', 'IT', 'Finance'] },
    { title: 'Resources', links: ['Case Studies', 'Blog', 'Docs', 'Changelog'] },
    { title: 'Company', links: ['About', 'Careers', 'Partnership', 'Contact'] },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="mx-auto px-6 lg:px-10 max-w-[1500px]">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z" stroke="#fff" strokeWidth="2.5" fill="none"/>
                <circle cx="16" cy="16" r="3.5" fill="#fff"/>
              </svg>
              <span className="text-[24px] font-semibold tracking-tight">Dayos</span>
            </div>
            <p className="mt-6 text-neutral-400 text-[14.5px] leading-relaxed max-w-xs">
              AI agents that replace enterprise AMS teams. Hero logs in, executes, and validates directly inside your ERP.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-neutral-300 mb-4">{c.title}</h5>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}><a href="#l" className="text-neutral-400 hover:text-white text-[14.5px] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-neutral-500 text-[13px]">
          <div> {new Date().getFullYear()} Dayos, Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>

        {/* Giant word */}
        <div className="mt-16 text-center">
          <div className="text-display text-[120px] sm:text-[200px] lg:text-[320px] xl:text-[420px] leading-[0.9] uppercase text-white/5 select-none">
            Dayos
          </div>
        </div>
      </div>
    </footer>
  );
}
