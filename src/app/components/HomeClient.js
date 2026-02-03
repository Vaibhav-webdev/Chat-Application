"use client";

import { useState } from "react";
import Left from "./Left";
import Right from "./Right";

export default function HomeClient() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center relative bg-[#017092] overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[180px] opacity-40" />

      <div
        className="relative w-[90%] max-w-6xl h-[90vh] lg:h-[80vh] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex overflow-hidden"
      >
        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="absolute top-4 left-4 z-50 md:hidden text-white text-2xl"
        >
          ☰
        </button>

        <Left open={open} setOpen={setOpen} />
        <Right />
      </div>
    </main>
  );
}
