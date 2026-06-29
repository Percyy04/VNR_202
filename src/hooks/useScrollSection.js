import { useState, useEffect, useCallback, useRef } from 'react';

export function useScrollSection(containerRef, sectionCount = 5) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      const sectionHeight = clientHeight;
      const newIndex = Math.round(scrollTop / sectionHeight);
      setActiveIndex(Math.min(Math.max(newIndex, 0), sectionCount - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef, sectionCount]);

  const scrollTo = useCallback((index) => {
    const container = containerRef.current;
    if (!container || isScrolling.current) return;

    isScrolling.current = true;
    const sectionHeight = container.clientHeight;
    container.scrollTo({
      top: sectionHeight * index,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  }, [containerRef]);

  const scrollNext = useCallback(() => {
    scrollTo(Math.min(activeIndex + 1, sectionCount - 1));
  }, [activeIndex, sectionCount, scrollTo]);

  const scrollPrev = useCallback(() => {
    scrollTo(Math.max(activeIndex - 1, 0));
  }, [activeIndex, scrollTo]);

  return {
    activeIndex,
    scrollProgress,
    scrollTo,
    scrollNext,
    scrollPrev,
  };
}
