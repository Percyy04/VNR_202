import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { phongTrao, iconMap } from '../../../data/phongTrao';

const PHONG_TRAO_IMAGES = [
  `${import.meta.env.BASE_URL}image/daiphong.jpg`,
  `${import.meta.env.BASE_URL}image/duyenhai.webp`,
  `${import.meta.env.BASE_URL}image/thanhcong.jpg`,
  `${import.meta.env.BASE_URL}image/bacly.jpg`,
  `${import.meta.env.BASE_URL}image/banhat.jpg`,
];

export default function KHNamNamTab() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h3 className="font-playfair font-bold text-2xl md:text-3xl mb-2" style={{ color: 'var(--ink)' }}>
          Kế hoạch Nhà nước 5 năm lần thứ nhất
        </h3>
        <div className="date-badge mb-4">1961 – 1965</div>
        <p className="font-serif text-base leading-relaxed max-w-3xl" style={{ color: 'var(--muted)' }}>
          Mục tiêu: bước đầu xây dựng cơ sở vật chất – kỹ thuật của CNXH, thực hiện{' '}
          <strong style={{ color: 'var(--ink)' }}>công nghiệp hóa XHCN</strong>, hoàn thành
          cải tạo xã hội chủ nghĩa, cải thiện đời sống nhân dân.
        </p>
      </motion.div>

      {/* 5 Phong trào – Newspaper feature blocks (3-column grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
        {phongTrao.map((pt, i) => {
          const IconComponent = iconMap[pt.icon];
          const isExpanded = expandedId === pt.id;

          return (
            <motion.div
              key={pt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="newspaper-block cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : pt.id)}
            >
              {/* Photo */}
              <div className="overflow-hidden">
                <img
                  src={PHONG_TRAO_IMAGES[i]}
                  alt={pt.name}
                  className="newspaper-img w-full object-cover transition-transform duration-400"
                  style={{ height: 160 }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {IconComponent && <IconComponent size={18} color={pt.color} />}
                  <h4 className="font-playfair font-bold text-base" style={{ color: 'var(--ink)' }}>
                    {pt.name}
                  </h4>
                </div>
                <p className="font-jetbrains text-xs" style={{ color: pt.color }}>
                  {pt.field}
                </p>

                {/* Expanded description */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="newspaper-divider" />
                      <p className="font-serif text-sm leading-relaxed mt-2" style={{ color: 'var(--muted)' }}>
                        {pt.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quote – Pull quote newspaper style */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="quote-block max-w-3xl"
      >
        <p>
          "Mỗi người làm việc bằng hai để đền đáp lại cho đồng bào miền Nam ruột thịt"
        </p>
        <p className="font-jetbrains text-xs mt-2 not-italic" style={{ color: 'var(--muted)' }}>
          — Hồ Chí Minh, tháng 3/1964
        </p>
      </motion.div>
    </div>
  );
}
