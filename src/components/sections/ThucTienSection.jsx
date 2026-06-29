import { motion } from 'framer-motion';

const MODERN_IMAGES = {
  'tinh-than': `${import.meta.env.BASE_URL}image/daiphong.jpg`,
  'duong-559': `${import.meta.env.BASE_URL}image/duyenhai.webp`,
  'ba-mui': `${import.meta.env.BASE_URL}image/thanhcong.jpg`,
};

const lessons = [
  {
    id: 'tinh-than',
    lesson: 'Tinh thần "làm việc bằng hai"',
    detail: 'Miền Bắc huy động toàn dân lao động sản xuất, mỗi người làm việc bằng hai để xây dựng hậu phương vững chắc cho tiền tuyến.',
    modern: 'Chuyển đổi số quốc gia 2025',
    modernDetail: 'Chương trình "Make in Vietnam", chuyển đổi số toàn diện, tăng năng suất lao động qua công nghệ. Tinh thần tự lực, sáng tạo vẫn là động lực phát triển.',
  },
  {
    id: 'duong-559',
    lesson: 'Đường 559 – Hậu cần chiến lược',
    detail: 'Tuyến đường Trường Sơn là kỳ công hậu cần vĩ đại, kết nối hậu phương miền Bắc với tiền tuyến miền Nam, vận chuyển hàng triệu tấn vật tư.',
    modern: 'Hạ tầng logistics Việt Nam',
    modernDetail: 'Cao tốc Bắc – Nam, cảng biển Lạch Huyện, sân bay Long Thành. Hạ tầng giao thông hiện đại là "đường Trường Sơn" của thời kỳ hội nhập.',
  },
  {
    id: 'ba-mui',
    lesson: '3 mũi giáp công – Phối hợp toàn diện',
    detail: 'Kết hợp chính trị, quân sự, binh vận trên cả ba vùng chiến lược, tạo sức mạnh tổng hợp đánh bại chiến tranh đặc biệt.',
    modern: 'Kinh tế kết hợp quốc phòng',
    modernDetail: 'Phát triển kinh tế kết hợp quốc phòng – an ninh, ngoại giao đa phương, bảo vệ chủ quyền biển đảo. Bài học phối hợp toàn diện vẫn còn nguyên giá trị.',
  },
];

export default function ThucTienSection() {
  return (
    <section
      id="section-thuctien"
      className="snap-section paper-grain relative overflow-hidden"
      style={{ background: 'var(--paper-bg)' }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16 flex flex-col justify-center h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="newspaper-divider-double" />
          <h2 className="font-playfair font-black text-3xl md:text-4xl my-3 tracking-wide uppercase" style={{ color: 'var(--ink)' }}>
            Từ 1965 đến 2025
          </h2>
          <div className="newspaper-divider-double" />
          <p className="font-serif text-base italic mt-3 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Những bài học lịch sử vẫn mang giá trị sống động trong công cuộc xây dựng đất nước hôm nay
          </p>
        </motion.div>

        {/* 3 Split Comparison Rows */}
        <div className="space-y-12">
          {lessons.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {/* History Side (Vintage) */}
              <div
                className="w-full md:w-5/12 p-6"
                style={{
                  background: 'var(--paper-dark)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3 className="font-playfair font-bold text-xl mb-3" style={{ color: 'var(--ink)' }}>
                  {item.lesson}
                </h3>
                <p className="font-serif text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {item.detail}
                </p>
              </div>

              {/* Connecting Arrow */}
              <div className="w-full md:w-2/12 flex justify-center py-2 md:py-0">
                <div className="hidden md:block w-full h-px" style={{ background: 'var(--ink)', position: 'relative' }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2" 
                       style={{ borderTop: '1px solid var(--ink)', borderRight: '1px solid var(--ink)', transform: 'translateY(-50%) rotate(45deg)' }} />
                </div>
                <div className="md:hidden h-8 w-px" style={{ background: 'var(--ink)', position: 'relative' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2" 
                       style={{ borderBottom: '1px solid var(--ink)', borderRight: '1px solid var(--ink)', transform: 'translateX(-50%) rotate(45deg)' }} />
                </div>
              </div>

              {/* Modern Side (Modern photo & text) */}
              <div className="w-full md:w-5/12 flex items-center gap-4">
                <div className="w-24 h-24 shrink-0 overflow-hidden" style={{ border: '2px solid white', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
                  <img src={MODERN_IMAGES[item.id]} alt={item.modern} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-lg mb-2" style={{ color: 'var(--ink)' }}>
                    {item.modern}
                  </h4>
                  <p className="font-inter text-xs leading-relaxed" style={{ color: '#444' }}>
                    {item.modernDetail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="newspaper-divider" />
          <p className="font-serif text-xs uppercase tracking-widest mt-4" style={{ color: 'var(--muted)' }}>
            HẾT SỐ ĐẶC BIỆT
          </p>
        </motion.div>
      </div>
    </section>
  );
}
