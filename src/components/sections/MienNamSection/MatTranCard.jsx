import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function MatTranCard() {
  return (
    <div className="horizontal-panel">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
        style={{
          background: 'var(--paper-light)',
          border: '1px solid var(--border)',
          boxShadow: '4px 4px 0 rgba(26, 26, 26, 0.1)',
        }}
      >
        {/* Photo Left */}
        <div className="w-full md:w-5/12">
          <img
            src={`${import.meta.env.BASE_URL}image/02_dai_hoi_III_1960.jpg`}
            alt="Lễ thành lập Mặt trận Dân tộc Giải phóng miền Nam"
            className="newspaper-img w-full h-auto object-cover"
            style={{ border: '1px solid var(--border)' }}
          />
          <p className="font-serif text-xs italic mt-2 text-center" style={{ color: 'var(--muted)' }}>
            Lễ thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam
          </p>
        </div>

        {/* Content Right */}
        <div className="w-full md:w-7/12 flex flex-col justify-center">
          {/* Date badge */}
          <div className="date-badge mb-4 self-start">
            <Calendar size={14} />
            <span>20/12/1960</span>
          </div>

          <h3 className="font-playfair font-black text-3xl md:text-4xl mb-2" style={{ color: 'var(--ink)' }}>
            Mặt trận Dân tộc Giải phóng miền Nam
          </h3>
          <div className="newspaper-divider" />

          {/* Description */}
          <div className="space-y-4 font-serif text-base leading-relaxed text-justify" style={{ color: 'var(--ink)' }}>
            <p>
              Ngày 20/12/1960, <strong>Mặt trận Dân tộc Giải phóng miền Nam Việt Nam</strong> được
              thành lập, đáp ứng yêu cầu cấp thiết của phong trào cách mạng miền Nam sau phong trào Đồng khởi.
            </p>
            <p>
              Mặt trận đóng vai trò tập hợp rộng rãi mọi lực lượng yêu nước,
              không phân biệt giai cấp, tôn giáo, dân tộc, đoàn kết đấu tranh chống đế quốc Mỹ và tay sai,
              nhằm giải phóng miền Nam, thống nhất Tổ quốc.
            </p>
            <p>
              Ngay sau khi thành lập, Mặt trận đã công bố <strong style={{ color: 'var(--headline-red)' }}>Chương trình 10 điểm</strong>, nêu rõ mục tiêu
              đánh đổ chế độ thuộc địa trá hình của đế quốc Mỹ và chính quyền tay sai.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
