import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const cols = [
    { title: 'Layanan', links: ['Kanopi Baja Ringan', 'Kanopi Alderon', 'Pagar & Gerbang', 'Railing Tangga', 'Rolling Door', 'Konstruksi Baja'] },
    { title: 'Perusahaan', links: ['Tentang Kami', 'Portofolio', 'Proses Kerja', 'Testimoni', 'Karir', 'Blog'] },
    { title: 'Wilayah', links: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi', 'Bandung'] },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="mx-auto px-6 lg:px-10 max-w-[1600px]">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 24 L16 4 L26 24 Z" fill="#fff"/>
                <path d="M11 22 L16 12 L21 22 Z" fill="#f5d949"/>
              </svg>
              <span className="text-[24px] font-bold tracking-tight">Realisteel</span>
            </div>
            <p className="mt-6 text-neutral-400 text-[14.5px] leading-relaxed max-w-md">
              Bengkel las &amp; kontraktor konstruksi baja. Presisi las argon, material SNI, garansi 2 tahun. Melayani Jabodetabek &amp; sekitarnya sejak 2014.
            </p>
            <div className="mt-6 space-y-2 text-[14px] text-neutral-300">
              <div className="flex items-center gap-2"><MapPin size={14}/> Workshop: Jl. Industri Raya No. 88, Bekasi</div>
              <div className="flex items-center gap-2"><Phone size={14}/> +62 812-3456-7890</div>
              <div className="flex items-center gap-2"><Mail size={14}/> hello@realisteel.co.id</div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#ig" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Instagram size={16}/></a>
              <a href="#fb" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Facebook size={16}/></a>
            </div>
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
          <div>&copy; {new Date().getFullYear()} Realisteel. Semua hak dilindungi.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#terms" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
          </div>
        </div>

        {/* Giant word */}
        <div className="mt-12 text-center overflow-hidden">
          <div className="text-display text-[100px] sm:text-[180px] lg:text-[280px] xl:text-[380px] leading-[0.9] uppercase text-white/5 select-none">
            Realisteel
          </div>
        </div>
      </div>
    </footer>
  );
}
