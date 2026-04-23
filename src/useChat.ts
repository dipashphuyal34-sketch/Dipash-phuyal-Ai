import { useState, useEffect, useCallback } from 'react';
import { Message, Conversation } from './types';
import { streamChat } from './services/geminiService';

const STORAGE_KEY = 'gemini_personal_conversations';

export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConversations(parsed);
        if (parsed.length > 0) {
          setCurrentId(parsed[0].id);
        }
      } catch (e) {
        console.error("Failed to parse saved conversations", e);
      }
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  }, [conversations]);

  const currentConversation = conversations.find(c => c.id === currentId);

  const startNewChat = useCallback(() => {
    const newId = crypto.randomUUID();
    const newConv: Conversation = {
      id: newId,
      title: 'New Conversation',
      messages: [],
      updatedAt: Date.now()
    };
    setConversations(prev => [newConv, ...prev]);
    setCurrentId(newId);
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || !currentId) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: Date.now()
    };

    setConversations(prev => prev.map(c => {
      if (c.id === currentId) {
        const updatedMessages = [...c.messages, userMessage];
        // Auto-update title based on first message if it's default
        const title = c.title === 'New Conversation' ? content.slice(0, 30) + (content.length > 30 ? '...' : '') : c.title;
        return { ...c, messages: updatedMessages, title, updatedAt: Date.now() };
      }
      return c;
    }));

    setIsLoading(true);

    try {
      const conv = conversations.find(c => c.id === currentId);
      const history = conv ? [...conv.messages, userMessage] : [userMessage];
      
      let incomingContent = '';
      const modelMessageId = crypto.randomUUID();

      // Preliminary model message
      setConversations(prev => prev.map(c => {
        if (c.id === currentId) {
          return {
            ...c,
            messages: [...c.messages, { id: modelMessageId, role: 'model', content: '', timestamp: Date.now() }]
          };
        }
        return c;
      }));

      const stream = streamChat(history);
      for await (const chunk of stream) {
        incomingContent += chunk;
        setConversations(prev => prev.map(c => {
          if (c.id === currentId) {
            return {
              ...c,
              messages: c.messages.map(m => m.id === modelMessageId ? { ...m, content: incomingContent } : m)
            };
          }
          return c;
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentId, conversations]);

  const deleteConversation = useCallback((id: string) => {
    setConversations(prev => prev.filter(c => c.id !== id));
    if (currentId === id) {
      setCurrentId(null);
    }
  }, [currentId]);

  return {
    conversations,
    currentId,
    setCurrentId,
    currentConversation,
    isLoading,
    sendMessage,
    startNewChat,
    deleteConversation
  };
}
