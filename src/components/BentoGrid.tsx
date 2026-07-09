"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Server, Globe } from "lucide-react";

const techStack = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Laravel", "PHP", "MySQL", "PostgreSQL", "N8N", "Playwright", "Git"
];

export default function BentoGrid() {
  return (
    <section id="bento" className="relative py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          
          {/* About Me Card (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 cinematic-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-2xl font-heading font-medium text-white">About Me</h3>
              <p className="text-white/60 font-sans leading-relaxed text-sm md:text-base max-w-lg">
                I specialize in designing, developing, testing, and maintaining scalable web applications. 
                With over 3 years of full-stack experience, I bridge the gap between robust backend 
                architecture and seamless frontend interactions.
              </p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center text-center group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">Ghaziabad, UP</h3>
            <p className="text-sm text-white/50 font-mono">India</p>
          </motion.div>

          {/* Tech Stack Marquee (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center"
          >
            <h3 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-widest absolute top-8 left-8">Core Stack</h3>
            
            <div className="w-full overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <div className="flex gap-4 w-max animate-[marquee_20s_linear_infinite]">
                {[...techStack, ...techStack].map((tech, i) => (
                  <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 whitespace-nowrap text-sm">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 w-max animate-[marquee_25s_linear_infinite_reverse] mt-4 ml-12">
                {[...techStack.reverse(), ...techStack].map((tech, i) => (
                  <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 whitespace-nowrap text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Metrics Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 row-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Status</span>
            </div>
            
            <div>
              <div className="text-5xl font-heading font-medium text-white mb-2">11+</div>
              <div className="text-sm text-white/50">Live production projects deployed and maintained.</div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Add marquee animation via inline style for simplicity, or it can be in tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
