import { useState } from 'react';
import { motion } from 'framer-motion';
import KHNamNamTab from './KHNamNamTab';
import ChiVienTab from './ChiVienTab';

const tabs = [
  { id: 'kh5nam', label: 'Kế hoạch 5 năm' },
  { id: 'chivien', label: 'Chi viện miền Nam' },
];

export default function MienBacSection() {
  const [activeTab, setActiveTab] = useState('kh5nam');

  return (
    <section
      id="section-mienbac"
      className="snap-section paper-grain relative overflow-hidden"
      style={{ background: 'var(--paper-bg)', minHeight: '100vh' }}
    >
      <div className="w-full h-full flex flex-col px-6 md:px-12 py-16 overflow-y-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px]" style={{ background: 'var(--headline-red)' }} />
            <span className="font-jetbrains text-xs tracking-widest uppercase" style={{ color: 'var(--headline-red)' }}>
              Phần 2 & 3
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl" style={{ color: 'var(--ink)' }}>
            Miền Bắc xây dựng CNXH
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div className="flex gap-1 mb-8" style={{ borderBottom: '1px solid var(--border)' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1"
        >
          {activeTab === 'kh5nam' ? <KHNamNamTab /> : <ChiVienTab />}
        </motion.div>
      </div>
    </section>
  );
}
