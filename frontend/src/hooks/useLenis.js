import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

export default function useAnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Handle top / hero scrolling smoothly without offset jump
      if (href === '#' || href === '#hero') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.4 });
        return;
      }

      // Handle section anchor scrolling with smooth offset
      if (href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -80, duration: 1.4 });
        }
      }
    };

    document.addEventListener('click', onAnchorClick, true);
    return () => document.removeEventListener('click', onAnchorClick, true);
  }, [lenis]);
}
