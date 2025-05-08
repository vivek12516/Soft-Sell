import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Only import X since the mascot replaces the message icon

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything about SoftSell 🚀' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [assistantTyping, setAssistantTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'mistralai/mistral-7b-instruct',
          messages: [
            { role: 'system', content: 'You are a helpful assistant for SoftSell, a software license resale service.' },
            ...newMessages,
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'http://localhost:5173',
            'X-Title': 'SoftSell AI Chat',
          },
        }
      );

      setAssistantTyping(true);
      const reply = res.data.choices[0].message;
      setTimeout(() => {
        setMessages([...newMessages, reply]);
        setAssistantTyping(false);
      }, 1200);
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Oops! Something went wrong. 😅' }]);
      setAssistantTyping(false);
    } finally {
      setLoading(false);
    }
  };

  const exampleQuestions = [
    'How do I sell my license?',
    'How long does payment take?',
    'Is SoftSell legit?',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-80 sm:w-96 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-5 border border-gray-200 dark:border-gray-700 space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">SoftSell Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="text-sm h-64 overflow-y-auto pr-1 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  className={`px-4 py-2 rounded-xl max-w-xs break-words ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white self-end ml-auto'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                >
                  {m.content}
                </motion.div>
              ))}
              {assistantTyping && (
                <motion.div
                  className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Typing...
                </motion.div>
              )}
            </div>

            {/* Input box */}
            <div className="flex gap-2 items-center">
              <input
                type="text"
                className="flex-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 transition"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask something..."
              />
              <motion.button
                onClick={sendMessage}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-50"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                {loading ? '...' : 'Send'}
              </motion.button>
            </div>

            {/* Example questions */}
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Try:{' '}
              {exampleQuestions.map((q, i) => (
                <button
                  key={i}
                  className="underline mr-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  onClick={() => setInput(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with AI Mascot */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Toggle Chat"
      >
        {/* Replace this with your AI mascot image or SVG */}
        <img
          src="/src/assets/asst.svg" // Replace this with your actual file path
          alt="AI Mascot"
          className="w-10 h-10 object-contain"
        />
      </motion.button>
    </div>
  );
};

export default ChatWidget;
