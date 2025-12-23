"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Construction, Terminal, Coffee } from "lucide-react";

// --- REUSABLE COMPONENTS ---
const NeuButton = ({ children, onClick, className = "" }: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -4, x: -2, boxShadow: "6px 6px 0px 0px #000" }}
    whileTap={{ x: 2, y: 2, boxShadow: "2px 2px 0px 0px #000" }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className={`
      relative px-8 py-4 text-lg font-black border-2 border-black rounded-xl cursor-pointer
      shadow-[4px_4px_0px_0px_#000] flex items-center justify-center gap-3 tracking-wide
      bg-yellow-400 text-black hover:bg-yellow-300
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
    <main className="relative min-h-screen flex flex-col justify-center items-center bg-[#fafafa] overflow-hidden selection:bg-yellow-400 selection:text-black">
      <GrainOverlay />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Chaos Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 md:right-40 opacity-10 pointer-events-none"
      >
        <Construction size={120} className="text-black" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 md:left-40 opacity-10 pointer-events-none"
      >
        <Coffee size={100} className="text-black" />
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative z-10 max-w-lg w-full mx-6 bg-white border-4 border-black p-8 rounded-2xl shadow-[12px_12px_0px_0px_#000] text-center"
      >
        {/* Construction Tape */}
        <div className="absolute -top-4 -left-4 bg-yellow-400 border-4 border-black px-4 py-1 transform -rotate-6 z-20 shadow-sm">
          <span className="font-black text-xs uppercase tracking-widest">
            WIP 🚧
          </span>
        </div>

        {/* The Big 404 */}
        <div className="relative mb-2">
          <h1 className="text-8xl md:text-9xl font-black text-black tracking-tighter select-none leading-none">
            404
          </h1>
          <p className="text-xl font-bold text-slate-400 -mt-2 mb-6 tracking-wide">
            (Feature Not Found)
          </p>
        </div>

        {/* The Honest Truth */}
        <div className="bg-black text-white p-4 rounded-xl border-2 border-black mb-6 transform rotate-1">
          <h2 className="text-xl font-black uppercase mb-1 text-yellow-400">
            Chill, Judges. ✋
          </h2>
          <p className="text-sm font-medium leading-relaxed opacity-90">
            We literally didn't have time to build this part. We prioritized the
            cool features.
            <br />
            <span className="italic text-slate-400 block mt-2">
              "It's not a bug, it's a hackathon MVP."
            </span>
          </p>
        </div>

        {/* Terminal Logs */}
        <div className="bg-slate-100 border-2 border-slate-200 rounded-lg p-4 mb-8 text-left font-mono text-xs text-slate-600 overflow-hidden">
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-slate-400">{">"} checking_deadline...</p>
          <p className="text-red-500 font-bold">{">"} CRITICAL: 2 hours left</p>
          <p>{">"} skipping_boring_pages.exe...</p>
          <p className="text-blue-600 font-bold">
            {">"} focus: building_cool_stuff_only 🚀
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link href="/">
            <NeuButton>
              <Home size={20} /> Go Back to the Good Part
            </NeuButton>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
