import { useEffect, useRef } from 'react';

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 60;
      const dy = (e.clientY - cy) / 60;
      imgRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${dx * 0.15}deg)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative pt-40 lg:pt-44 pb-24 lg:pb-40 overflow-hidden">
      <div className="mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <h1 className="text-display text-black text-[64px] sm:text-[92px] lg:text-[132px] xl:text-[156px] uppercase">
              <span className="block">Born From</span>
              <span className="block">The AI Era.</span>
              <span className="block">Not Bolted</span>
              <span className="block">Onto It.</span>
            </h1>

            <p className="mt-10 max-w-md text-[17px] leading-[1.55] text-neutral-800">
              We don't sell managed services to the enterprise. We provide the AI that does the work. Production-ready in 2 weeks. A new agent every year, lowering your support cost the longer you run Hero.
            </p>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[560px] lg:h-[720px] flex items-center justify-center">
            <div ref={imgRef} className="transition-transform duration-500 ease-out will-change-transform">
              <HeroSculpture />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSculpture() {
  // Stylized hexagonal-block sculpture using CSS/SVG for a similar feel
  return (
    <div className="relative w-[380px] sm:w-[520px] lg:w-[620px] aspect-square">
      <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e8d3ad"/>
            <stop offset="1" stopColor="#b78e5a"/>
          </linearGradient>
          <linearGradient id="stone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f2efe7"/>
            <stop offset="1" stopColor="#b7b3a8"/>
          </linearGradient>
          <linearGradient id="dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a3f36"/>
            <stop offset="1" stopColor="#2b241f"/>
          </linearGradient>
          <linearGradient id="yellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f5d949"/>
            <stop offset="1" stopColor="#c9a90a"/>
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="300" cy="540" rx="180" ry="22" fill="#00000018"/>

        {/* Central hex tower */}
        <g transform="translate(300 300)">
          {/* base yellow */}
          <polygon points="-110,90 0,150 110,90 110,30 0,-30 -110,30" fill="url(#yellow)"/>
          {/* mid stone */}
          <polygon points="-110,30 0,90 110,30 110,-30 0,-90 -110,-30" fill="url(#stone)"/>
          {/* upper wood */}
          <polygon points="-110,-30 0,30 110,-30 110,-90 0,-150 -110,-90" fill="url(#wood)"/>
          {/* top face */}
          <polygon points="-110,-90 0,-150 110,-90 0,-30" fill="#f4ecd6" opacity="0.9"/>
          {/* magenta well */}
          <polygon points="-30,-88 20,-118 55,-100 30,-70 -10,-58" fill="#c8248e"/>
          {/* text badges */}
          <text x="0" y="-8" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="18" fill="#1a1a1a">workday</text>
          <text x="0" y="60" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="16" fill="#1a1a1a">servicenow</text>
        </g>

        {/* Floating dark blocks */}
        <g>
          <polygon points="110,180 170,200 170,270 110,250" fill="url(#dark)"/>
          <polygon points="170,200 220,180 220,250 170,270" fill="#3a3129"/>

          <polygon points="430,150 480,170 480,240 430,220" fill="url(#dark)"/>
          <polygon points="480,170 520,155 520,225 480,240" fill="#3a3129"/>
          <text x="470" y="200" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="14" fill="#fff">ORACLE</text>

          <polygon points="430,340 490,360 490,420 430,400" fill="url(#dark)"/>
          <polygon points="120,340 175,320 175,390 120,410" fill="#3a3129"/>

          {/* accent color blocks */}
          <polygon points="80,420 130,410 130,470 80,480" fill="#d43b8e"/>
          <polygon points="470,430 520,420 520,480 470,490" fill="#e07f2b"/>
          <polygon points="170,470 220,460 220,510 170,520" fill="#2e8b3a"/>
        </g>
      </svg>
    </div>
  );
}
