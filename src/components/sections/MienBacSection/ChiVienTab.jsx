import { motion } from 'framer-motion';
import { useState } from 'react';
import { Truck, Ship, Users, Package } from 'lucide-react';

export default function ChiVienTab() {
  const [hoveredRoute, setHoveredRoute] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* SVG Map - 3 cols */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-3 flex items-center justify-center relative p-4"
        style={{ background: 'var(--paper-light)', border: '1px solid var(--border)' }}
      >
        <svg viewBox="0 0 300 500" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
          {/* Vietnam outline */}
          <path
            d="M150,10 C160,10 180,20 185,35 C190,50 195,55 200,60
               C205,65 210,75 205,90 C200,105 195,110 200,125
               C205,140 210,145 205,160 C200,175 195,180 200,200
               C205,220 215,230 220,240 C225,250 230,260 225,275
               C220,290 210,300 200,310 C190,320 185,330 180,345
               C175,360 170,375 165,390 C160,405 155,415 150,425
               C145,435 140,440 135,445 C130,450 120,455 115,445
               C110,435 115,425 120,415 C125,405 130,395 125,380
               C120,365 115,355 110,340 C105,325 100,315 95,305
               C90,295 85,285 80,270 C75,255 80,245 85,235
               C90,225 95,215 90,200 C85,185 80,175 85,160
               C90,145 95,135 100,120 C105,105 110,95 115,80
               C120,65 125,50 130,40 C135,30 140,10 150,10Z"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <path
            d="M150,10 C160,10 180,20 185,35 C190,50 195,55 200,60
               C205,65 210,75 205,90 C200,105 195,110 200,125
               C205,140 210,145 205,160 C200,175 195,180 200,200
               C205,220 215,230 220,240 C225,250 230,260 225,275
               C220,290 210,300 200,310 C190,320 185,330 180,345
               C175,360 170,375 165,390 C160,405 155,415 150,425
               C145,435 140,440 135,445 C130,450 120,455 115,445
               C110,435 115,425 120,415 C125,405 130,395 125,380
               C120,365 115,355 110,340 C105,325 100,315 95,305
               C90,295 85,285 80,270 C75,255 80,245 85,235
               C90,225 95,215 90,200 C85,185 80,175 85,160
               C90,145 95,135 100,120 C105,105 110,95 115,80
               C120,65 125,50 130,40 C135,30 140,10 150,10Z"
            fill="var(--paper-dark)"
            opacity="0.5"
          />

          {/* Demarcation line */}
          <line x1="70" y1="175" x2="210" y2="175" stroke="var(--ink)" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
          <text x="215" y="178" fill="var(--muted)" fontSize="7" fontFamily="JetBrains Mono">Vĩ tuyến 17</text>

          {/* Hanoi */}
          <circle cx="155" cy="85" r="4" fill="var(--headline-red)" />
          <text x="165" y="88" fill="var(--ink)" fontSize="9" fontFamily="Source Serif 4" fontWeight="600">Hà Nội</text>

          {/* Saigon */}
          <circle cx="165" cy="395" r="4" fill="var(--gold)" />
          <text x="175" y="398" fill="var(--ink)" fontSize="9" fontFamily="Source Serif 4" fontWeight="600">Sài Gòn</text>

          {/* Route 559 */}
          <path
            d="M155,95 C140,120 125,140 115,165 C105,190 95,210 90,235 C85,260 95,285 105,310 C115,335 125,360 140,380 C150,395 160,400 165,395"
            fill="none"
            stroke="var(--headline-red)"
            strokeWidth={hoveredRoute === '559' ? 3 : 2}
            className="animated-dash"
            opacity={hoveredRoute === '759' ? 0.25 : 0.8}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setHoveredRoute('559')}
            onMouseLeave={() => setHoveredRoute(null)}
          />
          <text x="68" y="250" fill="var(--headline-red)" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700"
            opacity={hoveredRoute === '759' ? 0.25 : 1}>Đường 559</text>

          {/* Route 759 */}
          <path
            d="M170,90 C185,100 195,115 205,140 C215,165 220,185 225,210 C230,235 235,260 230,285 C225,310 215,330 200,350 C185,370 175,385 170,395"
            fill="none"
            stroke="var(--gold)"
            strokeWidth={hoveredRoute === '759' ? 3 : 2}
            className="animated-dash"
            opacity={hoveredRoute === '559' ? 0.25 : 0.8}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setHoveredRoute('759')}
            onMouseLeave={() => setHoveredRoute(null)}
          />
          <text x="232" y="250" fill="var(--gold)" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700"
            opacity={hoveredRoute === '559' ? 0.25 : 1}>Đường 759</text>

          {/* Legend */}
          <g transform="translate(10, 445)">
            <line x1="0" y1="0" x2="18" y2="0" stroke="var(--headline-red)" strokeWidth="2" strokeDasharray="4 3" />
            <text x="22" y="3" fill="var(--muted)" fontSize="7" fontFamily="Source Serif 4">Đường bộ (Trường Sơn)</text>
            <line x1="0" y1="14" x2="18" y2="14" stroke="var(--gold)" strokeWidth="2" strokeDasharray="4 3" />
            <text x="22" y="17" fill="var(--muted)" fontSize="7" fontFamily="Source Serif 4">Đường biển</text>
          </g>
        </svg>

        {/* Tooltip */}
        {hoveredRoute && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-3 max-w-[280px]"
            style={{
              background: 'var(--paper-light)',
              border: `1px solid ${hoveredRoute === '559' ? 'var(--headline-red)' : 'var(--gold)'}`,
            }}
          >
            <p className="font-playfair font-bold text-sm mb-1"
              style={{ color: hoveredRoute === '559' ? 'var(--headline-red)' : 'var(--gold)' }}>
              {hoveredRoute === '559' ? 'Đường Trường Sơn (559)' : 'Đường Hồ Chí Minh trên biển (759)'}
            </p>
            <p className="font-serif text-xs" style={{ color: 'var(--muted)' }}>
              {hoveredRoute === '559'
                ? 'Tuyến đường bộ chiến lược xuyên dãy Trường Sơn, vận chuyển binh lực và vũ khí từ Bắc vào Nam. Khai mở tháng 5/1959.'
                : 'Tuyến vận tải biển bí mật, dùng tàu giả dạng tàu đánh cá để chuyển vũ khí vào vùng ven biển miền Nam. Khai mở tháng 7/1959.'}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Stats panel – Newspaper side notes (2 cols) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="lg:col-span-2 flex flex-col justify-center gap-4"
      >
        <h3 className="font-playfair font-bold text-2xl mb-2" style={{ color: 'var(--ink)' }}>
          Chi viện miền Nam
        </h3>
        <p className="font-serif text-sm leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
          Miền Bắc dốc sức chi viện cho miền Nam qua hai tuyến đường chiến lược, đưa hàng vạn cán bộ, chiến sĩ và vũ khí vào chiến trường.
        </p>

        <div className="space-y-3">
          <div className="side-note flex items-center gap-3">
            <Users size={20} style={{ color: 'var(--headline-red)', flexShrink: 0 }} />
            <div>
              <p className="font-jetbrains font-bold text-lg" style={{ color: 'var(--headline-red)' }}>Hàng vạn</p>
              <p className="font-serif text-xs" style={{ color: 'var(--muted)' }}>Cán bộ, chiến sĩ chi viện</p>
            </div>
          </div>

          <div className="side-note flex items-center gap-3">
            <Package size={20} style={{ color: 'var(--gold)', flexShrink: 0 }} />
            <div>
              <p className="font-jetbrains font-bold text-lg" style={{ color: 'var(--gold)' }}>Hàng nghìn tấn</p>
              <p className="font-serif text-xs" style={{ color: 'var(--muted)' }}>Vũ khí, lương thực, thuốc men</p>
            </div>
          </div>

          <div className="side-note flex items-center gap-3">
            <Truck size={20} style={{ color: 'var(--headline-red)', flexShrink: 0 }} />
            <div>
              <p className="font-jetbrains font-bold text-base" style={{ color: 'var(--headline-red)' }}>Đường 559</p>
              <p className="font-serif text-xs" style={{ color: 'var(--muted)' }}>Khai mở 5/1959 – tuyến bộ Trường Sơn</p>
            </div>
          </div>

          <div className="side-note flex items-center gap-3">
            <Ship size={20} style={{ color: 'var(--gold)', flexShrink: 0 }} />
            <div>
              <p className="font-jetbrains font-bold text-base" style={{ color: 'var(--gold)' }}>Đường 759</p>
              <p className="font-serif text-xs" style={{ color: 'var(--muted)' }}>Khai mở 7/1959 – tuyến biển bí mật</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
