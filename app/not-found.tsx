"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Heart, Zap, Coffee } from "lucide-react";

// --- REUSABLE COMPONENTS ---
const NeuButton = ({ children, onClick, className = "" }: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -4, x: -2, boxShadow: "4px 4px 0px 0px #000" }}
    whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px #000" }}
    className={`
      relative w-full md:w-auto px-8 py-4 text-lg font-black border-2 border-black rounded-xl cursor-pointer
      shadow-[4px_4px_0px_0px_#000] flex items-center justify-center gap-3 tracking-wide
      bg-black text-white hover:bg-slate-900
      ${className}
    `}
  >
    {children}
  </motion.button>
);

const GrainOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-overlay"
    style={{
      backgroundImage:
        'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
    }}
  ></div>
);

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center bg-[#f0f0f0] overflow-hidden p-6">
      <GrainOverlay />

      {/* Mobile-Friendly Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating Icons (Animated) */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-slate-300"
      >
        <Coffee size={48} />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 text-slate-300"
      >
        <Zap size={48} />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative z-10 max-w-md w-full bg-white border-2 border-black p-6 md:p-10 rounded-3xl shadow-[8px_8px_0px_0px_#000] text-center"
      >
        {/* The Badge */}
        <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-1.5 rounded-full transform -rotate-2 mb-6 shadow-sm">
          <span className="font-black text-xs md:text-sm uppercase tracking-widest text-black">
            Hackathon Reality Check 🚧
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4 leading-none">
          404.
        </h1>

        <h2 className="text-xl md:text-2xl font-black text-black uppercase mb-4">
          We Ran Out of Time 😭
        </h2>

        {/* The "Note" Body */}
        <div className="bg-blue-50 p-4 md:p-6 rounded-xl border-2 border-blue-100 mb-8">
          <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
            Look, we prioritized the cool features over this page. We literally
            coded this at 3 AM.
          </p>
          <div className="my-4 h-0.5 bg-blue-200 w-full rounded-full opacity-50" />
          <p className="text-slate-900 font-black text-sm md:text-base italic">
            "Please select us! The rest of the app actually works, we promise.
            We love to build! ❤️"
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="w-full">
            <NeuButton className="w-full">
              <Home size={18} /> Go Back Home
            </NeuButton>
          </Link>
          <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-wide">
            (Judges, please ignore this bug)
          </p>
        </div>
      </motion.div>
    </main>
  );
}
