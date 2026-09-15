import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Plus, 
  Mic, 
  Play, 
  Pause, 
  Sparkles, 
  Volume2, 
  Send,
  Check,
  Shield,
  Zap,
  Globe,
  Layers,
  Cpu
} from 'lucide-react';

// ==========================================
// Custom FadeInUp Scroll-Reveal Wrapper Component
// ==========================================
const FadeInUp = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ==========================================
// Stroke-Based SVG Brand Logos (Untitled UI Style)
// ==========================================
const PletyLogo = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="4" width="24" height="24" rx="7" stroke="currentColor" strokeWidth="2.5" />
    <path d="M12 20V12H16.5C18.433 12 20 13.567 20 15.5C20 17.433 18.433 19 16.5 19H12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="1.75" fill="currentColor" />
  </svg>
);

const SpringfieldLogo = () => (
  <div className="flex items-center gap-2 text-gray-400 font-semibold tracking-wide text-sm select-none">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
    <span>Springfield</span>
  </div>
);

const OrbitcLogo = () => (
  <div className="flex items-center gap-2 text-gray-400 font-semibold tracking-wide text-sm select-none">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9"/>
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)"/>
    </svg>
    <span>Orbitc</span>
  </div>
);

const CloudLogo = () => (
  <div className="flex items-center gap-2 text-gray-400 font-semibold tracking-wide text-sm select-none">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
    </svg>
    <span>Cloud</span>
  </div>
);

const AmsterLogo = () => (
  <div className="flex items-center gap-2 text-gray-400 font-semibold tracking-wide text-sm select-none">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polygon points="12 2 2 12 12 22 22 12 12 2"/>
    </svg>
    <span>Amster</span>
  </div>
);

const NexusLogo = () => (
  <div className="flex items-center gap-2 text-gray-400 font-semibold tracking-wide text-sm select-none">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"/>
    </svg>
    <span>Nexus</span>
  </div>
);

