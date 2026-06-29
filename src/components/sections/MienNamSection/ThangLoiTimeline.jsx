import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X as CloseIcon, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { thangLoi } from '../../../data/thangLoi';

const THANG_LOI_IMAGES = {
  apbac: `${import.meta.env.BASE_URL}image/session4/apbac.jpg`,
  phatgiao: `${import.meta.env.BASE_URL}image/session4/phatgiao.webp`,
  latdo: `${import.meta.env.BASE_URL}image/session4/ngodinhdiem.jpg`,
  binhgia: `${import.meta.env.BASE_URL}image/session4/binhgia.jpg`,
  bagia: `${import.meta.env.BASE_URL}image/session4/baiga.jpg`,
  dongxoai: `${import.meta.env.BASE_URL}image/session4/dongxoai.jpg`,
};

export default function ThangLoiTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="horizontal-panel flex-col relative">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="newspaper-divider-double" />
          <h3 className="font-playfair font-black text-2xl md:text-3xl my-3 tracking-wide uppercase" style={{ color: 'var(--ink)' }}>
            Biên niên sử Chiến thắng
          </h3>
          <div className="newspaper-divider-double" />
          <p className="font-serif text-sm italic" style={{ color: 'var(--muted)' }}>
            Bẻ gãy chiến lược "Chiến tranh đặc biệt" của Đế quốc Mỹ
          </p>
        </motion.div>

        {/* Horizontal newspaper chronology */}
        <div className="relative mb-12 px-4 md:px-8">
          {/* Timeline line */}
          <div className="absolute top-[80px] left-8 right-8 h-[2px]" style={{ background: 'var(--ink)' }} />
          
          {/* Events */}
          <div className="flex justify-between relative">
            {thangLoi.map((event, i) => (
              <motion.button
                key={event.id}
                id={`event-${event.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center cursor-pointer group relative bg-transparent border-none"
                onClick={() => setSelectedEvent(event)}
                style={{ flex: 1, minWidth: 0 }}
              >
                {/* Photo thumbnail */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 border-2 transition-transform duration-300 group-hover:scale-110 relative z-10 bg-white"
                     style={{ borderColor: selectedEvent?.id === event.id ? 'var(--headline-red)' : 'var(--ink)' }}>
                  <img 
                    src={THANG_LOI_IMAGES[event.id]} 
                    alt={event.name} 
                    className="newspaper-img w-full h-full object-cover" 
                  />
                </div>

                {/* Node on line */}
                <div
                  className="w-4 h-4 rounded-full mb-3 relative z-10 transition-colors"
                  style={{
                    background: selectedEvent?.id === event.id ? 'var(--headline-red)' : 'var(--paper-bg)',
                    border: '2px solid var(--ink)',
                    marginTop: '-25px'
                  }}
                />

                {/* Date */}
                <span className="font-jetbrains text-xs font-bold mt-2 mb-1" style={{ color: 'var(--headline-red)' }}>
                  {event.date}
                </span>

                {/* Label */}
                <span
                  className="font-playfair font-bold text-xs md:text-sm text-center leading-tight hidden md:block px-1"
                  style={{ color: 'var(--ink)' }}
                >
                  {event.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal popup (Article Clipping) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setSelectedEvent(null)}
              style={{ zIndex: 9999 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: 20, rotate: 2 }}
                transition={{ type: 'spring', damping: 25 }}
                className="modal-content paper-grain"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  id="modal-close"
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-1 transition-colors hover:text-black bg-transparent border-none cursor-pointer"
                  style={{ color: 'var(--muted)' }}
                >
                  <CloseIcon size={24} />
                </button>

                <div className="date-badge mb-4 mt-2">
                  {selectedEvent.date}
                </div>

                <h3 className="font-playfair font-black text-2xl md:text-3xl mb-1 uppercase" style={{ color: 'var(--headline-red)' }}>
                  {selectedEvent.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={14} style={{ color: 'var(--ink)' }} />
                  <span className="font-jetbrains text-xs uppercase font-bold" style={{ color: 'var(--ink)' }}>
                    {selectedEvent.location}
                  </span>
                </div>

                <div className="newspaper-divider-thick" />

                <div className="flex flex-col sm:flex-row gap-6 mt-4 mb-4">
                  <div className="sm:w-1/2">
                     <img 
                      src={THANG_LOI_IMAGES[selectedEvent.id]} 
                      alt={selectedEvent.name} 
                      className="newspaper-img w-full h-auto object-cover border border-gray-400" 
                    />
                    <p className="font-serif text-[10px] italic mt-1 text-center" style={{ color: 'var(--muted)' }}>
                      Ảnh tư liệu: {selectedEvent.name}
                    </p>
                  </div>
                  
                  <div className="sm:w-1/2 font-serif text-sm leading-relaxed text-justify" style={{ color: 'var(--ink)' }}>
                    <p className="mb-3 first-letter:text-3xl first-letter:font-playfair first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-red-800">
                      {selectedEvent.description}
                    </p>
                    
                    <div className="side-note mt-4">
                      <p className="font-bold mb-1" style={{ color: 'var(--headline-red)' }}>KẾT QUẢ & Ý NGHĨA:</p>
                      <p className="mb-2">{selectedEvent.result}</p>
                      <p className="italic">{selectedEvent.significance}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  {thangLoi.findIndex(e => e.id === selectedEvent.id) > 0 && (
                    <button
                      onClick={() => {
                        const idx = thangLoi.findIndex(e => e.id === selectedEvent.id);
                        setSelectedEvent(thangLoi[idx - 1]);
                      }}
                      className="flex items-center gap-1 text-sm font-serif hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
                      style={{ color: 'var(--ink)' }}
                    >
                      <ChevronLeft size={16} /> Tin trước
                    </button>
                  )}
                  <div className="flex-1" />
                  {thangLoi.findIndex(e => e.id === selectedEvent.id) < thangLoi.length - 1 && (
                    <button
                      onClick={() => {
                        const idx = thangLoi.findIndex(e => e.id === selectedEvent.id);
                        setSelectedEvent(thangLoi[idx + 1]);
                      }}
                      className="flex items-center gap-1 text-sm font-serif hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
                      style={{ color: 'var(--ink)' }}
                    >
                      Tin tiếp <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
