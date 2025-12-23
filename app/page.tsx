"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  TrendingUp,
  MapPin,
  Award,
  Zap,
  Search,
} from "lucide-react";

// --- Utility for Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- Components ---

// 1. Navigation
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse" />
        SkillPulse.
      </div>
      <div className="hidden md:flex gap-6 font-bold text-sm">
        <a href="#problem" className="hover:text-blue-600 transition-colors">
          Why Us
        </a>
        <a href="#how" className="hover:text-blue-600 transition-colors">
          How it Works
        </a>
        <a href="#features" className="hover:text-blue-600 transition-colors">
          Features
        </a>
      </div>
      <button className="px-5 py-2 bg-black text-white font-bold rounded-full hover:bg-blue-600 hover:scale-105 transition-all active:scale-95">
        Get Started
      </button>
    </div>
  </nav>
);

// 2. Hero Section
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-block mb-4 px-4 py-1 rounded-full border-2 border-black bg-yellow-300 font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          🚀 Hiring 2.0 is here
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
        >
          Learn the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Right Skills.
          </span>
          <br />
          Get Hired{" "}
          <span className="relative inline-block">
            Faster.
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium"
        >
          Stop learning in the dark. Our real-time AI connects your learning
          roadmap directly to local hiring demand. No fluff, just results.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2">
            Start Your Roadmap <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white text-black text-lg font-bold rounded-xl border-2 border-black hover:bg-slate-50 transition-all">
            See How It Works
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

// 3. Problem / Solution Section
const ProblemSolution = () => {
  return (
    <section
      id="problem"
      className="py-24 px-6 bg-slate-50 border-y-2 border-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black mb-4">
            The Old Way vs. The SkillPulse Way
          </h2>
          <p className="text-slate-600 text-lg">Why guess when you can know?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white border-2 border-slate-200 opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-slate-400">
                The Struggle
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <span className="w-2 h-2 bg-red-300 rounded-full" /> Confused
                about what to learn
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <span className="w-2 h-2 bg-red-300 rounded-full" /> Resume
                rejected by bots
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <span className="w-2 h-2 bg-red-300 rounded-full" /> Skills
                don't match job description
              </li>
            </ul>
          </motion.div>

          {/* After Card (SkillPulse) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white border-2 border-black shadow-[8px_8px_0px_0px_#4F46E5]"
          >
            <div className="absolute -top-4 -right-4 bg-yellow-300 border-2 border-black px-4 py-1 rounded-full font-bold text-sm transform rotate-3">
              GAME CHANGER
            </div>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-black">The Solution</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-black font-bold text-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full" /> Clear,
                AI-driven skill roadmap
              </li>
              <li className="flex items-center gap-3 text-black font-bold text-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full" /> Verified
                project portfolio
              </li>
              <li className="flex items-center gap-3 text-black font-bold text-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full" /> Hired for
                skills, not keywords
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 4. How It Works
const steps = [
  {
    icon: Search,
    title: "AI Tracks Demand",
    desc: "Our engine scans local job markets for real-time skill gaps.",
  },
  {
    icon: MapPin,
    title: "You Get a Roadmap",
    desc: "Receive a personalized path to learn exactly what's needed.",
  },
  {
    icon: Zap,
    title: "Verify Skills",
    desc: "Complete real-world projects to prove you can do the job.",
  },
  {
    icon: Award,
    title: "Get Hired",
    desc: "Companies view your verified skills and hire you directly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-center mb-16"
      >
        From <span className="text-purple-600">Lost</span> to{" "}
        <span className="text-blue-600">Hired</span>
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-6 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-slate-200 -z-10 w-[90%] mx-auto" />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center bg-white p-6"
          >
            <div className="w-24 h-24 rounded-full bg-white border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
              <step.icon className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 5. Key Features
const features = [
  {
    title: "Real-time Demand",
    desc: "Live data on what companies near you are actually looking for.",
    color: "bg-blue-100",
  },
  {
    title: "AI Roadmaps",
    desc: "Dynamic curriculum that adapts as the market changes.",
    color: "bg-purple-100",
  },
  {
    title: "Skill Verification",
    desc: "Automated code reviews and project assessments.",
    color: "bg-green-100",
  },
  {
    title: "Local Discovery",
    desc: "Connect with startups and agencies in your specific city.",
    color: "bg-yellow-100",
  },
  {
    title: "No Resumes",
    desc: "Your project portfolio is your new CV. Proof over promises.",
    color: "bg-pink-100",
  },
  {
    title: "Mentor Access",
    desc: "Get unstuck with AI or human mentor help instantly.",
    color: "bg-orange-100",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-4">
            Everything you need to level up.
          </h2>
          <p className="text-slate-400 text-lg">
            Built for the modern learner, designed for the future of work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-8 rounded-2xl text-black ${feature.color} border-2 border-white/20`}
            >
              <TrendingUp className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="opacity-80 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. CTA & Footer
const CTA = () => {
  return (
    <section className="py-24 px-6 bg-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Stop guessing. <br /> Start learning what matters.
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-yellow-400 text-black text-xl font-bold rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          Build Skills That Get You Hired
        </motion.button>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t-2 border-black text-center">
    <p className="font-bold text-slate-800">
      © {new Date().getFullYear()} SkillPulse. All rights reserved.
    </p>
  </footer>
);

// --- Main Page Component ---
export default function LandingPage() {
  return (
    <main className="font-sans text-slate-900 bg-white selection:bg-yellow-200">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
