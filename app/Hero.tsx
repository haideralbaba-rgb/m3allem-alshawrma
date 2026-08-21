"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpLeft,
  MapPin,
  Sparkles,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#070707]">

      {/* =========================================
          Background
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Orange glow */}

        <div
          className="
            absolute
            right-[-15%]
            top-[-15%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#ef5b2a]/[0.10]
            blur-[140px]
          "
        />

        {/* Green glow */}

        <div
          className="
            absolute
            bottom-[-20%]
            left-[-10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#123b31]/30
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

      </div>

      {/* =========================================
          Navigation
      ========================================== */}

      <nav className="relative z-20 mx-auto flex w-[min(1500px,calc(100%-40px))] items-center justify-between py-6 md:py-8">

        {/* Logo */}

        <motion.a
          href="#"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="group"
        >
          <div className="text-2xl font-black tracking-[-0.05em]">
            معلم
            <span className="text-[#ef5b2a]">.</span>
          </div>

          <div className="mt-1 text-[8px] font-bold tracking-[0.45em] text-white/30">
            M3ALLEM ALSHAWRMA
          </div>
        </motion.a>

        {/* Center */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="hidden items-center gap-2 text-[10px] text-white/35 md:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#ef5b2a] shadow-[0_0_15px_#ef5b2a]" />

          مفتوح الآن
        </motion.div>

        {/* Location */}

        <motion.a
          href="#contact"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[10px] text-white/50 backdrop-blur-xl transition hover:border-white/20 hover:text-white"
        >
          <MapPin size={13} />

          موقعنا
        </motion.a>

      </nav>

      {/* =========================================
          Main Hero
      ========================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-100px)] w-[min(1500px,calc(100%-40px))] items-center">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full pb-24 pt-10"
        >

          {/* Small label */}

          <motion.div
            variants={itemVariants}
            className="mb-7 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ef5b2a]/30 bg-[#ef5b2a]/10 text-[#ef5b2a]">
              <Sparkles size={15} />
            </div>

            <div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-[#ef5b2a]">
                SHAWARMA REDEFINED
              </div>

              <div className="mt-1 text-[9px] text-white/25">
                منذ أول لقمة
              </div>
            </div>
          </motion.div>

          {/* Massive title */}

          <div className="relative max-w-6xl">

            <motion.h1
              variants={itemVariants}
              className="
                font-black
                leading-[0.82]
                tracking-[-0.07em]
                text-[clamp(4.5rem,13vw,12rem)]
              "
            >
              <span className="block">
                معلم
                <span className="text-[#ef5b2a]">.</span>
              </span>

              <span
                className="
                  block
                  text-transparent
                  [-webkit-text-stroke:1px_rgba(245,239,229,.45)]
                  md:[-webkit-text-stroke:2px_rgba(245,239,229,.45)]
                "
              >
                شاورما
              </span>
            </motion.h1>

            {/* Decorative number */}

            <motion.div
              variants={itemVariants}
              className="absolute -left-2 bottom-0 hidden translate-y-full flex-col text-left md:flex"
              dir="ltr"
            >
              <span className="text-[9px] tracking-[0.35em] text-white/20">
                EST.
              </span>

              <span className="text-sm font-bold text-white/30">
                M3A
              </span>
            </motion.div>

          </div>

          {/* Bottom content */}

          <div className="mt-12 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">

            {/* Description */}

            <motion.div
              variants={itemVariants}
              className="max-w-md"
            >
              <p className="text-sm leading-8 text-white/40 md:text-base">
                مو مجرد شاورما.
                <br />

                <span className="text-white/80">
                  هذا المكان اللي تروحله لما الجوع
                  يصير قرار.
                </span>
              </p>
            </motion.div>

            {/* CTA */}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >

              <motion.a
                href="#menu"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#ef5b2a]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_0_50px_rgba(239,91,42,.15)]
                  transition-shadow
                  hover:shadow-[0_0_70px_rgba(239,91,42,.3)]
                "
              >
                شوف المنيو

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 group-hover:-rotate-45">
                  <ArrowUpLeft size={16} />
                </span>
              </motion.a>

            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* =========================================
          Bottom Scroll Indicator
      ========================================== */}

      <motion.a
        href="#menu"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/25 transition hover:text-white/60"
      >

        <span className="text-[8px] tracking-[0.35em]">
          SCROLL
        </span>

        <motion.span
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.span>

      </motion.a>

      {/* =========================================
          Side label
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          hidden
          -translate-y-1/2
          -rotate-90
          text-[8px]
          tracking-[0.5em]
          text-white/15
          lg:block
        "
        dir="ltr"
      >
        AUTHENTIC • BOLD • MASTER
      </div>

    </section>
  );
            }
