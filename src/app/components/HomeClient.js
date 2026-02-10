"use client";

import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import { motion } from "framer-motion";

export default function HomeClient() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center relative bg-[#017092] overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute w-full h-full bg-cyan-500 rounded-full blur-[180px] opacity-40" />

      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-[96%] lg:w-[90%] max-w-6xl min-h-[98vh] lg:min-h-[80vh] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex overflow-hidden"
      >
        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="absolute top-4 left-4 z-50 md:hidden text-white text-2xl active:scale-95 transition"
        >
          ☰
        </button>

        <Left open={open} setOpen={setOpen} />
        <Right />
      </motion.div>
    </main>
  );
}
