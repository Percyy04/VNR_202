import { motion, AnimatePresence } from 'framer-motion';
import { Presentation, Menu, X } from 'lucide-react';
import { useState } from 'react';

const sections = [
  { id: 'hero', label: 'Trang nhất' },
  { id: 'daihoi', label: 'Đại hội III' },
  { id: 'mienbac', label: 'Miền Bắc' },
  { id: 'miennam', label: 'Miền Nam' },
  { id: 'thuctien', label: 'Thực tiễn' },
];

export default function Nav({ activeIndex, scrollTo, isPresentationMode, togglePresentation }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (isPresentationMode) return null;

  return (
    <motion.nav
      id="main-nav"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-2.5 flex items-center justify-between"
      style={{
        background: 'rgba(244, 231, 208, 0.92)',
        borderBottom: '2px solid var(--ink)',
      }}
    >
      {/* Masthead */}
      <div className="flex items-center gap-3">
        <span
          className="font-playfair text-sm font-bold tracking-widest uppercase"
          style={{ color: 'var(--headline-red)' }}
        >
          NHÂN DÂN
        </span>
        <span className="hidden sm:inline font-jetbrains text-xs" style={{ color: 'var(--muted)' }}>
          · 1961–1965
        </span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-1">
        {sections.map((sec, i) => (
          <button
            key={sec.id}
            id={`nav-${sec.id}`}
            onClick={() => scrollTo(i)}
            className="px-3 py-1.5 text-sm font-serif font-medium transition-all duration-300"
            style={{
              color: activeIndex === i ? 'var(--headline-red)' : 'var(--muted)',
              borderBottom: activeIndex === i ? '2px solid var(--headline-red)' : '2px solid transparent',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2">

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: 'var(--ink)', background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 md:hidden py-2 px-4"
            style={{
              background: 'rgba(244, 231, 208, 0.97)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {sections.map((sec, i) => (
              <button
                key={sec.id}
                onClick={() => { scrollTo(i); setMobileOpen(false); }}
                className="block w-full text-left px-4 py-2.5 text-sm font-serif font-medium transition-all duration-200"
                style={{
                  color: activeIndex === i ? 'var(--headline-red)' : 'var(--muted)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {sec.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
