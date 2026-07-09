"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { ArrowDown, Download, Star, ChevronDown } from "lucide-react";

function ParticleBackground() {
  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Stars ref={ref} radius={50} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
    </group>
  );
}

const ROLES = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Laravel Developer",
  "Operations Tech Associate",
  "Software Tester"

];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Massive Outlined Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-0 pointer-events-none opacity-5 select-none">
        <h1 className="text-[15vw] font-heading font-black tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px white" }}>
          DEVELOPER
        </h1>
      </div>

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-pink/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-orange/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-7000" />

      {/* Content Container: Asymmetrical Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-20">

        {/* Left Side: Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative w-32 h-32 flex items-center justify-center"
          >
            {/* Rotating Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute inset-0 border border-white/20 rounded-full border-dashed"
            />
            <div className="absolute inset-2 border border-accent-orange/30 rounded-full flex items-center justify-center bg-accent-orange/5 backdrop-blur-sm">
              <Star className="w-5 h-5 text-accent-yellow animate-pulse" fill="currentColor" />
            </div>
            {/* Curved Text Simulation - simplified via positioning */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]">
              <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text fontSize="10" className="fill-white/80 font-mono uppercase tracking-[0.2em]">
                <textPath href="#curve" startOffset="0%">
                  • Open for work • Available to hire
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Hi, I&apos;m <br />
            <span className="text-sunset-gradient">Aayush Mathur</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-white/70 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3"
          >
            <span>I am a</span>
            <div className="relative w-[300px] sm:w-[400px] h-10 text-left overflow-hidden sm:overflow-visible">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-sunset-gradient whitespace-nowrap"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 sunset-gradient text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,123,0,0.5)]"
            >
              {/* Subtle hover white reflection */}
              <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white transition-colors duration-300">View My Work</span>
              <ArrowDown className="relative z-10 w-5 h-5 text-white transition-colors duration-300 group-hover:animate-bounce" />
            </a>

            <a
              href="/Aayush_Mathur_Resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-accent-orange transition-all duration-300"
            >
              <span>Download CV</span>
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Mobile Scroll Indicator (Hidden on Desktop) */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex lg:hidden flex-col items-center sm:items-start gap-2 z-20 group w-full mt-16 mb-16"
          >
            <span className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] group-hover:text-accent-orange transition-colors duration-300">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-accent-orange"
            >
              <ChevronDown className="w-8 h-8 opacity-80" />
            </motion.div>
          </motion.a>
        </div>

        {/* Right Side: Modern Styled Developer IDE / Terminal */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-center items-center w-full h-[500px]">
          
          {/* Decorative Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-orange/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-pink/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Code Window Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: -5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
            className="w-full rounded-2xl glass-panel border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-accent-orange/30 transition-all duration-500 z-10"
          >
            {/* macOS Style Title Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
              </div>
              <div className="text-xs font-mono text-white/40 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                aayush_dev.ts
              </div>
              <div className="w-12" /> {/* spacer to center title */}
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-left">
              <div className="flex gap-4">
                {/* Line Numbers */}
                <div className="text-white/20 select-none text-right pr-2 border-r border-white/5 flex flex-col">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                {/* Actual Code with Syntax Highlighting */}
                <div className="text-white/80 flex flex-col">
                  <div>
                    <span className="text-accent-pink font-semibold">const</span> <span className="text-accent-yellow">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">name:</span> <span className="text-accent-orange">&quot;Aayush Mathur&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">role:</span> <span className="text-accent-orange">&quot;Full Stack & QA&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">experience:</span> <span className="text-accent-yellow">&quot;3+ Years&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">mainStack:</span> [
                    <span className="text-accent-pink">&quot;Laravel&quot;</span>, 
                    <span className="text-accent-pink">&quot;React&quot;</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">speciality:</span> [
                    <span className="text-accent-orange">&quot;AI Automation&quot;</span>, 
                    <span className="text-accent-orange">&quot;Testing&quot;</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">codeQuality:</span> <span className="text-accent-yellow">&quot;100%&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-white/40">status:</span> <span className="text-green-400">&quot;active&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* simulated terminal output split line */}
              <div className="h-px bg-white/5 my-4" />

              {/* Terminal Section */}
              <div className="text-[11px] text-white/50 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-accent-orange font-bold">❯</span>
                  <span>npm run test:all</span>
                </div>
                <div className="text-green-400 pl-4 font-semibold">
                  ✔ 142/142 Tests Passed (100% coverage)
                </div>
                <div className="flex items-center gap-2 text-white/30">
                  <span>❯</span>
                  <span>status: ready <span className="w-1.5 h-3 bg-white/60 inline-block animate-pulse align-middle ml-1" /></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Metric Badges orbiting the Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute top-4 -left-6 z-20 px-4 py-2 rounded-2xl glass-panel border border-white/10 shadow-lg flex items-center gap-2 hover:border-accent-pink/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse" />
            <div className="text-left">
              <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-none mb-0.5">Projects</div>
              <div className="text-xs font-bold text-white leading-none">11+ Built</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute bottom-4 -right-6 z-20 px-4 py-2 rounded-2xl glass-panel border border-white/10 shadow-lg flex items-center gap-2 hover:border-accent-yellow/40 hover:translate-y-1 transition-all duration-300 cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <div className="text-left">
              <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-none mb-0.5">AI Agents</div>
              <div className="text-xs font-bold text-white leading-none">1K+ Queries</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Desktop Scroll Down Indicator (Hidden on Mobile) */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20 group"
      >
        <span className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] group-hover:text-accent-orange transition-colors duration-300">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-accent-orange"
        >
          <ChevronDown className="w-8 h-8 opacity-80" />
        </motion.div>
      </motion.a>
    </section>
  );
}