export default function App() {
  // Navigation scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // AI Chat mockup state
  const [chatPrompt, setChatPrompt] = useState("Explain quantum encryption in 2 sentences");
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Quantum encryption uses principles of quantum mechanics to secure data transmission, making eavesdropping physically detectable.' }
  ]);

  // AI Transcription mockup state
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || chatPrompt;
    if (!query.trim()) return;
    setChatMessages(prev => [
      ...prev, 
      { role: 'user', text: query },
      { role: 'assistant', text: `Analyzing "${query}"... Plety AI processes real-time contextual queries instantly.` }
    ]);
    setChatPrompt("");
  };

  const brandLogos = [
    { name: "Springfield", component: <SpringfieldLogo /> },
    { name: "Orbitc", component: <OrbitcLogo /> },
    { name: "Cloud", component: <CloudLogo /> },
    { name: "Amster", component: <AmsterLogo /> },
    { name: "Nexus", component: <NexusLogo /> }
  ];

  // Quadruplicate brand logos array for smooth infinite scrolling
  const marqueeLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  const faqData = [
    {
      question: "Is my data safe with Plety?",
      answer: "Yes. We enforce enterprise-grade AES-256 encryption both in transit and at rest. Your data is strictly private and never used to train public foundation models without explicit authorization."
    },
    {
      question: "How does the API integration work?",
      answer: "Our SDKs support REST and WebSockets for Node.js, Python, Go, and React. You can integrate our intelligence layer into your stack in less than 10 lines of code with automated error recovery."
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Absolutely. You can modify your subscription tier, billing period, or concurrency limits instantly from the developer dashboard with transparent, prorated billing."
    },
    {
      question: "What audio formats are supported for AI transcription?",
      answer: "We support MP3, WAV, FLAC, M4A, OGG, and WebM, including low-latency WebSocket streaming for real-time audio feeds and multichannel speaker diarization."
    },
    {
      question: "Do you offer enterprise SLA support?",
      answer: "Yes, our Enterprise plan includes guaranteed 99.99% uptime SLAs, 24/7 dedicated support engineers, custom model fine-tuning, and SOC 2 Type II compliance reports."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* ==========================================
          1. NAVIGATION BAR (Sticky & Responsive)
         ========================================== */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Left */}
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity group"
          >
            <PletyLogo className="w-7 h-7 text-white transition-transform group-hover:scale-105" />
            <span className="text-xl font-bold tracking-tight">Plety</span>
          </a>

          {/* Desktop Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop Right Button */}
          <div className="hidden md:block">
            <button className="bg-[#1F1F22] hover:bg-[#2A2A2D] text-white text-sm font-medium px-5 py-2.5 rounded-full border border-white/5 transition-all shadow-sm hover:border-white/10">
              Get started
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 mt-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-left text-base font-medium text-gray-300 hover:text-white py-2"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-left text-base font-medium text-gray-300 hover:text-white py-2"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="text-left text-base font-medium text-gray-300 hover:text-white py-2"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-left text-base font-medium text-gray-300 hover:text-white py-2"
            >
              Contact
            </button>
            <div className="pt-2 border-t border-white/10">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#1F1F22] hover:bg-[#2A2A2D] text-white text-sm font-medium px-5 py-3 rounded-full border border-white/5 transition-all text-center"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ==========================================
          2. HERO SECTION (id="about")
         ========================================== */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 relative z-0 overflow-hidden">
        
        {/* Background Video */}
        <video 
          src="https://cdn.sceneai.art/Hero%20Section%20Video/50b4f304-cdca-4e12-8735-580d225834be.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 -z-10 object-cover min-w-full min-h-full opacity-90 pointer-events-none"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          
          <FadeInUp delay={100}>
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-8 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-pointer">
              <span>✨ Announcing API 2.0</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={250}>
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-center leading-[1.1] max-w-4xl text-white">
              The intelligence layer <br className="hidden md:inline" />
              for clear <span className="font-serif italic font-normal text-white">decisions.</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={400}>
            {/* Sub-text */}
            <p className="text-[16px] text-gray-400 max-w-2xl text-center leading-relaxed mb-10">
              Our platform integrates seamlessly into your stack to deliver real-time understanding, not just predictions.
            </p>
          </FadeInUp>

          <FadeInUp delay={550}>
            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-center gap-4 mb-16">
              <button className="bg-white text-black hover:bg-gray-200 text-sm font-medium px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2">
                <span>Get started</span>
              </button>
              <button className="bg-[#1F1F22] hover:bg-[#2A2A2D] text-white text-sm font-medium px-6 py-3 rounded-full border border-white/5 transition-all">
                <span>Learn more</span>
              </button>
            </div>
          </FadeInUp>
        </div>

        {/* Marquee (Trusted by industry leaders) */}
        <div className="w-full mt-24">
          <FadeInUp delay={700}>
            <p className="text-sm text-gray-500 font-medium mb-8 text-center uppercase tracking-widest">
              TRUSTED BY INDUSTRY LEADERS
            </p>

            <div className="w-full max-w-6xl mx-auto overflow-hidden marquee-mask relative">
              <div className="flex w-max animate-marquee items-center">
                {marqueeLogos.map((brand, idx) => (
                  <div key={idx} className="flex-shrink-0 px-8 opacity-60 hover:opacity-100 transition-opacity">
                    {brand.component}
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ==========================================
          3. FEATURE 1: AI CHAT (id="features")
         ========================================== */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <FadeInUp delay={100}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-4 inline-block px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                ✨ AI chat
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Where speed meets intelligent conversation.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                A conversational AI assistant that understands your questions, provides intelligent answers, and helps you get things done fast from casual chats to complex tasks.
              </p>
              <button className="bg-white text-black hover:bg-gray-200 text-sm font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2 group">
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </FadeInUp>

          {/* Right Mockup */}
          <FadeInUp delay={300}>
            <div className="rounded-3xl overflow-hidden p-6 md:p-8 border border-white/10 relative shadow-2xl group min-h-[460px] flex items-end">
              
              {/* Background Video */}
              <video 
                src="https://cdn.sceneai.art/Hero%20Section%20Video/1bcc8fa3-37f6-4c53-8591-0347e4c7f8ac.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 object-cover w-full h-full pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-brightness-90 pointer-events-none" />

              {/* Floating UI Card */}
              <div className="bg-[#1C1C1E]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative z-10 w-full">
                
                {/* Prompt Suggestion Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button 
                    onClick={() => handleSendMessage("Create a futuristic architectural rendering prompt")}
                    className="text-xs text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Create image</span>
                  </button>
                  <button 
                    onClick={() => handleSendMessage("Summarize key takeaways from the Q3 report")}
                    className="text-xs text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>Summarize article</span>
                  </button>
                  <button 
                    onClick={() => handleSendMessage("Write a React custom hook for WebSocket connection")}
                    className="text-xs text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Cpu className="w-3.5 h-3.5 text-green-400" />
                    <span>Write code</span>
                  </button>
                </div>

                {/* Conversation Preview */}
                <div className="space-y-2 mb-4 max-h-36 overflow-y-auto pr-1 text-xs leading-relaxed">
                  {chatMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`p-2.5 rounded-xl ${
                        msg.role === 'user' 
                          ? 'bg-white/10 text-white ml-auto max-w-[85%] text-right' 
                          : 'bg-black/40 text-gray-300 border border-white/5 max-w-[90%]'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Bottom Input Field */}
                <div className="flex items-center gap-2 bg-black/60 rounded-xl border border-white/10 px-3.5 py-2.5">
                  <input 
                    type="text" 
                    value={chatPrompt}
                    onChange={(e) => setChatPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask anything..." 
                    className="bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none flex-grow"
                  />
                  <button className="text-gray-400 hover:text-yellow-400 transition-colors p-1">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-yellow-400 transition-colors p-1">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleSendMessage()}
                    className="bg-white text-black p-1.5 rounded-lg hover:bg-gray-200 transition-colors ml-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ==========================================
          4. FEATURE 2: AI TRANSCRIPTION
         ========================================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Mockup */}
          <FadeInUp delay={100}>
            <div className="rounded-3xl overflow-hidden p-6 md:p-8 border border-white/10 relative shadow-2xl group min-h-[460px] flex items-end">
              
              {/* Background Video */}
              <video 
                src="https://cdn.sceneai.art/Hero%20Section%20Video/736fd4a0-70ac-4f44-9633-55769ead6aca.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 object-cover w-full h-full pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-brightness-90 pointer-events-none" />

              {/* Floating UI Card */}
              <div className="bg-[#1C1C1E]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative z-10 w-full">
                
                {/* Audio Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="bg-white text-black p-2.5 rounded-full hover:bg-gray-200 transition-transform active:scale-95 shadow-md"
                    >
                      {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>
                    <div>
                      <p className="text-xs font-semibold text-white">11:06 AM – Chris</p>
                      <p className="text-[11px] text-gray-400">Audio Stream #842 • 0.08s latency</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse">
                    Live
                  </span>
                </div>

                {/* Animated Waveform Equalizer */}
                <div className="flex items-center justify-between gap-1 h-9 my-3 px-2 bg-black/40 rounded-xl border border-white/5 py-1.5">
                  {[40, 85, 55, 95, 30, 70, 100, 45, 90, 60, 75, 35, 80, 50, 95, 40, 70, 30, 85, 60, 90, 45, 100, 65, 35].map((h, i) => (
                    <div 
                      key={i} 
                      className={`w-1 bg-emerald-400/80 rounded-full transition-all duration-300 ${
                        isPlayingAudio ? 'animate-pulse' : 'opacity-40'
                      }`}
                      style={{ 
                        height: isPlayingAudio ? `${Math.max(20, (h * Math.sin(i + 1) * 0.5) + 50)}%` : `${h}%`,
                        animationDelay: `${i * 60}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Dummy Transcription Snippet */}
                <div className="bg-white/5 border border-white/5 rounded-xl p-3.5">
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    "We've analyzed the Q3 product metrics and identified key opportunities for growth across our core API endpoints. Latency is down 42%..."
                  </p>
                </div>

              </div>
            </div>
          </FadeInUp>

          {/* Right Text */}
          <FadeInUp delay={300}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-4 inline-block px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20">
                ✨ AI transcription
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Turn speech into text with speed and precision.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                Automatically convert speech into accurate, editable text in real time. Perfect for meetings, interviews, voice notes, and more, powered by advanced speech recognition technology.
              </p>
              <button className="bg-white text-black hover:bg-gray-200 text-sm font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2 group">
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </FadeInUp>

        </div>
      </section>

      {/* ==========================================
          5. FAQ SECTION (id="faq")
         ========================================== */}
      <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
        <FadeInUp delay={100}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-white mb-12">
            We've got answers
          </h2>
        </FadeInUp>

        <FadeInUp delay={250}>
          {/* Main Container Styling */}
          <div className="border border-white/10 rounded-xl bg-transparent overflow-hidden">
            {faqData.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              const isNotLast = idx < faqData.length - 1;

              return (
                <div 
                  key={idx}
                  className={`${isNotLast ? 'border-b border-white/10' : ''}`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="py-6 px-6 w-full flex items-center justify-between text-left cursor-pointer hover:bg-white/[0.02] transition-colors focus:outline-none select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base text-white font-medium pr-4">
                      {item.question}
                    </span>
                    
                    {/* Rotating Plus Icon (+ to x) */}
                    <span className="flex-shrink-0 text-gray-400">
                      <Plus className={`w-5 h-5 transition-transform duration-300 transform ${isOpen ? 'rotate-45 text-white' : 'rotate-0'}`} />
                    </span>
                  </button>

                  {/* Accordion Answer Body via CSS Grid Trick */}
                  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                    <div className="accordion-inner">
                      <p className="text-gray-400 text-sm pb-6 px-6 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInUp>
      </section>

      {/* ==========================================
          6. FOOTER SECTION (id="contact")
         ========================================== */}
      <footer id="contact" className="relative z-0 pt-32 pb-10 px-6 border-t border-white/5 overflow-hidden">
        
        {/* Background Video */}
        <video 
          src="https://cdn.sceneai.art/Hero%20Section%20Video/50b4f304-cdca-4e12-8735-580d225834be.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 object-cover w-full h-full opacity-40 -z-10 pointer-events-none"
        />

        {/* Strong Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          
          {/* Top CTA */}
          <FadeInUp delay={100}>
            <div className="flex flex-col items-center text-center mb-32">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white max-w-3xl leading-tight">
                Ready to automate <span className="font-serif italic font-normal text-white">everything?</span>
              </h2>

              <div className="flex flex-row items-center justify-center gap-4">
                <button className="bg-white text-black hover:bg-gray-200 text-sm font-medium px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2">
                  <span>Get started</span>
                </button>
                <button className="bg-[#1F1F22] hover:bg-[#2A2A2D] text-white text-sm font-medium px-6 py-3 rounded-full border border-white/5 transition-all">
                  <span>Learn more</span>
                </button>
              </div>
            </div>
          </FadeInUp>

          {/* Link Grid */}
          <FadeInUp delay={250}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto mb-24">
              
              {/* Col 1: Brand Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-white">
                  <PletyLogo className="w-6 h-6 text-white" />
                  <span className="text-xl font-bold tracking-tight">Plety</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                  Speed, scale, and smarts — deployed.
                </p>
              </div>

              {/* Col 2: Product */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Product
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Col 3: Legal */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Legal
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">404</a></li>
                </ul>
              </div>

              {/* Col 4: Connect */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                </ul>
              </div>

            </div>
          </FadeInUp>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
            <p className="flex flex-wrap items-center justify-center gap-2">
              <span>© 2026 Plety. All rights reserved</span>
              <span>•</span>
              <span>by <span className="text-gray-300 font-medium">DuongNguyen</span></span>
              <span>•</span>
              <span>Made in <span className="text-gray-300 font-medium">2026</span></span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
