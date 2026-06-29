import { motion } from 'framer-motion';

export default function AmMuuVsChutruong() {
  return (
    <div className="horizontal-panel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full"
      >
        <div className="text-center mb-8">
          <h3 className="font-playfair font-black text-3xl md:text-4xl" style={{ color: 'var(--ink)' }}>
            CHIẾN TRANH ĐẶC BIỆT
          </h3>
          <p className="font-jetbrains text-sm mt-2" style={{ color: 'var(--muted)' }}>
            GIAI ĐOẠN 1961 – 1965
          </p>
        </div>

        <div className="newspaper-divider-thick" />

        {/* Split newspaper columns */}
        <div className="flex flex-col md:flex-row gap-8 items-start relative mt-8">
          
          {/* US Strategy */}
          <div className="flex-1 w-full">
            <h4 className="font-playfair font-bold text-2xl mb-4 text-center" style={{ color: 'var(--headline-red)' }}>
              Âm mưu của Đế quốc Mỹ
            </h4>
            <div className="mb-4">
              <img
                src={`${import.meta.env.BASE_URL}image/02_dai_hoi_III_1960.jpg`}
                alt="Ấp chiến lược, trực thăng vận"
                className="newspaper-img w-full object-cover"
                style={{ height: 200, border: '1px solid var(--border)' }}
              />
              <p className="font-serif text-xs italic mt-2 text-center" style={{ color: 'var(--muted)' }}>
                Chiến thuật "Trực thăng vận" và "Thiết xa vận"
              </p>
            </div>
            
            <div className="font-serif text-sm leading-relaxed text-justify" style={{ color: 'var(--ink)' }}>
              <p className="mb-3">
                Đứng trước nguy cơ sụp đổ của chính quyền Ngô Đình Diệm sau phong trào Đồng khởi, 
                đế quốc Mỹ chuyển sang thực hiện chiến lược <strong>"Chiến tranh đặc biệt"</strong>.
              </p>
              <p className="mb-3">
                Đây là hình thức chiến tranh thực dân mới, được tiến hành bằng quân đội tay sai, 
                dưới sự chỉ huy của hệ thống cố vấn quân sự Mỹ, dựa vào vũ khí, trang bị kỹ thuật, 
                phương tiện chiến tranh của Mỹ.
              </p>
              <p>
                <strong>Trọng tâm:</strong> Dồn dân lập <em>"Ấp chiến lược"</em> hòng tách lực lượng cách mạng 
                ra khỏi nhân dân; sử dụng chiến thuật <em>"Trực thăng vận", "Thiết xa vận"</em> để tiêu diệt 
                lực lượng vũ trang cách mạng.
              </p>
            </div>
          </div>

          {/* Divider line in middle */}
          <div className="hidden md:block w-px self-stretch" style={{ background: 'var(--border)' }} />

          {/* Party Strategy */}
          <div className="flex-1 w-full">
            <h4 className="font-playfair font-bold text-2xl mb-4 text-center" style={{ color: 'var(--gold)' }}>
              Chủ trương của Đảng
            </h4>
            <div className="mb-4">
              <img
                src={`${import.meta.env.BASE_URL}image/dai_hoi_III_1960.jpg`}
                alt="Quân giải phóng miền Nam"
                className="newspaper-img w-full object-cover"
                style={{ height: 200, border: '1px solid var(--border)' }}
              />
              <p className="font-serif text-xs italic mt-2 text-center" style={{ color: 'var(--muted)' }}>
                Quân Giải phóng miền Nam tiến công địch
              </p>
            </div>
            
            <div className="font-serif text-sm leading-relaxed text-justify" style={{ color: 'var(--ink)' }}>
              <p className="mb-3">
                Tháng 1/1961 và tháng 2/1962, Bộ Chính trị ra nghị quyết về phương hướng và nhiệm vụ 
                công tác trước mắt của cách mạng miền Nam.
              </p>
              <p className="mb-3">
                Đảng chủ trương giữ vững thế tiến công, đưa đấu tranh vũ trang phát triển lên 
                song song với đấu tranh chính trị. Phương châm đấu tranh là kết hợp <strong>3 mũi giáp công</strong>: 
                chính trị, quân sự và binh vận.
              </p>
              <p>
                <strong>3 vùng chiến lược:</strong> Đánh địch trên cả 3 vùng: rừng núi, nông thôn đồng bằng 
                và đô thị. Mục tiêu kiên quyết phá tan kế hoạch lập "Ấp chiến lược" của địch, phát triển 
                mạnh mẽ chiến tranh du kích.
              </p>
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
