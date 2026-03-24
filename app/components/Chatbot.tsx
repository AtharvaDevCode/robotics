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
  CheckCircle2
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
    icon: <CheckCircle2 className="w-4 h-4" />,
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
    label: 'Technical Support',
    icon: <Phone className="w-4 h-4" />,
    message: "I need technical support for an existing deployment."
  },
  {
    id: 'contact',
    label: 'Contact Sales',
    icon: <Mail className="w-4 h-4" />,
    message: "Please have your sales team contact me."
  }
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

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
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

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
      // Prepare history for context (last 10 messages)
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

      // Show quick actions again after response if conversation is short
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
          text: "I apologize, but I'm having trouble responding right now. Please contact us directly at +1 217 819 6382 or email help@rewardwise.co.",
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

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        if (!target.closest('button') || target.getAttribute('aria-label') === 'Close chat') {
          // Don't close if clicking the toggle button
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-105 ${
          isOpen 
            ? 'bg-gray-800 rotate-90' 
            : 'bg-[#C5393A] hover:bg-[#9C2A2B] hover:shadow-xl'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Container */}
      <div
        ref={chatContainerRef}
        className={`fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ height: isOpen ? '600px' : '0' }}
      >
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5393A] rounded-lg flex items-center justify-center shadow-sm">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Ensemble Assistant</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Online • Typically replies instantly
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {messages.length > 1 && (
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
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} items-end animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.role === 'user' 
                    ? 'bg-[#3947C4]' 
                    : msg.isError 
                      ? 'bg-red-100 border border-red-200'
                      : 'bg-white border border-gray-200'
                }`}
              >
                {msg.role === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : msg.isError ? (
                  <AlertCircle className="w-4 h-4 text-red-600" />
                ) : (
                  <Bot className="w-4 h-4 text-[#C5393A]" />
                )}
              </div>
              
              {/* Message Bubble */}
              <div
                className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#3947C4] text-white rounded-br-sm'
                    : msg.isError 
                      ? 'bg-red-50 border border-red-200 text-red-800 rounded-bl-sm'
                      : 'bg-white border border-gray-200 text-gray-700 rounded-bl-sm shadow-sm'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
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
            <div className="flex gap-3 items-end animate-in fade-in duration-300">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#C5393A]" />
              </div>
              <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
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
                className="text-xs flex items-center gap-1 text-[#C5393A] hover:underline"
              >
                <RefreshCw className="w-3 h-3" />
                Retry last message
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {showQuickActions && !isLoading && messages.length < 4 && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2 font-medium">Quick Actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 hover:border-[#C5393A] hover:text-[#C5393A] transition-colors text-left group"
                >
                  <span className="text-gray-400 group-hover:text-[#C5393A] transition-colors">
                    {action.icon}
                  </span>
                  <span className="font-medium">{action.label}</span>
                  <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200 shrink-0">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-gray-100 border border-transparent rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C5393A]/20 focus:bg-white focus:border-[#C5393A]/30 transition-all text-sm"
              disabled={isLoading}
              maxLength={1000}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="px-4 bg-[#C5393A] text-white rounded-lg hover:bg-[#9C2A2B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          {/* Contact Info Footer */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
            <span></span>
            <div className="flex items-center gap-3">
              <a href="tel:+12178196382" className="hover:text-[#C5393A] flex items-center gap-1 transition-colors">
                <Phone className="w-3 h-3" />
                +1 217 819 6382
              </a>
              <span>•</span>
              <button 
                onClick={clearConversation}
                className="hover:text-[#C5393A] transition-colors"
              >
                New Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};