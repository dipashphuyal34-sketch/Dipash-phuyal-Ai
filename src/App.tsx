import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  MessageSquare, 
  Trash2, 
  Send, 
  Sparkles,
  User,
  PanelLeftClose,
  ArrowRight,
  Github,
  Mail,
  Lock,
  Menu,
  Brain,
  Zap,
  Shield,
  Code,
  Pencil
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useChat } from './useChat';
import { cn } from './lib/utils';

// --- Components ---

function LandingPage({ onLaunch }: { onLaunch: () => void }) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] overflow-x-hidden font-sans selection:bg-black selection:text-white">
      <nav className="flex items-center justify-between px-6 md:px-12 py-8 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight text-xl">Intelligence.</span>
        </div>
        <button 
          onClick={onLaunch}
          className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-black/80 transition-all active:scale-95 shadow-xl shadow-black/10"
        >
          Launch App
        </button>
      </nav>

      <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            Project: Dipash Phuyal Intelligence
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10">
            The Personal<br />AI Engine.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-black/50 mb-14 leading-relaxed font-medium">
            Next-generation reasoning, lightning-fast creative drafting, and private knowledge management. 
            Custom built for <span className="text-black font-bold">Dipash Phuyal</span>.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={onLaunch}
              className="w-full md:w-auto px-10 py-5 bg-black text-white rounded-full text-lg font-bold hover:bg-black/80 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/20 group"
            >
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3 opacity-20">
              <div className="h-px w-8 bg-black" />
              <p className="text-[10px] font-bold uppercase tracking-widest">v1.0.0 Stable</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-32 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-black/[0.03] border border-black/5 rounded-2xl flex items-center justify-center">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Advanced Reasoning</h3>
              <p className="text-black/50 leading-relaxed font-medium text-sm">
                Leveraging Gemini 3 Flash for complex problem solving and logical analysis of school projects.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-black/[0.03] border border-black/5 rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Instant Drafts</h3>
              <p className="text-black/50 leading-relaxed font-medium text-sm">
                Generate professional essays, emails, and reports in seconds with human-like nuance.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-black/[0.03] border border-black/5 rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Privacy First</h3>
              <p className="text-black/50 leading-relaxed font-medium text-sm">
                Encrypted storage ensuring your intelligence remains private and entirely under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-20 text-center">
        <p className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-30 mb-8">
          Made by Dipash Phuyal • 2024
        </p>
        <div className="flex justify-center gap-8 opacity-10">
          <Github className="w-6 h-6" />
          <Sparkles className="w-6 h-6" />
          <Brain className="w-6 h-6" />
        </div>
      </footer>
    </div>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  
  return (
    <div className="fixed inset-0 z-[110] bg-white flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[400px] space-y-8"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-black/10">
            <Sparkles className="text-white w-7 h-7" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-black">Welcome back</h1>
          <p className="text-sm text-black/40 mt-3 font-medium italic">Dipash Phuyal Personal Gateway</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4 pt-4">
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-[#e5e5e5] focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-black/20 font-semibold text-sm"
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-black/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-black/10"
          >
            Enter Workspace
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="flex items-center gap-4 py-4">
          <div className="h-[1px] flex-1 bg-[#eeeeee]" />
          <span className="text-[9px] uppercase font-bold tracking-widest opacity-20">Secure OAuth</span>
          <div className="h-[1px] flex-1 bg-[#eeeeee]" />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button onClick={onLogin} className="flex items-center gap-3 px-5 py-4 border border-[#eeeeee] rounded-2xl hover:bg-black/5 transition-all font-bold text-xs uppercase tracking-widest">
            <Github className="w-4 h-4 opacity-70" />
            GitHub Login
          </button>
          <button onClick={onLogin} className="flex items-center gap-3 px-5 py-4 border border-[#eeeeee] rounded-2xl hover:bg-black/5 transition-all font-bold text-xs uppercase tracking-widest">
            <Mail className="w-4 h-4 opacity-70" />
            Google Login
          </button>
        </div>

        <div className="pt-16 text-center">
          <p className="text-[9px] text-black/20 uppercase tracking-[0.3em] font-bold">
            Personal Use Only • Dipash Phuyal
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// --- Main Application ---

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('is_authenticated') === 'true';
  });

  const { 
    conversations, 
    currentId, 
    setCurrentId, 
    currentConversation, 
    isLoading, 
    sendMessage, 
    startNewChat,
    deleteConversation 
  } = useChat();

  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setSidebarOpen(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentConversation?.messages, isLoading]);

  const handleLaunch = () => setShowLanding(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('is_authenticated', 'true');
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowLanding(true);
    localStorage.removeItem('is_authenticated');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput('');
  };

  if (showLanding && !isAuthenticated) return <LandingPage onLaunch={handleLaunch} />;
  if (!isAuthenticated) return <LoginScreen onLogin={handleLogin} />;

  return (
    <div className="flex h-screen w-full bg-[#fcfcfc] overflow-hidden relative selection:bg-black selection:text-white">
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <>
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              />
            )}
            <motion.aside
              initial={{ x: isMobile ? -300 : 0, width: isMobile ? 300 : 0, opacity: 0 }}
              animate={{ x: 0, width: 300, opacity: 1 }}
              exit={{ x: isMobile ? -300 : -300, width: 0, opacity: 0 }}
              className={cn(
                "flex flex-col border-r border-[#eeeeee] overflow-hidden bg-white z-50",
                isMobile ? "fixed inset-y-0 left-0 shadow-2xl" : "relative"
              )}
            >
              <div className="p-6 border-b border-[#eeeeee] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black rounded flex items-center justify-center">
                    <Sparkles className="text-white w-4 h-4" />
                  </div>
                  <h1 className="font-bold text-[10px] uppercase tracking-[0.2em] opacity-40">Intelligence</h1>
                </div>
                <button 
                  onClick={startNewChat}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-3 py-6 space-y-1">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={cn(
                      "group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all",
                      currentId === conv.id ? "bg-black text-white shadow-xl shadow-black/10" : "hover:bg-black/5"
                    )}
                    onClick={() => {
                      setCurrentId(conv.id);
                      if (isMobile) setSidebarOpen(false);
                    }}
                  >
                    <MessageSquare className="w-4 h-4 shrink-0 opacity-40" />
                    <span className="flex-1 text-sm truncate font-bold">{conv.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteConversation(conv.id);
                      }}
                      className={cn(
                        "p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity",
                        currentId === conv.id ? "hover:bg-white/20" : "hover:bg-black/10"
                      )}
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-[#eeeeee] space-y-6">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 text-[9px] uppercase font-bold tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Logout Session
                </button>
                <div className="bg-[#f8f8f8] p-5 rounded-2xl border border-[#eeeeee]">
                  <div className="text-[9px] opacity-30 text-center uppercase font-bold tracking-[0.1em] mb-1.5">
                    Dipash Phuyal Intelligence
                  </div>
                  <div className="text-[8px] text-center font-bold opacity-60 tracking-[0.3em] uppercase">
                    v1.0.0 Stable
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col relative min-w-0">
        <header className="h-20 border-b border-[#eeeeee] flex items-center justify-between px-8 bg-white/80 backdrop-blur-xl z-20">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2.5 hover:bg-black/5 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-base font-bold tracking-tight truncate max-w-[150px] md:max-w-none italic">
              {currentConversation?.title || "Intelligent Workspace"}
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[8px] font-bold tracking-[0.3em] uppercase opacity-20">Owner</span>
              <span className="text-[11px] font-bold tracking-tight">Dipash Phuyal</span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center shadow-lg shadow-black/10 border border-white/10">
              <User className="text-white w-5 h-5" />
            </div>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 md:px-12 py-12 scroll-smooth">
          <div className="max-w-3xl mx-auto space-y-16">
            {!currentConversation && (
              <div className="h-full flex flex-col items-center justify-center pt-24 text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-24 h-24 bg-black rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl shadow-black/20"
                >
                  <Sparkles className="text-white w-12 h-12" />
                </motion.div>
                <h3 className="text-5xl font-bold tracking-tighter mb-6 selection:bg-black selection:text-white italic">Hello, Dipash.</h3>
                <p className="text-base md:text-lg text-black/40 max-w-sm mx-auto leading-relaxed font-medium">
                  The intelligence system is online. What are we creating today?
                </p>
                <div className="mt-14 flex flex-wrap justify-center gap-4">
                  <button onClick={startNewChat} className="px-10 py-5 bg-black text-white rounded-full text-sm font-bold hover:bg-black/80 transition-all shadow-2xl shadow-black/10">
                    New Intelligence Session
                  </button>
                  <button className="px-10 py-5 bg-white border border-[#eeeeee] rounded-full text-sm font-bold hover:bg-black/5 transition-all">
                    Creative Draft
                  </button>
                </div>
              </div>
            )}

            {currentConversation?.messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                  "flex gap-6 md:gap-10 items-start",
                  message.role === 'model' ? "flex-row" : "flex-row-reverse"
                )}
              >
                <div className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shrink-0 border border-[#eeeeee] shadow-sm font-bold",
                  message.role === 'model' ? "bg-black text-white" : "bg-white"
                )}>
                  {message.role === 'model' ? <Sparkles className="w-5 h-5 md:w-6 md:h-6" /> : <User className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
                
                <div className={cn("flex-1", message.role === 'user' ? "text-right" : "text-left")}>
                  <div className={cn(
                    "inline-block max-w-full md:max-w-[85%] text-left p-6 md:p-8 rounded-[2rem]",
                    message.role === 'user' ? "bg-white border border-[#eeeeee] shadow-sm" : ""
                  )}>
                    <div className="markdown-body font-medium leading-relaxed">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
               <div className="flex gap-2.5 py-12 justify-center opacity-20">
                  <div className="w-2.5 h-2.5 bg-black rounded-full animate-bounce" />
                  <div className="w-2.5 h-2.5 bg-black rounded-full animate-bounce [animation-delay:200ms]" />
                  <div className="w-2.5 h-2.5 bg-black rounded-full animate-bounce [animation-delay:400ms]" />
               </div>
            )}
          </div>
        </div>

        <div className="p-8 md:p-12 mt-auto">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white border border-[#eeeeee] rounded-[3rem] p-4 shadow-2xl shadow-black/5 flex items-end gap-3 focus-within:ring-8 focus-within:ring-black/[0.02] transition-all">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Message your intelligence system..."
                className="flex-1 bg-transparent border-none focus:ring-0 py-4 px-6 text-sm md:text-base font-bold resize-none max-h-40 placeholder:text-black/10"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="h-14 w-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-all shrink-0 active:scale-90 disabled:opacity-10 shadow-xl shadow-black/10"
              >
                <Send className="w-6 h-6" />
              </button>
            </form>
            <p className="mt-8 text-center text-[9px] font-bold uppercase tracking-[0.5em] opacity-10">
              Personal Intelligence Platform • Dipash Phuyal
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
