'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  RefreshCw, 
  Phone, 
  Mail, 
  Calendar,
  ChevronRight,
  AlertCircle,
  Minimize2
} from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
  isQuickReply?: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  message: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'pricing',
    label: 'Get Quote',
    icon: <Calendar className="w-4 h-4" />,
    message: "I'd like to get a quote for robotics procurement services."
  },
  {
    id: 'demo',
    label: 'Schedule Demo',
    icon: <Calendar className="w-4 h-4" />,
    message: "I'd like to schedule a demonstration of your robotics solutions."
  },
  {
    id: 'support',
    label: 'Support',
    icon: <Phone className="w-4 h-4" />,
    message: "I need technical support for an existing deployment."
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <Mail className="w-4 h-4" />,
    message: "Please have your sales team contact me."
  }
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'model',
          text: "Hello! Welcome to Ensemble Control Inc. I'm here to help with your robotics procurement needs. How can I assist you today?",
          timestamp: new Date(),
        }
      ]);
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      // Delay focus on mobile to avoid keyboard jumping
      const timer = setTimeout(() => inputRef.current?.focus(), isMobile ? 500 : 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized, isMobile]);

  // Handle back button on Android
  useEffect(() => {
    if (!isMobile) return;

    const handleBackButton = (e: PopStateEvent) => {
      if (isOpen) {
        e.preventDefault();
        setIsOpen(false);
        window.history.pushState(null, '', window.location.href);
      }
    };

    if (isOpen) {
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', handleBackButton);
    }

    return () => window.removeEventListener('popstate', handleBackButton);
  }, [isOpen, isMobile]);

  const sendMessage = async (text: string, isQuickReply = false) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
      isQuickReply
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowQuickActions(false);
    setHasError(false);

    try {
      const history = messages.slice(-10).map(msg => ({
        role: msg.role,
        text: msg.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.text,
          messageHistory: history
        }),
      });

      const data = await response.json();

      if (data.error && !data.fallback) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: data.response,
          timestamp: new Date(),
          isError: data.error || false
        },
      ]);

      if (messages.length < 4) {
        setTimeout(() => setShowQuickActions(true), 1000);
      }

    } catch (error: any) {
      console.error('Chat error:', error);
      setHasError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: "I apologize, but I'm having trouble responding. Please contact us at +1 217 819 6382.",
          timestamp: new Date(),
          isError: true
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => sendMessage(input);
  const handleQuickAction = (action: QuickAction) => sendMessage(action.message, true);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearConversation = () => {
    setMessages([
      {
        role: 'model',
        text: "Conversation cleared. How can I help you today?",
        timestamp: new Date(),
      }
    ]);
    setShowQuickActions(true);
    setHasError(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  return (
    <>
      {/* Floating Toggle Button - Larger touch target for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center active:scale-95 ${
          isOpen 
            ? 'bg-gray-800 rotate-90' 
            : 'bg-[#C5393A] hover:bg-[#9C2A2B] hover:shadow-xl'
        }`}
        style={{ touchAction: 'manipulation' }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Container - Full screen on mobile, fixed size on desktop */}
      <div
        ref={chatContainerRef}
        className={`fixed z-50 bg-white shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col ${
          isMobile 
            ? 'inset-0 rounded-none w-full h-full' // Full screen on mobile
            : 'bottom-24 right-6 w-[400px] max-w-[calc(100vw-2rem)] rounded-xl h-[600px] max-h-[calc(100vh-120px)]'
        } ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header - Sticky, larger touch targets */}
        <div className="bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#C5393A] rounded-lg flex items-center justify-center shadow-sm">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Ensemble Assistant</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="hidden sm:inline">Online • </span>Ready
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {isMobile && (
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={isMinimized ? 'Expand' : 'Minimize'}
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            )}
            {messages.length > 1 && !isMobile && (
              <button
                onClick={clearConversation}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Clear conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Minimized state for mobile */}
        {isMinimized && isMobile ? (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <button
              onClick={() => setIsMinimized(false)}
              className="px-6 py-3 bg-[#C5393A] text-white rounded-full font-medium shadow-lg active:scale-95 transition-transform"
            >
              Resume Conversation
            </button>
          </div>
        ) : (
          <>
            {/* Messages Area - Better scrolling for mobile */}
            <div 
              className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50/50 scroll-smooth"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 sm:gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} items-end animate-in fade-in slide-in-from-bottom-2 duration-200`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.role === 'user' 
                        ? 'bg-[#3947C4]' 
                        : msg.isError 
                          ? 'bg-red-100 border border-red-200'
                          : 'bg-white border border-gray-200'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    ) : msg.isError ? (
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                    ) : (
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5393A]" />
                    )}
                  </div>
                  
                  {/* Message Bubble - Larger text on mobile */}
                  <div
                    className={`max-w-[80%] sm:max-w-[75%] p-2.5 sm:p-3 rounded-2xl text-sm sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#3947C4] text-white rounded-br-sm'
                        : msg.isError 
                          ? 'bg-red-50 border border-red-200 text-red-800 rounded-bl-sm'
                          : 'bg-white border border-gray-200 text-gray-700 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm sm:text-sm">{msg.text}</p>
                    <span
                      className={`text-[10px] mt-1.5 block opacity-60 ${
                        msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex gap-2 sm:gap-3 items-end animate-in fade-in duration-200">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5393A]" />
                  </div>
                  <div className="bg-white border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl rounded-bl-sm shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Error Recovery */}
              {hasError && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => {
                      const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
                      if (lastUserMessage) sendMessage(lastUserMessage.text);
                    }}
                    className="text-xs flex items-center gap-1 text-[#C5393A] hover:underline px-4 py-2 bg-red-50 rounded-full"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Retry
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions - Horizontal scroll on mobile */}
            {showQuickActions && !isLoading && messages.length < 4 && (
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-t border-gray-200 shrink-0">
                <p className="text-xs text-gray-500 mb-2 font-medium">Quick Actions:</p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleQuickAction(action)}
                      className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 hover:border-[#C5393A] hover:text-[#C5393A] transition-colors text-left whitespace-nowrap active:scale-95 shrink-0"
                      style={{ touchAction: 'manipulation' }}
                    >
                      <span className="text-gray-400">
                        {action.icon}
                      </span>
                      <span className="font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area - Larger touch targets */}
            <div className="p-3 sm:p-4 bg-white border-t border-gray-200 shrink-0 safe-area-pb">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C5393A]/20 focus:bg-white focus:border-[#C5393A]/30 transition-all text-base sm:text-sm min-h-[48px]"
                  disabled={isLoading}
                  maxLength={1000}
                  enterKeyHint="send"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="px-4 sm:px-4 bg-[#C5393A] text-white rounded-lg hover:bg-[#9C2A2B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[48px] min-h-[48px] active:scale-95"
                  style={{ touchAction: 'manipulation' }}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Contact Info Footer */}
              <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-[10px] text-gray-400">
                <span></span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <a href="tel:+12178196382" className="hover:text-[#C5393A] flex items-center gap-1 transition-colors">
                    <Phone className="w-3 h-3" />
                    <span className="hidden sm:inline">+1 217 819 6382</span>
                    <span className="sm:hidden">Call</span>
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <button 
                    onClick={clearConversation}
                    className="hover:text-[#C5393A] transition-colors"
                  >
                    New Chat
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add CSS for hiding scrollbar in quick actions */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .safe-area-pb {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
      `}</style>
    </>
  );
};