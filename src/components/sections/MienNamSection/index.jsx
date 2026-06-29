import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import MatTranCard from './MatTranCard';
import AmMuuVsChutruong from './AmMuuVsChutruong';
import ThangLoiTimeline from './ThangLoiTimeline';

const PANELS = 3;

export default function MienNamSection() {
  const containerRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0);

  const scrollToPanel = (index) => {
    if (!containerRef.current) return;
    const panelWidth = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: index * panelWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollLeft = containerRef.current.scrollLeft;
      const panelWidth = containerRef.current.clientWidth;
      const index = Math.round(scrollLeft / panelWidth);
      setActivePanel(index);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section
      id="section-miennam"
      className="snap-section paper-grain relative overflow-hidden"
      style={{ background: 'var(--paper-dark)' }}
    >
      {/* Header absolutely positioned */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute top-16 left-6 md:left-12 z-10"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-[1px]" style={{ background: 'var(--headline-red)' }} />
          <span className="font-jetbrains text-xs tracking-widest uppercase" style={{ color: 'var(--headline-red)' }}>
            Phần 4
          </span>
        </div>
        <h2 className="font-playfair font-bold text-3xl md:text-4xl" style={{ color: 'var(--ink)' }}>
          Cách mạng miền Nam
        </h2>
      </motion.div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="horizontal-scroll w-full h-screen"
      >
        <MatTranCard />
        <AmMuuVsChutruong />
        <ThangLoiTimeline />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        <button
          onClick={() => scrollToPanel(Math.max(0, activePanel - 1))}
          className="p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer"
          disabled={activePanel === 0}
          style={{
            border: '1px solid var(--ink)',
            color: 'var(--ink)',
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {[...Array(PANELS)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: activePanel === i ? 'var(--ink)' : 'transparent',
                border: '1px solid var(--ink)',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToPanel(Math.min(PANELS - 1, activePanel + 1))}
          className="p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer"
          disabled={activePanel === PANELS - 1}
          style={{
            border: '1px solid var(--ink)',
            color: 'var(--ink)',
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
