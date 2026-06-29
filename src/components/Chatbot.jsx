import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const SYSTEM_PROMPT = `Bạn là trợ lý lịch sử Đảng chuyên về giai đoạn 1961-1965 của Việt Nam.
Chỉ trả lời các câu hỏi liên quan đến nội dung bài báo "NHÂN DÂN - SỐ ĐẶC BIỆT":
Đại hội III, Kế hoạch 5 năm miền Bắc, chi viện đường 559/759,
Mặt trận GPMN, chiến lược Chiến tranh đặc biệt, các trận Ấp Bắc,
Bình Giã, Ba Gia, Đồng Xoài.
Trả lời ngắn gọn, súc tích bằng tiếng Việt mang phong cách báo chí cũ.
Không bịa thêm thông tin ngoài phạm vi bài.
Không trả lời gì khác ngoài nội dung Lịch sử đảng.`;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';


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
      if (!API_KEY) {
        throw new Error('Thiếu API Key (VITE_GEMINI_API_KEY)');
      }
      
      const url = 'https://api.shopaikey.com/v1/chat/completions';

      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...newMessages.map(m => ({
          role: m.role,
          content: m.content
        }))
      ];

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'gemini-3.1-flash-lite-preview',
          messages: apiMessages,
          stream: true
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      // Khởi tạo tin nhắn trống cho assistant
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        
        // Giữ lại phần tử cuối cùng vì nó có thể chưa hoàn chỉnh (chưa có dấu xuống dòng)
        buffer = lines.pop();

        for (let line of lines) {
          line = line.trim();
          if (!line) continue;
          
          if (line.startsWith('data:')) {
            const dataStr = line.substring(5).trim();
            if (dataStr === '[DONE]') {
              continue;
            }
            
            try {
              const parsed = JSON.parse(dataStr);
              const token = parsed.choices?.[0]?.delta?.content || '';
              
              if (token) {
                setMessages(prev => {
                  const newMsgs = [...prev];
                  newMsgs[newMsgs.length - 1] = {
                    ...newMsgs[newMsgs.length - 1],
                    content: newMsgs[newMsgs.length - 1].content + token
                  };
                  return newMsgs;
                });
              }
            } catch (e) {
              console.warn('JSON parse error on chunk:', dataStr);
            }
          }
        }
      }
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
            className="!fixed bottom-24 right-6 z-[70] w-[90vw] md:w-[420px] flex flex-col paper-grain"
            style={{
              height: 520,
              maxHeight: '75vh',
              background: 'var(--paper-light)',
              border: '2px solid var(--border)',
              borderRadius: '2px',
              boxShadow: '6px 6px 0 rgba(26,26,26,0.15)',
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
                        className="block w-full text-left px-4 py-2.5 text-sm font-serif transition-colors hover:bg-black/5"
                        style={{
                          color: 'var(--ink)',
                          border: '1px dashed var(--border)',
                          borderBottom: '2px solid var(--border)',
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
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1 border-2 border-current" style={{ color: 'var(--headline-red)', background: 'var(--paper-bg)' }}>
                      <Bot size={16} />
                    </div>
                  )}
                  <div
                    className="max-w-[80%] px-4 py-3 font-serif leading-relaxed chat-markdown"
                    style={{
                      background: msg.role === 'user'
                        ? 'var(--paper-dark)'
                        : 'rgba(255,255,255,0.4)',
                      color: 'var(--ink)',
                      fontSize: msg.role === 'assistant' ? '0.95rem' : '0.9rem',
                      border: msg.role === 'assistant' ? '1px solid var(--border)' : '1px solid var(--ink)',
                      borderLeft: msg.role === 'assistant' ? '4px solid var(--headline-red)' : '1px solid var(--ink)',
                      boxShadow: msg.role === 'user' ? '2px 2px 0 var(--ink)' : 'none',
                    }}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}) => <p style={{ marginBottom: '0.5em' }} {...props} />,
                        ul: ({node, ...props}) => <ul style={{ listStyleType: 'disc', paddingLeft: '1.5em', marginBottom: '0.5em' }} {...props} />,
                        ol: ({node, ...props}) => <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5em', marginBottom: '0.5em' }} {...props} />,
                        strong: ({node, ...props}) => <strong style={{ fontWeight: 700, color: 'var(--headline-red)' }} {...props} />
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1 border-2 border-current" style={{ color: 'var(--ink)', background: 'var(--paper-bg)' }}>
                      <User size={16} />
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
                className="flex-1 px-4 py-2.5 text-sm font-serif outline-none"
                style={{
                  background: 'var(--paper-light)',
                  color: 'var(--ink)',
                  border: '1px solid var(--border)',
                  borderBottom: '2px solid var(--ink)',
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
