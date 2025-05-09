import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button'; // Assuming you have shadcn/ui
import { Input } from './ui/input'; // Assuming you have shadcn/ui
import { cn } from './lib/utils'; // Assuming you have shadcn/ui

// Placeholder for the AI mascot SVG (replace with your actual component or SVG code)
const AIMascot = ({ onClick, className }: { onClick: () => void; className?: string }) => (
  <motion.button
    onClick={onClick}
    className={cn(
      'w-16 h-16 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all',
      className
    )}
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
);

// Message component
const ChatMessage = React.memo(({ message, isUser }: { message: { role: string; content: string }; isUser: boolean }) => {
  return (
    <motion.div
      className={cn(
        'px-4 py-2 rounded-xl max-w-[80%] break-words',
        isUser
          ? 'bg-blue-600 text-white self-end ml-auto rounded-br-none'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none'
      )}
      initial={{ opacity: 0, y: isUser ? 10 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isUser ? -10 : 10 }}
      transition={{ duration: 0.2 }}
    >
      {message.content}
    </motion.div>
  );
});
ChatMessage.displayName = 'ChatMessage';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: 'Hi! Ask me anything about SoftSell 🚀' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [assistantTyping, setAssistantTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-focus input on open
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    const newUserMessage = { role: 'user', content: input };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'mistralai/mistral-7b-instruct',
          messages: [
            {
              role: 'system',
              content:
                'You are a helpful and concise assistant for SoftSell, a software license resale service.  Respond in a friendly and professional tone. Keep your responses brief and to the point, under 50 words if possible.  Do not include any unnecessary introductory phrases or filler content. If you cannot answer the question, say so clearly.',
            },
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
        setMessages((prevMessages) => [...prevMessages, reply]);
        setAssistantTyping(false);
      }, 1200);
    } catch (err) {
      const errorMessage = {
        role: 'assistant',
        content:
          'Oops! Something went wrong. Please try again. If the problem persists, contact support.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      setAssistantTyping(false);
    } finally {
      setLoading(false);
    }
  }, [messages, input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent newline in input
      sendMessage();
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
            className="w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 space-y-4 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">SoftSell Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="text-sm h-64 overflow-y-auto pr-2 space-y-3 flex-1">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message}
                    isUser={message.role === 'user'}
                  />
                ))}
                {assistantTyping && (
                  <motion.div
                    className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Loader2 className="animate-spin inline-block w-4 h-4 mr-2" />
                    Typing...
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} /> {/* Ref for scrolling to bottom */}
            </div>

            {/* Input box */}
            <div className="flex gap-2 items-center">
              <Input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
                className="text-sm flex-1"
                disabled={loading}
              />
              <Button
                onClick={sendMessage}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Example questions */}
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Try:{' '}
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  className="underline mr-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  onClick={() => setInput(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with AI Mascot */}
      <AIMascot onClick={() => setIsOpen(!isOpen)} className="z-10" />
    </div>
  );
};

export default ChatWidget;
