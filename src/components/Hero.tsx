"use client";

import { motion } from "motion/react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { useEffect, useState } from "react";

export default function HeroSectionOne() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Cursor tracking for dynamic glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* --- Enhanced Dynamic Glow following cursor --- */}
      <div
        className="absolute -z-10 h-[600px] w-[600px] rounded-full blur-[120px] opacity-50 pointer-events-none transition-transform duration-200 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.5), rgba(59,130,246,0.05), transparent 80%)",
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />

      {/* Floating gradient layers for ambient depth */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl animate-bounce" />
      </div>

      {/* --- Hero Container --- */}
      <div className="relative mx-auto max-w-7xl w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full rounded-3xl border border-blue-100 dark:border-blue-900 bg-white/60 dark:bg-neutral-900/60 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:shadow-blue-200/50 dark:hover:shadow-blue-800/30"
        >
          {/* Glowing border lines */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none">
            <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="absolute inset-x-10 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="absolute inset-y-10 left-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
            <div className="absolute inset-y-10 right-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
          </div>

          {/* --- Hero Content --- */}
          <div className="px-8 pt-24 pb-20 md:px-14 md:pb-28 relative z-10">
            <MaskContainer
              revealText={
                <h1 className="mx-auto max-w-5xl text-3xl md:text-5xl lg:text-7xl font-extrabold text-neutral-900 dark:text-white leading-snug tracking-tight">
                  Fusion Marketing Agency
                </h1>
              }
              className="h-fit mb-10 text-center"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 dark:from-blue-100 dark:via-blue-400 dark:to-blue-600 leading-relaxed tracking-wide drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                We Are <span className="text-blue-400">Fusion</span>, We Make The Impossible Happen.
              </motion.p>
            </MaskContainer>

            {/* --- Description --- */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mx-auto max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-12"
            >
              Powering the digital future through creativity, precision, and bold innovation — redefining what’s possible in modern marketing.
            </motion.p>

            {/* --- Buttons --- */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {/* Explore Button → Go to Services */}
              <a href="#services">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#fff",
                    color: "#1d4ed8",
                    boxShadow: "0 0 35px rgba(37,99,235,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-48 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-3 shadow-md transition-all duration-500"
                >
                  Explore Now
                </motion.button>
              </a>

              {/* Contact Button → Go to Contact */}
              <a href="#contact">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    background: "linear-gradient(to right, #2563eb, #3b82f6)",
                    color: "#fff",
                    boxShadow: "0 0 30px rgba(59,130,246,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-48 rounded-xl border border-blue-400 bg-white text-blue-600 font-semibold px-6 py-3 transition-all duration-500 hover:shadow-md"
                >
                  Contact Support
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
