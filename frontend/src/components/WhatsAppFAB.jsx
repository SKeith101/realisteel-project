import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WA_LINK } from '../data/mock';

export default function WhatsAppFAB() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    const t2 = setTimeout(() => setTip(false), 8000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-end gap-3"
        >
          <AnimatePresence>
            {tip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white text-neutral-800 rounded-2xl shadow-xl px-4 py-3 pr-9 relative max-w-[240px] text-[13.5px] leading-snug border border-black/5"
              >
                Butuh konsultasi cepat? Chat kami &mdash; balas dalam menit.
                <button onClick={() => setTip(false)} className="absolute top-2 right-2 text-neutral-400 hover:text-black">
                  <X size={14}/>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            aria-label="WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"/>
            <MessageCircle size={24} className="relative z-10"/>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
