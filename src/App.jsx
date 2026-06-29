import { useRef, useState, useEffect, useCallback } from 'react';
import { useScrollSection } from './hooks/useScrollSection';
import Nav from './components/Nav';
import DotIndicator from './components/DotIndicator';
import ProgressBar from './components/ProgressBar';
import Chatbot from './components/Chatbot';
import HeroSection from './components/sections/HeroSection';
import DaiHoiSection from './components/sections/DaiHoiSection';
import MienBacSection from './components/sections/MienBacSection';
import MienNamSection from './components/sections/MienNamSection';
import ThucTienSection from './components/sections/ThucTienSection';
import FooterSection from './components/sections/FooterSection';

const SECTION_COUNT = 5;
const NODE_POSITIONS = [10, 28, 46, 64, 82];

export default function App() {
  const containerRef = useRef(null);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const { activeIndex, scrollProgress, scrollTo, scrollNext, scrollPrev } =
    useScrollSection(containerRef, SECTION_COUNT);

  const togglePresentation = useCallback(() => {
    setIsPresentationMode(prev => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          scrollNext();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          scrollPrev();
          break;
        case 'Escape':
          if (isPresentationMode) {
            setIsPresentationMode(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollNext, scrollPrev, isPresentationMode]);

  return (
    <div className="relative" style={{ background: 'var(--paper-bg)' }}>
      {/* Progress bar */}
      <ProgressBar progress={scrollProgress} />

      {/* Navigation */}
      <Nav
        activeIndex={activeIndex}
        scrollTo={scrollTo}
        isPresentationMode={isPresentationMode}
        togglePresentation={togglePresentation}
      />

      {/* Dot indicator removed per request */}
      {/* 
      <DotIndicator
        activeIndex={activeIndex}
        scrollTo={scrollTo}
        isPresentationMode={isPresentationMode}
      />
      */}

      {/* Timeline line (archive annotation) */}
      <div className="timeline-line hidden md:block" />

      {/* Timeline nodes */}
      <div className="hidden md:block">
        {NODE_POSITIONS.map((pos, i) => (
          <div
            key={i}
            className={`timeline-node ${activeIndex === i ? 'active' : ''}`}
            style={{ top: `${pos}%` }}
          />
        ))}
      </div>

      {/* Main scroll container */}
      <div
        ref={containerRef}
        className={`scroll-container ${isPresentationMode ? 'presentation-mode' : ''}`}
      >
        <HeroSection scrollToNext={scrollNext} />
        <DaiHoiSection />
        <MienBacSection />
        <MienNamSection />
        <ThucTienSection />
        <FooterSection />
      </div>

      {/* Chatbot – hidden in presentation mode */}
      {!isPresentationMode && <Chatbot />}

      {/* Presentation mode indicator */}
      {isPresentationMode && (
        <div
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-3 py-1.5 text-xs font-serif"
          style={{
            background: 'var(--paper-dark)',
            border: '1px solid var(--border)',
            color: 'var(--muted)',
          }}
        >
          <span>🎯 Trình chiếu</span>
          <span style={{ color: 'var(--border)' }}>|</span>
          <span>ESC để thoát</span>
        </div>
      )}
    </div>
  );
}
