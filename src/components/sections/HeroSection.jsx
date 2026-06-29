import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ scrollToNext }) {
  return (
    <section
      id="section-hero"
      className="snap-section paper-grain paper-aged relative overflow-hidden"
      style={{ background: 'var(--paper-bg)' }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto w-full">
        {/* Newspaper Masthead */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mb-6"
        >
          <h1
            className="font-playfair font-black tracking-[0.4em] uppercase text-2xl sm:text-3xl md:text-4xl"
            style={{ color: 'var(--headline-red)' }}
          >
            Lịch sử Đảng - VNR
          </h1>
          <div className="newspaper-divider-double mt-2" />
          <p className="font-jetbrains text-xs tracking-[0.2em] mt-2" style={{ color: 'var(--muted)' }}>
            SỐ ĐẶC BIỆT · 1961–1965
          </p>
        </motion.div>

        {/* Historical Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mb-6"
        >
          <div className="relative overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <img
              src={`${import.meta.env.BASE_URL}image/dai_hoi_III_1960.jpg`}
              alt="Đại hội đại biểu toàn quốc lần thứ III, 1960"
              className="w-full h-56 sm:h-72 md:h-80 object-cover"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full text-left"
        >
          <div className="newspaper-divider-thick" />
          <h2
            className="font-playfair font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-4 mb-3"
            style={{ color: 'var(--ink)' }}
          >
            XÂY DỰNG{' '}
            <span style={{ color: 'var(--headline-red)' }}>CHỦ NGHĨA XÃ HỘI</span>
            {' '}Ở MIỀN BẮC
          </h2>
          <p className="font-serif text-base sm:text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
            Phát triển thế tiến công của cách mạng miền Nam · 1961–1965
          </p>
          <div className="newspaper-divider" />
        </motion.div>

        {/* Animated timeline bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center gap-4 my-6 w-full justify-center"
        >
          <span className="font-jetbrains text-sm font-bold" style={{ color: 'var(--gold)' }}>
            1960
          </span>
          <div className="relative h-[2px] w-48 sm:w-64 md:w-80 overflow-hidden" style={{ background: 'var(--border)' }}>
            <motion.div
              className="absolute inset-y-0 left-0 h-full"
              style={{ background: 'linear-gradient(90deg, var(--headline-red), var(--gold))' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, delay: 1.2, ease: 'easeInOut' }}
            />
          </div>
          <span className="font-jetbrains text-sm font-bold" style={{ color: 'var(--gold)' }}>
            1965
          </span>
        </motion.div>

        {/* CTA + Date badge row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-between w-full mt-4"
        >
          <button
            id="hero-cta"
            onClick={scrollToNext}
            className="font-serif font-semibold text-sm px-6 py-2.5 transition-all duration-300"
            style={{
              background: 'transparent',
              color: 'var(--headline-red)',
              border: '2px solid var(--headline-red)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--headline-red)';
              e.target.style.color = 'var(--paper-bg)';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--headline-red)';
            }}
          >
            Bắt đầu đọc →
          </button>

          <div className="date-badge hidden sm:inline-flex">
            Ngày phát hành: 1961–1965
          </div>
        </motion.div>

        {/* Footer credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10"
        >
          <p className="font-serif text-xs" style={{ color: 'var(--border)' }}>
            Lịch sử Đảng Cộng sản Việt Nam · FPTU HCM
          </p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} style={{ color: 'var(--muted)' }} />
      </motion.div>
    </section>
  );
}
