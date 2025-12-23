"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Coffee, Construction } from "lucide-react";

// --- REUSABLE COMPONENTS ---
const NeuButton = ({ children, onClick, className = "" }: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -4, x: -2, boxShadow: "6px 6px 0px 0px #000" }}
    whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px #000" }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
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
    <main className="relative min-h-screen flex flex-col justify-center items-center bg-[#f0f0f0] overflow-hidden p-6 md:p-12 selection:bg-yellow-400 selection:text-black">
      <GrainOverlay />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Chaos Elements (PC Only - Bigger & More Visible) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 opacity-10 pointer-events-none hidden md:block"
      >
        <Construction size={180} className="text-black" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 opacity-10 pointer-events-none hidden md:block"
      >
        <Coffee size={180} className="text-black" />
      </motion.div>

      {/* MAIN CARD CONTAINER */}
      {/* Changes: max-w-md (mobile) -> max-w-5xl (PC) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative z-10 w-full max-w-md md:max-w-5xl bg-white border-4 border-black p-6 md:p-12 rounded-3xl shadow-[12px_12px_0px_0px_#000]"
      >
        {/* Layout Grid: Stacks on mobile, Side-by-Side on PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: THE HEADLINE */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-1.5 rounded-full transform -rotate-2 mb-6 shadow-sm">
              <span className="font-black text-xs md:text-sm uppercase tracking-widest text-black">
                Hackathon Reality Check 🚧
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter mb-2 leading-[0.9]">
              404.
            </h1>

            <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-6 leading-tight">
              We Ran Out of Time 😭
            </h2>

            {/* PC-Only Description Text */}
            <p className="hidden md:block text-slate-500 font-bold text-lg leading-relaxed max-w-md">
              The developers were fueled by caffeine and pure panic. This page
              was sacrificed for the greater good of the MVP.
            </p>
          </div>

          {/* RIGHT COLUMN: THE "NOTE" & ACTION */}
          <div className="flex flex-col gap-6">
            {/* The Blue Note Box */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-2xl border-2 border-blue-100 relative overflow-hidden group hover:border-blue-300 transition-colors">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform" />

              <p className="text-slate-700 font-bold text-sm md:text-lg leading-relaxed">
                "Look, we prioritized the cool AI features over this page. We
                literally coded this at 3 AM."
              </p>

              <div className="my-6 h-0.5 bg-blue-200 w-full rounded-full opacity-50" />

              <p className="text-slate-900 font-black text-sm md:text-lg italic">
                "Please select us! The rest of the app actually works, we
                promise. We love to build! ❤️"
              </p>
            </div>

            {/* Action Buttons */}
            <div>
              <Link href="/" className="block">
                <NeuButton className="w-full md:text-xl md:py-5">
                  <Home size={20} /> Go Back Home
                </NeuButton>
              </Link>

              <p className="text-center text-xs text-slate-400 font-bold mt-4 uppercase tracking-wide">
                (Judges, please ignore this bug)
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
