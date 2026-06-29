import { motion } from 'framer-motion';

export default function ProgressBar({ progress }) {
  return (
    <div
      id="progress-bar"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px]"
      style={{ background: 'var(--border)', opacity: 0.3 }}
    >
      <motion.div
        className="h-full origin-left"
        style={{
          background: 'linear-gradient(90deg, var(--headline-red), var(--gold))',
          scaleX: progress,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
}
