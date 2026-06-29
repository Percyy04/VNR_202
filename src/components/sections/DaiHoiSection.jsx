import { motion } from 'framer-motion';
import { Target, Flag } from 'lucide-react';

export default function DaiHoiSection() {
  return (
    <section
      id="section-daihoi"
      className="snap-section paper-grain relative overflow-hidden"
      style={{ background: 'var(--paper-dark)' }}
    >
      <div className="w-full max-w-6xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Left Column – Historical Photo (2 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div style={{ border: '1px solid var(--border)' }}>
            <img
              src={`${import.meta.env.BASE_URL}image/02_dai_hoi_III_1960.jpg`}
              alt="Đại hội đại biểu toàn quốc lần thứ III"
              className="newspaper-img w-full object-cover"
              style={{ height: 380 }}
            />
          </div>
          <p className="font-serif text-xs italic mt-2" style={{ color: 'var(--muted)' }}>
            Ảnh tư liệu: Quang cảnh Đại hội đại biểu toàn quốc lần thứ III của Đảng, tháng 9/1960
          </p>
        </motion.div>

        {/* Right Column – Article (3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-3"
        >
          {/* Section label */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px]" style={{ background: 'var(--headline-red)' }} />
            <span className="font-jetbrains text-xs tracking-widest uppercase" style={{ color: 'var(--headline-red)' }}>
              Phần 1
            </span>
          </div>

          <h2
            className="font-playfair font-black text-3xl md:text-4xl leading-tight mb-1"
            style={{ color: 'var(--ink)' }}
          >
            ĐẠI HỘI ĐẠI BIỂU
          </h2>
          <h2
            className="font-playfair font-black text-3xl md:text-4xl leading-tight mb-1"
            style={{ color: 'var(--headline-red)' }}
          >
            TOÀN QUỐC LẦN THỨ III
          </h2>
          <div className="date-badge mt-2 mb-4">
            Tháng 9/1960 · Hà Nội
          </div>

          <div className="newspaper-divider" />

          {/* 2-column article text */}
          <div className="editorial-columns mt-4 mb-6" style={{ color: 'var(--ink)' }}>
            <p className="mb-3">
              Đại hội đại biểu toàn quốc lần thứ III của Đảng là sự kiện chính trị quan trọng,
              đề ra đường lối chiến lược cho cách mạng cả nước trong giai đoạn mới.
            </p>
            <p className="mb-3">
              Đại hội đã xác định đồng thời tiến hành hai nhiệm vụ chiến lược:
              cách mạng xã hội chủ nghĩa ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam,
              nhằm thực hiện mục tiêu chung là thống nhất đất nước.
            </p>
            <p>
              Hai nhiệm vụ chiến lược có quan hệ mật thiết và tác động lẫn nhau,
              trong đó cách mạng miền Bắc giữ vai trò quyết định nhất đối với sự phát triển
              của toàn bộ cách mạng Việt Nam.
            </p>
          </div>

          {/* Two strategic tasks */}
          <div className="space-y-3 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-3 p-3"
              style={{ border: '1px solid var(--border)', background: 'var(--paper-light)' }}
            >
              <Target size={18} style={{ color: 'var(--headline-red)', marginTop: 2, flexShrink: 0 }} />
              <div>
                <p className="font-playfair font-bold text-sm mb-1" style={{ color: 'var(--ink)' }}>
                  Nhiệm vụ 1: Cách mạng XHCN ở miền Bắc
                </p>
                <p className="font-serif text-sm" style={{ color: 'var(--muted)' }}>
                  Xây dựng miền Bắc thành căn cứ vững mạnh cho cách mạng cả nước
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex items-start gap-3 p-3"
              style={{ border: '1px solid var(--border)', background: 'var(--paper-light)' }}
            >
              <Flag size={18} style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }} />
              <div>
                <p className="font-playfair font-bold text-sm mb-1" style={{ color: 'var(--ink)' }}>
                  Nhiệm vụ 2: Cách mạng dân tộc dân chủ nhân dân ở miền Nam
                </p>
                <p className="font-serif text-sm" style={{ color: 'var(--muted)' }}>
                  Giải phóng miền Nam, thống nhất đất nước
                </p>
              </div>
            </motion.div>
          </div>

          {/* Role of each region */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div
              className="flex items-center gap-3 px-4 py-3 flex-1"
              style={{ border: '1px solid var(--headline-red)', background: 'rgba(158, 27, 27, 0.04)' }}
            >
              <span className="text-lg">🔴</span>
              <div>
                <p className="font-serif font-semibold text-xs" style={{ color: 'var(--headline-red)' }}>Miền Bắc</p>
                <p className="font-playfair font-bold text-sm" style={{ color: 'var(--ink)' }}>Quyết định nhất</p>
              </div>
            </div>
            <div
              className="flex items-center gap-3 px-4 py-3 flex-1"
              style={{ border: '1px solid var(--gold)', background: 'rgba(184, 134, 11, 0.04)' }}
            >
              <span className="text-lg">🟡</span>
              <div>
                <p className="font-serif font-semibold text-xs" style={{ color: 'var(--gold)' }}>Miền Nam</p>
                <p className="font-playfair font-bold text-sm" style={{ color: 'var(--ink)' }}>Quyết định trực tiếp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
