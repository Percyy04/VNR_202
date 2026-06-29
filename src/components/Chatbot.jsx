import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

const SYSTEM_PROMPT = `Bạn là trợ lý lịch sử chuyên về giai đoạn 1961-1965 của Việt Nam.
Chỉ trả lời các câu hỏi liên quan đến nội dung bài báo "NHÂN DÂN - SỐ ĐẶC BIỆT":
Đại hội III, Kế hoạch 5 năm miền Bắc, chi viện đường 559/759,
Mặt trận GPMN, chiến lược Chiến tranh đặc biệt, các trận Ấp Bắc,
Bình Giã, Ba Gia, Đồng Xoài.
Trả lời ngắn gọn, súc tích bằng tiếng Việt mang phong cách báo chí cũ.
Không bịa thêm thông tin ngoài phạm vi bài.`;

const PROXY_URL = import.meta.env.VITE_CHAT_PROXY_URL || '';
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY || '';

const SUGGESTED_QUESTIONS = [
  'Đại hội III có ý nghĩa gì?',
  'Đường 559 là gì?',
  'Ấp Bắc có gì đặc biệt?',
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || isLoading) return;

    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiMessages = newMessages.map(m => ({
        role: m.role,
        content: m.content,
      }));

      const url = PROXY_URL || 'https://api.anthropic.com/v1/messages';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 500,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg = data.content?.[0]?.text || 'Xin lỗi, tôi không thể trả lời lúc này.';

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMsg }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        id="chatbot-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 flex items-center justify-center shadow-md"
        style={{
          background: 'var(--paper-light)',
          color: 'var(--ink)',
          border: '2px solid var(--ink)',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        title="Trợ lý Lịch sử"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[70] w-80 flex flex-col paper-grain"
            style={{
              height: 420,
              background: 'var(--paper-light)',
              border: '2px solid var(--border)',
              borderRadius: '2px',
              boxShadow: '4px 4px 0 rgba(26,26,26,0.1)',
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{
                borderBottom: '2px solid var(--ink)',
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center border border-current" style={{ color: 'var(--ink)' }}>
                <Bot size={16} />
              </div>
              <div>
                <p className="font-playfair font-black text-sm uppercase tracking-wider" style={{ color: 'var(--ink)' }}>
                  Hỏi Đáp Tư Liệu
                </p>
                <p className="font-jetbrains text-[10px]" style={{ color: 'var(--muted)' }}>
                  Giai đoạn 1961–1965
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4" style={{ scrollbarWidth: 'thin' }}>
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <Bot size={32} style={{ color: 'var(--muted)', margin: '0 auto 8px' }} />
                  <p className="font-serif text-sm mb-4 italic" style={{ color: 'var(--muted)' }}>
                    Đồng chí cần tra cứu thông tin gì?
                  </p>
                  {/* Suggested questions */}
                  <div className="space-y-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className="block w-full text-left px-3 py-2 text-xs font-serif transition-colors hover:bg-black/5"
                        style={{
                          color: 'var(--ink)',
                          border: '1px solid var(--border)',
                          background: 'transparent',
                          cursor: 'pointer'
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-1 border border-current" style={{ color: 'var(--ink)', background: 'var(--paper-bg)' }}>
                      <Bot size={12} />
                    </div>
                  )}
                  <div
                    className="max-w-[75%] px-3 py-2 text-sm font-serif leading-relaxed"
                    style={{
                      background: msg.role === 'user'
                        ? 'var(--paper-dark)'
                        : 'transparent',
                      color: 'var(--ink)',
                      border: msg.role === 'assistant' ? 'none' : '1px solid var(--border)',
                    }}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-1 border border-current" style={{ color: 'var(--ink)', background: 'var(--paper-bg)' }}>
                      <User size={12} />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center border border-current" style={{ color: 'var(--ink)' }}>
                    <Bot size={12} />
                  </div>
                  <div className="px-3 py-2">
                    <Loader2 size={16} className="animate-spin" style={{ color: 'var(--muted)' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 flex items-center gap-2"
              style={{ borderTop: '1px solid var(--border)', background: 'var(--paper-bg)' }}
            >
              <input
                ref={inputRef}
                id="chatbot-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập nội dung tra cứu..."
                className="flex-1 px-3 py-2 text-sm font-serif outline-none"
                style={{
                  background: 'transparent',
                  color: 'var(--ink)',
                  border: '1px solid var(--border)',
                }}
              />
              <button
                id="chatbot-send"
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="p-2 transition-colors hover:bg-black/5 disabled:opacity-30"
                style={{
                  color: 'var(--ink)',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  cursor: input.trim() ? 'pointer' : 'default',
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
