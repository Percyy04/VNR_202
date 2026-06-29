import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <section
      id="section-footer"
      className="snap-section paper-grain relative flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24"
      style={{ background: 'var(--paper-dark)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full mx-auto"
      >
        <div className="newspaper-divider-double mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Subject & Info */}
          <div className="flex flex-col">
            <h2 className="font-playfair font-black text-4xl mb-4 uppercase" style={{ color: 'var(--ink)' }}>
              VNR202
            </h2>
            <h3 className="font-playfair font-bold text-xl mb-4 uppercase" style={{ color: 'var(--headline-red)' }}>
              Lịch sử Đảng Cộng sản Việt Nam
            </h3>
            <p className="font-serif text-sm leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
              Chuyên đề: Đại hội III & Cách mạng Việt Nam (1961 - 1965)
            </p>
            <div className="mt-auto">
              <span className="font-jetbrains text-xs tracking-widest uppercase font-bold" style={{ color: 'var(--ink)' }}>
                FPT University
              </span>
            </div>
          </div>

          {/* Column 2: Team Members */}
          <div className="flex flex-col">
            <h4 className="font-jetbrains text-sm font-bold tracking-widest uppercase mb-6" style={{ color: 'var(--ink)' }}>
              Thành viên Nhóm 2
            </h4>
            <ul className="font-serif text-lg space-y-3" style={{ color: 'var(--ink)' }}>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-800" /> Đặng Trường Phát
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-800" /> Trương Sỹ Nam
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-800" /> Trần Thị Minh Thư
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-800" /> Phùng Ngọc Tú Uyên
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-800" /> Phùng Trung Quốc
              </li>
            </ul>
          </div>

          {/* Column 3: AI & References */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h4 className="font-jetbrains text-sm font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--ink)' }}>
                Báo cáo sử dụng công cụ AI
              </h4>
              <p className="font-serif text-sm italic mb-2" style={{ color: 'var(--muted)' }}>
                Báo cáo định lượng và cách thức dùng AI
              </p>
              <p className="font-serif text-sm font-bold uppercase" style={{ color: 'var(--headline-red)' }}>
                Minh bạch và trách nhiệm học thuật
              </p>
            </div>
            
            <div>
              <h4 className="font-jetbrains text-sm font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--ink)' }}>
                Tài liệu tham khảo chính thức
              </h4>
              <p className="font-serif text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                Giáo trình Lịch sử Đảng Cộng sản Việt Nam<br />
                Văn kiện Đại hội Đại biểu Toàn quốc lần thứ III<br />
                Báo Nhân Dân (Lưu trữ lịch sử)
              </p>
            </div>
          </div>

        </div>

        <div className="newspaper-divider-thick mt-12 mb-6" />
        
        <div className="text-center">
          <p className="font-jetbrains text-xs" style={{ color: 'var(--muted)' }}>
            © 2026. Dự án thực hiện cho môn học Lịch sử Đảng. Designed with ❤️
          </p>
        </div>
      </motion.div>
    </section>
  );
}
