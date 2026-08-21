"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070707] px-6 text-white">

      {/* Orange Glow */}
      <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-[#ef5b2a]/20 blur-[120px]" />

      {/* Green Glow */}
      <div className="absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#123b31]/40 blur-[120px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <p className="mb-5 text-sm tracking-[0.3em] text-[#ef5b2a]">
          M3ALLEM ALSHAWRMA
        </p>

        <h1 className="text-7xl font-black md:text-9xl">
          معلم
          <span className="text-[#ef5b2a]">.</span>
        </h1>

        <h2 className="mt-2 text-5xl font-black text-white/40 md:text-7xl">
          شاورما
        </h2>

        <p className="mx-auto mt-8 max-w-md text-sm leading-8 text-white/40">
          مو مجرد شاورما.
          <br />
          هذا المكان اللي يروحله الجوع.
        </p>

        <button className="mt-8 rounded-full bg-[#ef5b2a] px-7 py-4 font-bold transition hover:scale-105">
          شوف المنيو
        </button>
      </motion.div>

    </section>
  );
}
