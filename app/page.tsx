"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring
} from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  TrendingUp,
  MapPin,
  Award,
  Zap,
  Search,
  Code,
  Terminal,
  ChevronDown,
  ArrowUp,
  Github,
  Twitter,
  Linkedin,
  Briefcase,
  Loader2,
  Database
} from "lucide-react";

// --- GLOBAL STYLES & TEXTURE ---
const GrainOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-overlay"
    style={{
      backgroundImage:
        'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
    }}
  ></div>
);

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// --- REUSABLE COMPONENTS ---

const NeuButton = ({
  children,
  primary = false,
  onClick,
  className = "",
}: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -4, x: -2, boxShadow: "6px 6px 0px 0px #000" }}
    whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px #000" }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className={`
      relative px-8 py-4 text-lg font-black border-2 border-black rounded-xl cursor-pointer
      shadow-[4px_4px_0px_0px_#000] flex items-center justify-center gap-3 tracking-wide
      ${
        primary
          ? "bg-blue-600 text-white"
          : "bg-white text-black hover:bg-slate-50"
      }
      ${className}
    `}
  >
    {children}
  </motion.button>
);

// --- NAVBAR ---
const Navbar = () => {
  const router = useRouter();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b-2 border-black transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer group relative h-10 w-auto flex items-center gap-2"
        >
          {/* LOGO */}
           <div className="w-10 h-10 bg-blue-600 border-2 border-black rounded flex items-center justify-center shadow-[2px_2px_0px_0px_#000]">
              <Zap className="text-white fill-white" size={20} />
           </div>
           <span className="hidden md:block font-black text-xl tracking-tighter">SkillPulse.</span>
        </div>

        <div className="hidden md:flex gap-8 font-bold text-sm text-slate-600 items-center">
          {["Problem", "How it Works", "Features", "FAQ"].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(
                  item.toLowerCase().replace(/\s/g, "") === "howitworks"
                    ? "how"
                    : item.toLowerCase()
                )
              }
              className="hover:text-black hover:underline decoration-2 decoration-blue-600 underline-offset-4 transition-all cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/dashboard")}
          className="px-6 py-2.5 bg-black text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] cursor-pointer"
        >
          Get Started
        </motion.button>
      </div>
    </nav>
  );
};

// --- HERO COMPONENT (LIGHT MODE LEGENDARY EDITION) ---
const Hero = () => {
  const router = useRouter();

  // Terminal State
  const [lines, setLines] = useState<any[]>([]);
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    // The "Lock In" Sequence
    const sequence = [
      { id: 1, text: "> git commit -m 'broke up with gf'", type: "dim" },
      { id: 2, text: "→ STATUS: SINGLE & BROKE 💸", type: "error", delay: 800 },
      { id: 3, text: "> check_bank_balance.exe", type: "cmd", delay: 1600 },
      { id: 4, text: "⚠ BALANCE: ₹ 150.00 (Critical)", type: "warn", delay: 2400 },
      { id: 5, text: "> initializing LOCK_IN_MODE 🔒", type: "highlight", delay: 3200 },
      { id: 6, text: "→ deleting_instagram...", type: "log", delay: 4000 },
      { id: 7, text: "→ installing_SkillPulse...", type: "log", delay: 4500 },
      { id: 8, text: "★ SKIN UNLOCKED: EMPLOYED 👔", type: "success", delay: 5500 },
    ];

    let timeouts: NodeJS.Timeout[] = [];

    sequence.forEach((line) => {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (line.type === "success") {
            setTimeout(() => setShowOffer(true), 500);
        }
      }, line.delay || 0);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#fafafa]">
      
      {/* 1. DOODLE BACKGROUND */}
      <motion.div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')",
        }}
      />
      
      {/* Blobby Background */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-left relative z-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] rotate-2 hover:rotate-0 transition-transform cursor-default">
            <span className="text-xl">🔒</span>
            <span className="text-xs font-black text-black tracking-wide uppercase">It's Time To Lock In</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] mb-6">
            ESCAPE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              TUTORIAL HELL.
            </span>
          </h1>

          <p className="text-xl text-slate-700 max-w-lg mb-10 font-bold leading-relaxed">
            Stop building boring calculator apps. <br/>
            <span className="bg-yellow-300 px-1 border-b-4 border-black inline-block transform -rotate-1">Build stuff that gets you the bag. 💰</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <NeuButton primary onClick={() => router.push("/dashboard")}>
              Start Grinding <Zap className="ml-2 w-5 h-5 fill-yellow-400 text-yellow-400"/>
            </NeuButton>
            <button 
              onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 text-lg font-black text-slate-900 underline decoration-4 decoration-yellow-400 underline-offset-4 hover:decoration-blue-500 transition-all"
            >
              How it works?
            </button>
          </div>
        </motion.div>

        {/* RIGHT: THE TERMINAL */}
        <div className="relative h-[480px] w-full hidden lg:flex justify-center items-center">
           
           {/* Terminal Window */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
             className="relative w-full max-w-lg bg-[#0d0d0d] rounded-xl border-4 border-black shadow-[16px_16px_0px_0px_#000] overflow-hidden flex flex-col z-10"
           >
              {/* Header */}
              <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b-4 border-black">
                  <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-600 border border-red-800" />
                      <div className="w-4 h-4 rounded-full bg-yellow-600 border border-yellow-800" />
                      <div className="w-4 h-4 rounded-full bg-green-600 border border-green-800" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 flex items-center gap-2 font-bold uppercase">
                     life_controller.exe
                  </div>
              </div>

              {/* Body */}
              <div className="p-6 font-mono text-sm h-[320px] overflow-hidden relative bg-[#0d0d0d]">
                  <div className="relative z-10 space-y-3">
                    {lines.map((line) => (
                        <motion.div 
                            key={line.id} 
                            initial={{ opacity: 0, x: -10 }} 
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-3"
                        >
                            <span className={`
                                ${line.type === 'dim' ? 'text-slate-600' : ''}
                                ${line.type === 'cmd' ? 'text-blue-400 font-bold' : ''}
                                ${line.type === 'log' ? 'text-slate-400' : ''}
                                ${line.type === 'success' ? 'text-green-400 font-black' : ''}
                                ${line.type === 'error' ? 'text-red-500 font-bold' : ''}
                                ${line.type === 'warn' ? 'text-yellow-500 font-bold' : ''}
                                ${line.type === 'highlight' ? 'text-white bg-blue-600 px-1 font-black' : ''}
                            `}>
                                {line.text}
                            </span>
                        </motion.div>
                    ))}
                    {!showOffer && (
                         <motion.div 
                            animate={{ opacity: [0, 1, 0] }} 
                            transition={{ repeat: Infinity, duration: 0.8 }} 
                            className="w-3 h-5 bg-green-500 inline-block align-middle ml-2"
                         />
                    )}
                  </div>
              </div>
           </motion.div>

           {/* THE "LIGHT MODE LEGENDARY" CARD */}
           <AnimatePresence>
            {showOffer && (
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 100, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="absolute -right-8 bottom-10 z-50 w-80 cursor-pointer group"
                    whileHover={{ scale: 1.05, rotate: 0 }}
                >
                    {/* Outer Frame: Gold/Yellow for Rarity */}
                    <div className="relative bg-yellow-400 p-1 rounded-2xl border-4 border-black shadow-[12px_12px_0px_0px_#000]">
                        
                        {/* Rarity Badge */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black border-4 border-black px-4 py-1 rounded-full whitespace-nowrap z-20 shadow-sm">
                            <span className="font-black text-xs uppercase tracking-widest flex items-center gap-1">
                                💎 LEGENDARY DROP
                            </span>
                        </div>

                        {/* Card Body: White */}
                        <div className="bg-white p-5 rounded-xl border-2 border-black relative overflow-hidden">
                            
                            {/* Holographic Sheen Animation */}
                            <motion.div 
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent skew-x-12 z-0"
                            />

                            <div className="relative z-10 flex items-center gap-4 mt-2">
                                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center border-2 border-black text-yellow-400 text-2xl shadow-sm">
                                    🚀
                                </div>
                                <div>
                                    <h3 className="font-black text-xl text-black leading-none">Full Stack  Dev</h3>
                                    <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">Startup_Inc • Bhilai</p>
                                </div>
                            </div>

                            <div className="relative z-10 mt-5 flex justify-between items-end border-t-2 border-slate-100 pt-4">
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold">Total Comp</p>
                                    <span className="font-black text-green-600 text-2xl tracking-tight">₹ 15 LPA</span>
                                </div>
                                <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-yellow-400 hover:text-black border-2 border-transparent hover:border-black transition-all font-bold text-xs uppercase">
                                    CLAIM
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
           </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

// --- MARQUEE ---
const Marquee = () => (
  <div className="bg-black py-5 border-y-2 border-black overflow-hidden whitespace-nowrap -rotate-1 shadow-xl relative z-20">
    <motion.div
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      className="inline-flex gap-12 text-white font-black text-3xl uppercase tracking-tighter italic"
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center gap-4">
          <Zap className="fill-yellow-400 text-yellow-400 w-6 h-6" />{" "}
          SKILL-FIRST HIRING <span className="text-slate-600">///</span>
        </span>
      ))}
    </motion.div>
  </div>
);

// --- PROBLEM / SOLUTION ---
const ProblemSolution = () => {
  return (
    <section id="problem" className="py-24 px-6 bg-white border-b-2 border-black z-10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* PROBLEM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-4xl font-black mb-8 uppercase text-slate-300 group-hover:text-black transition-colors">
              The Struggle
            </h3>
            <div className="space-y-6">
              {[
                { text: "Resume rejected by ATS bots", color: "bg-red-400" },
                { text: "Tutorial hell with no direction", color: "bg-red-400" },
                { text: "Applying to 100+ jobs, 0 replies", color: "bg-red-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 bg-slate-50 group-hover:border-red-500 group-hover:bg-red-50 transition-all"
                >
                  <div className={`w-4 h-4 rounded-sm ${item.color} border border-black`} />
                  <span className="font-bold text-slate-500 line-through decoration-red-500 decoration-2 group-hover:text-black">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SOLUTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-3 translate-y-3 border-2 border-black" />
            <div className="relative p-10 rounded-3xl bg-white border-2 border-black">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 border-2 border-black rounded-lg flex items-center justify-center">
                  <Check className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-black text-black uppercase">The Fix</h3>
              </div>
              <ul className="space-y-6 text-lg font-bold text-black">
                {[
                    "Roadmaps based on live local data",
                    "GitHub analysis replaces the PDF resume",
                    "Direct introductions to hiring managers"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-400 border-2 border-black rounded flex items-center justify-center flex-shrink-0">
                            <Check size={16} />
                        </div>
                        <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- HOW IT WORKS ---
const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Scan Market", desc: "Our AI scrapes job boards in your city.", icon: Search },
    { num: "02", title: "Build Plan", desc: "Get a curriculum of exact skills needed.", icon: MapPin },
    { num: "03", title: "Verify Code", desc: "Ship projects. AI reviews your commits.", icon: Code },
    { num: "04", title: "Get Offer", desc: "Skip the line. Get matched directly.", icon: Award },
  ];

  return (
    <section id="how" className="py-24 px-6 max-w-7xl mx-auto bg-white relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">How it works</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, boxShadow: "8px 8px 0px 0px #000" }}
            className="bg-white border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000] relative overflow-hidden flex flex-col items-start cursor-default transition-all"
          >
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-6 border-2 border-black shadow-[2px_2px_0px_0px_#94a3b8]">
              <step.icon size={24} />
            </div>
            <h3 className="text-xl font-black mb-2">{step.title}</h3>
            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8">{step.desc}</p>
            <span className="absolute bottom-2 right-4 text-6xl font-black text-slate-100 -z-0 select-none font-mono">{step.num}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- FEATURES ---
const Features = () => (
  <section id="features" className="py-24 px-6 bg-slate-100 border-t-2 border-black pattern-grid relative z-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-black mb-12 text-center">BATTERIES INCLUDED.</h2>
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        
        {/* Large Feature */}
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="md:col-span-2 md:row-span-2 bg-black text-white p-10 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#94a3b8] flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white border-2 border-white">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-4xl font-black mb-4 tracking-tighter">Real-Time Demand Engine</h3>
            <p className="text-slate-300 text-lg max-w-lg leading-relaxed">
              Most courses teach you 2021 tech. We track the market in real-time. If React demand drops and Svelte rises in your city, your roadmap updates instantly.
            </p>
          </div>
          <div className="mt-8 bg-slate-900/80 p-6 rounded-xl border border-white/20 font-mono text-sm text-green-400 shadow-inner relative z-10 backdrop-blur-sm">
            <p>{">"} Scanning 142 local job boards...</p>
            <p>{">"} Detected: <span className="text-white">15% increase</span> in Next.js demand.</p>
            <p>{">"} Updating curriculum: <span className="animate-pulse">Done.</span></p>
          </div>
        </motion.div>

        {/* Small Feature 1 */}
        <motion.div whileHover={{ scale: 0.98 }} className="bg-white p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#94a3b8] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400 rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
          <Terminal className="w-10 h-10 mb-4 text-blue-600 relative z-10" />
          <h3 className="text-2xl font-black mb-2 relative z-10">Code Analysis</h3>
          <p className="text-slate-600 font-medium relative z-10">AI reviews your GitHub commits to verify actual skill mastery.</p>
        </motion.div>

        {/* Small Feature 2 */}
        <motion.div whileHover={{ scale: 0.98 }} className="bg-[#CCFF00] p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#000] relative overflow-hidden group">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
          <MapPin className="w-10 h-10 mb-4 text-black relative z-10" />
          <h3 className="text-2xl font-black mb-2 text-black relative z-10">Local First</h3>
          <p className="text-slate-800 font-bold relative z-10">Focus on startups in your city, not just remote unicorns.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- FAQ ---
const FAQItem = ({ question, answer }: { question: string; answer: string; }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-2 border-black rounded-xl overflow-hidden bg-white shadow-[4px_4px_0px_0px_#000] transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="font-bold text-lg pr-4">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed border-t-2 border-slate-100 bg-slate-50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 px-6 bg-white border-t-2 border-black relative z-10">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-black mb-12 text-center uppercase">Common Questions</h2>
      <div className="flex flex-col gap-4">
        <FAQItem question="Is SkillPulse free for students?" answer="Yes! If you have a valid .edu email or student ID, you get full access to the AI roadmap and project verifier for free." />
        <FAQItem question="How do you verify my skills?" answer="We connect to your GitHub. Our AI analyzes your code quality, commit history, and project complexity. No manual upload needed." />
        <FAQItem question="Does this work for non-coding jobs?" answer="Currently, we are focused on Tech (Dev, Design, Data). We will expand to Marketing and Sales in Q4 2025." />
      </div>
    </div>
  </section>
);

// --- CTA ---
const CTA = () => {
  const router = useRouter();
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden border-t-2 border-black z-10">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter">
          STOP GUESSING. <br /> START <span className="text-blue-600">BUILDING.</span>
        </h2>
        <div className="flex justify-center">
          <NeuButton primary onClick={() => router.push("/dashboard")} className="text-xl px-12 py-6">
            Build Skills That Get You Hired
          </NeuButton>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  const redirectUrl = "https://chandrashekhar.life";
  const footerLinks = {
    Product: ["Changelog", "Roadmap", "Pricing", "Download"],
    Company: ["About Us", "Manifesto", "Careers", "Press Kit"],
    Resources: ["Blog", "Community", "Support", "Status"],
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t-4 border-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          {/* Logo in Footer */}
          <a href={redirectUrl} className="flex items-center gap-2 mb-6 cursor-pointer">
             <div className="w-8 h-8 bg-white border-2 border-white rounded flex items-center justify-center">
                <Zap className="text-black fill-black" size={16} />
             </div>
             <span className="font-black text-xl tracking-tighter text-white">SkillPulse.</span>
          </a>
          <p className="text-slate-400 font-medium mb-6">
            The operating system for your career. Local jobs, verified skills, real results.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href={redirectUrl} className="p-2 bg-white/10 rounded-lg hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-transparent hover:border-white">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">{category}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              {links.map((link, j) => (
                <li key={j}>
                  <a href={redirectUrl} className="hover:text-blue-400 transition-colors cursor-pointer">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>© 2025 SkillPulse Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href={redirectUrl} className="hover:text-white cursor-pointer">Privacy Policy</a>
          <a href={redirectUrl} className="hover:text-white cursor-pointer">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- BACK TO TOP ---
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-[60] p-4 bg-black text-white rounded-full border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:bg-blue-600 hover:scale-110 transition-all cursor-pointer"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- MAIN PAGE ---
export default function LandingPage() {
  return (
    <main className="font-sans text-black bg-white selection:bg-yellow-300 selection:text-black min-h-screen overflow-x-hidden">
      <GrainOverlay />
      <Navbar />
      <Hero />
      <Marquee />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}