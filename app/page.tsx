"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
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
  Layers,
  Cpu,
} from "lucide-react";

// --- GLOBAL STYLES & TEXTURE ---
// Adds that premium "grainy" feel to the background
const GrainOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03] mix-blend-overlay"
    style={{
      backgroundImage:
        'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
    }}
  ></div>
);

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// --- REUSABLE COMPONENTS ---

// 1. NeuButton (Refined & Tactile)
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

// 2. Navbar
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
          className="text-2xl font-black tracking-tighter flex items-center gap-2 text-black cursor-pointer group"
        >
          <div className="w-8 h-8 bg-blue-600 border-2 border-black rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap className="text-white w-4 h-4 fill-current" />
          </div>
          SkillPulse.
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

// 3. Floating Icons Component for Hero
const FloatingIcon = ({ icon: Icon, delay, top, left, color }: any) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
    className={`absolute hidden lg:flex w-16 h-16 ${color} border-2 border-black rounded-2xl items-center justify-center shadow-[4px_4px_0px_0px_#000] z-0`}
    style={{ top, left }}
  >
    <Icon className="w-8 h-8 text-black" />
  </motion.div>
);

// 4. Hero Section
const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#fafafa]">
      {/* Background Tech Elements */}
      <FloatingIcon
        icon={Code}
        delay={0}
        top="15%"
        left="10%"
        color="bg-yellow-300"
      />
      <FloatingIcon
        icon={Terminal}
        delay={1}
        top="20%"
        left="85%"
        color="bg-blue-300"
      />
      <FloatingIcon
        icon={Cpu}
        delay={2}
        top="70%"
        left="15%"
        color="bg-green-300"
      />
      <FloatingIcon
        icon={Layers}
        delay={1.5}
        top="65%"
        left="80%"
        color="bg-purple-300"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto text-center z-10 relative"
      >
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
          <div className="px-5 py-2 rounded-full border-2 border-black bg-white font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Public Beta is Live
          </div>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9]">
            <span className="block mb-2">LEARN SKILLS.</span>
            <span className="block text-blue-600 relative">
              GET HIRED.
              <svg
                className="absolute w-full h-4 bottom-1 left-0 text-yellow-400 -z-10 opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 15 100 5"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>
        </div>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          The operating system for your career. We align your learning roadmap
          with{" "}
          <span className="bg-black text-white px-2 py-0.5 font-bold">
            real-time local demand
          </span>
          .
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <NeuButton primary onClick={() => router.push("/dashboard")}>
            Start Your Roadmap <ArrowRight className="w-5 h-5" />
          </NeuButton>
          <NeuButton
            onClick={() =>
              document
                .getElementById("how")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Demo
          </NeuButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

// 5. Infinite Marquee
const Marquee = () => (
  <div className="bg-black py-5 border-y-2 border-black overflow-hidden whitespace-nowrap rotate-1 shadow-xl">
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

// 6. Problem / Solution
const ProblemSolution = () => {
  return (
    <section
      id="problem"
      className="py-24 px-6 bg-white border-b-2 border-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* PROBLEM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-4xl font-black mb-8 uppercase text-slate-300 group-hover:text-slate-400 transition-colors">
              The Struggle
            </h3>
            <div className="space-y-6">
              {[
                { text: "Resume rejected by ATS bots", color: "bg-red-400" },
                {
                  text: "Tutorial hell with no direction",
                  color: "bg-red-400",
                },
                {
                  text: "Applying to 100+ jobs, 0 replies",
                  color: "bg-red-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 bg-slate-50 group-hover:border-red-200 transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="font-bold text-slate-500 line-through decoration-red-400 decoration-2">
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
            {/* Offset Background */}
            <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-3 translate-y-3 border-2 border-black" />

            <div className="relative p-10 rounded-3xl bg-white border-2 border-black">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 border-2 border-black rounded-lg flex items-center justify-center">
                  <Check className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-black text-black uppercase">
                  The Fix
                </h3>
              </div>
              <ul className="space-y-6 text-lg font-bold text-black">
                <li className="flex items-center gap-3">
                  <Check className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span>
                    Roadmaps based on{" "}
                    <span className="bg-yellow-300 px-1 border border-black">
                      live local data
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span>GitHub analysis replaces the PDF resume</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span>Direct introductions to hiring managers</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 7. How It Works
const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Scan Market",
      desc: "Our AI scrapes job boards in your city.",
      icon: Search,
    },
    {
      num: "02",
      title: "Build Plan",
      desc: "Get a curriculum of exact skills needed.",
      icon: MapPin,
    },
    {
      num: "03",
      title: "Verify Code",
      desc: "Ship projects. AI reviews your commits.",
      icon: Code,
    },
    {
      num: "04",
      title: "Get Offer",
      desc: "Skip the line. Get matched directly.",
      icon: Award,
    },
  ];

  return (
    <section id="how" className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
          How it works
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000] relative overflow-hidden flex flex-col items-start cursor-default"
          >
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-6 border-2 border-black shadow-[2px_2px_0px_0px_#94a3b8]">
              <step.icon size={24} />
            </div>
            <h3 className="text-xl font-black mb-2">{step.title}</h3>
            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8">
              {step.desc}
            </p>
            <span className="absolute bottom-2 right-4 text-6xl font-black text-slate-100 -z-0 select-none">
              {step.num}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 8. Bento Features (With Hover Glow)
const Features = () => (
  <section
    id="features"
    className="py-24 px-6 bg-slate-100 border-t-2 border-black pattern-grid"
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-black mb-12 text-center">
        BATTERIES INCLUDED.
      </h2>
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Large Feature */}
        <motion.div
          whileHover={{ scale: 0.99 }}
          className="md:col-span-2 md:row-span-2 bg-black text-white p-10 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#94a3b8] flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 text-white border-2 border-white">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-4xl font-black mb-4 tracking-tighter">
              Real-Time Demand Engine
            </h3>
            <p className="text-slate-300 text-lg max-w-lg leading-relaxed">
              Most courses teach you 2021 tech. We track the market in
              real-time. If React demand drops and Svelte rises in your city,
              your roadmap updates instantly.
            </p>
          </div>
          {/* Mock UI in Feature - FIXED JSX ESCAPING */}
          <div className="mt-8 bg-slate-900/50 p-6 rounded-xl border border-white/20 font-mono text-sm text-green-400 shadow-inner">
            <div className="flex gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p>{">"} Scanning 142 local job boards...</p>
            <p>
              {">"} Detected: <span className="text-white">15% increase</span>{" "}
              in Next.js demand.
            </p>
            <p>
              {">"} Updating curriculum:{" "}
              <span className="animate-pulse">Done.</span>
            </p>
          </div>
        </motion.div>

        {/* Small Feature 1 */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="bg-white p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#94a3b8]"
        >
          <Terminal className="w-10 h-10 mb-4 text-blue-600" />
          <h3 className="text-2xl font-black mb-2">Code Analysis</h3>
          <p className="text-slate-600 font-medium">
            AI reviews your GitHub commits to verify actual skill mastery.
          </p>
        </motion.div>

        {/* Small Feature 2 */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="bg-[#CCFF00] p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#000]"
        >
          <MapPin className="w-10 h-10 mb-4 text-black" />
          <h3 className="text-2xl font-black mb-2 text-black">Local First</h3>
          <p className="text-slate-800 font-bold">
            Focus on startups in your city, not just remote unicorns.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// 9. FAQ Section (Accordion)
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
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
  <section id="faq" className="py-24 px-6 bg-white border-t-2 border-black">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-black mb-12 text-center uppercase">
        Common Questions
      </h2>
      <div className="flex flex-col gap-4">
        <FAQItem
          question="Is SkillPulse free for students?"
          answer="Yes! If you have a valid .edu email or student ID, you get full access to the AI roadmap and project verifier for free."
        />
        <FAQItem
          question="How do you verify my skills?"
          answer="We connect to your GitHub. Our AI analyzes your code quality, commit history, and project complexity. No manual upload needed."
        />
        <FAQItem
          question="Does this work for non-coding jobs?"
          answer="Currently, we are focused on Tech (Dev, Design, Data). We will expand to Marketing and Sales in Q4 2025."
        />
      </div>
    </div>
  </section>
);

// 10. CTA Section
const CTA = () => {
  const router = useRouter();
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden border-t-2 border-black">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter">
          STOP GUESSING. <br /> START{" "}
          <span className="text-blue-600">BUILDING.</span>
        </h2>
        <div className="flex justify-center">
          <NeuButton
            primary
            onClick={() => router.push("/dashboard")}
            className="text-xl px-12 py-6"
          >
            Build Skills That Get You Hired
          </NeuButton>
        </div>
      </div>
    </section>
  );
};

// 11. Footer
const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10 border-t-4 border-black">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-blue-600 border-2 border-white rounded-md" />
          SkillPulse.
        </div>
        <p className="text-slate-400 font-medium mb-6">
          The operating system for your career. Local jobs, verified skills,
          real results.
        </p>
        <div className="flex gap-4">
          {[Twitter, Github, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Links Sections */}
      {["Product", "Company", "Resources"].map((head, i) => (
        <div key={i}>
          <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider">
            {head}
          </h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            {[1, 2, 3, 4].map((_, j) => (
              <li key={j}>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Link Item {j + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
      <p>© 2025 SkillPulse Inc. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white cursor-pointer">
          Privacy
        </a>
        <a href="#" className="hover:text-white cursor-pointer">
          Terms
        </a>
      </div>
    </div>
  </footer>
);

// 12. Back to Top
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
          className="fixed bottom-8 right-8 z-50 p-4 bg-black text-white rounded-full border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:bg-blue-600 hover:scale-110 transition-all cursor-pointer"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- MAIN LAYOUT ---
export default function LandingPage() {
  return (
    <main className="font-sans text-black bg-white selection:bg-yellow-300 selection:text-black min-h-screen">
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
