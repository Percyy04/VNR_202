import { motion } from 'framer-motion';

const sectionNames = ['Trang nhất', 'Đại hội III', 'Miền Bắc', 'Miền Nam', 'Thực tiễn'];

export default function DotIndicator({ activeIndex, scrollTo, isPresentationMode }) {
  return (
    <div
      id="dot-indicator"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3"
    >
      {sectionNames.map((name, i) => (
        <button
          key={i}
          id={`dot-${i}`}
          onClick={() => scrollTo(i)}
          className="group flex items-center gap-3 cursor-pointer"
          title={name}
          style={{ background: 'transparent', border: 'none' }}
        >
          {/* Label on hover */}
          <span
            className="text-xs font-serif font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
            style={{ color: 'var(--ink)' }}
          >
            {name}
          </span>

          {/* Dot */}
          <div className="relative flex items-center justify-center">
            {activeIndex === i && (
              <motion.div
                layoutId="activeDotRing"
                className="absolute rounded-full"
                style={{
                  width: 20,
                  height: 20,
                  border: '1.5px solid var(--gold)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <motion.div
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 10 : 6,
                height: activeIndex === i ? 10 : 6,
                background: activeIndex === i ? 'var(--gold)' : 'var(--border)',
              }}
              animate={{
                scale: activeIndex === i ? 1 : 0.8,
              }}
              whileHover={{ scale: 1.3 }}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
