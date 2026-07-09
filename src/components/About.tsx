"use client";

import { motion } from "framer-motion";
import { Code2, Bug, BrainCircuit, Rocket, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#0F172A]/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-orange/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-pink/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent-orange font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
            // Discover
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Photo (Spans 4 columns, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden glass-panel border border-white/5 h-[400px] md:h-auto group shadow-2xl"
          >
            <img 
              src="/profile-real.jpg" 
              alt="Aayush Mathur"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              onError={(e) => { e.currentTarget.src = "https://github.com/MathuR-A01.png"; }}
            />
            {/* Elegant gradient fade at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/20 to-transparent transition-opacity duration-500" />
            
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-white/90 text-xs font-mono uppercase tracking-widest">Available for hire</span>
              </div>
              <h3 className="text-3xl font-heading font-bold text-white tracking-tight mb-1">Aayush Mathur</h3>
              <p className="text-white/50 text-sm">Full Stack Developer & Tester</p>
            </div>
          </motion.div>

          {/* Card 2: Main Bio (Spans 8 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 rounded-3xl p-8 md:p-12 glass-panel border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-orange/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent-orange/20 transition-colors duration-700" />
            
            <h3 className="text-2xl md:text-4xl font-heading font-semibold text-white leading-tight mb-8">
              I architect robust backend systems and craft intuitive, highly-tested frontend experiences.
            </h3>
            
            <div className="flex flex-col gap-5 text-white/60 text-base md:text-lg leading-relaxed font-light">
              <p>
                With over 3 years of deep technical experience, I specialize in bridging the gap between complex logic and beautiful design. My expertise spans <strong className="text-white font-medium">Laravel and React.js</strong>, to advanced AI workflow automation using N8N and Supabase.
              </p>
              <p>
                I don&apos;t just write code—I build scalable, secure, and rigorously tested products that drive real business value. From leading UI overhauls to single-handedly managing university-scale portals and intelligent AI counsellors, quality is always my ultimate metric.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Experience Stat (Spans 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 rounded-3xl p-8 glass-panel border border-white/5 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors duration-500"
          >
            <Briefcase className="w-8 h-8 text-accent-pink mb-4 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
            <h4 className="text-5xl font-black text-sunset-gradient mb-2 drop-shadow-sm">3+</h4>
            <p className="text-white/50 text-sm uppercase tracking-widest font-mono">Years Experience</p>
          </motion.div>

          {/* Card 4: Location (Spans 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 rounded-3xl p-8 glass-panel border border-white/5 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors duration-500"
          >
            <MapPin className="w-8 h-8 text-accent-yellow mb-4 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
            <h4 className="text-4xl font-bold text-white mb-2 tracking-tight">Ghaziabad</h4>
            <p className="text-white/50 text-sm uppercase tracking-widest font-mono">Uttar Pradesh, India</p>
          </motion.div>

          {/* Card 5: Education (Spans 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-4 rounded-3xl p-8 glass-panel border border-white/5 flex flex-col justify-center items-center text-center group hover:bg-white/[0.02] transition-colors duration-500"
          >
            <GraduationCap className="w-8 h-8 text-accent-pink mb-4 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
            <h4 className="text-4xl font-bold text-white mb-2 tracking-tight">BCA</h4>
            <p className="text-white/50 text-sm uppercase tracking-widest font-mono">Teerthanker Mahaveer University</p>
          </motion.div>

        </div>
        
        {/* Horizontal Mini-Bento Highlight Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: Code2, title: "Full Stack", desc: "Laravel & React", color: "group-hover:text-accent-orange" },
            { icon: Bug, title: "QA Testing", desc: "Manual & Automated", color: "group-hover:text-accent-pink" },
            { icon: BrainCircuit, title: "AI Integration", desc: "N8N & Supabase", color: "group-hover:text-accent-yellow" },
            { icon: Rocket, title: "DevOps", desc: "Deployment & SEO", color: "group-hover:text-accent-orange" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
              className="flex items-center gap-4 p-4 md:p-5 rounded-2xl glass-panel border border-white/5 group hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#050816]/50 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className={`w-5 h-5 text-white/40 transition-colors duration-300 ${item.color}`} />
              </div>
              <div>
                <strong className="block text-white text-sm md:text-base font-semibold tracking-wide">{item.title}</strong>
                <span className="block text-white/50 text-xs md:text-sm font-light">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
