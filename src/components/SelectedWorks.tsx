"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const topProjects = [
  {
    title: 'TMU AI Counsellor',
    description: 'An AI-powered counselling chatbot built using N8N automation, Supabase, Webhooks, GPT & Gemini models. Handles 1,000+ university-related queries per month with secure, controlled prompts.',
    url: 'https://counsellor.tmu.ac.in/',
    tech: ['N8N', 'Supabase', 'GPT', 'Gemini'],
    gradient: 'from-[#000000] to-[#1A1A1D]',
    borderGlow: 'group-hover:border-[#FF4D4D]/30',
  },
  {
    title: 'TMU ONE Admin',
    description: 'Comprehensive administrative dashboard featuring role-based access control, analytics visualization, user management, and real-time data monitoring across university operations.',
    url: 'https://admin.app.tmu.ac.in/sign-in',
    tech: ['React.js', 'REST API', 'Tailwind CSS'],
    gradient: 'from-[#09090B] to-[#18181B]',
    borderGlow: 'group-hover:border-[#FFB800]/30',
  },
  {
    title: 'TMU Official Portal',
    description: 'The flagship website for Teerthanker Mahaveer University serving thousands of daily visitors with program information, admissions, news, and campus resources.',
    url: 'https://www.tmu.ac.in/',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    gradient: 'from-[#050505] to-[#111111]',
    borderGlow: 'group-hover:border-white/20',
  },
  {
    title: 'SMART Conference Series',
    description: 'International conference platform featuring paper submission portals, reviewer dashboards, committee management, and automated communication workflows.',
    url: 'https://smart2026.tmu.ac.in/',
    tech: ['Laravel', 'PHP', 'Bootstrap'],
    gradient: 'from-[#0A0A0A] to-[#141414]',
    borderGlow: 'group-hover:border-[#FF4FD8]/30',
  },
];

export default function SelectedWorks() {
  return (
    <section id="works" className="relative py-32 bg-black dot-matrix-subtle">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-4">Selected Works</h2>
            <p className="text-white/50 max-w-md">Highlighting deployed production systems and architectural achievements.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
            View full archive <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {topProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative block w-full overflow-hidden rounded-[2rem] glass-card transition-all duration-700",
                project.borderGlow
              )}
            >
              {/* Massive Cinematic Background gradient serving as the "image" */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out", project.gradient)} />
              
              <div className="relative z-10 p-8 md:p-16 min-h-[400px] flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-5xl font-heading font-medium text-white mb-4 transition-transform duration-500 group-hover:translate-x-2">
                  {project.title}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <p className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed transition-transform duration-500 group-hover:translate-x-2">
                    {project.description}
                  </p>
                  
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
