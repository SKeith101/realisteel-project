import { useState } from 'react';
import { useLenis } from 'lenis/react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useLenis(({ progress: p }) => {
    setProgress(p);
  });

  return (
    <div
      style={{ transform: `scaleX(${progress})` }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#C62828] z-[60] origin-left transform-gpu transition-transform duration-75"
    />
  );
}
