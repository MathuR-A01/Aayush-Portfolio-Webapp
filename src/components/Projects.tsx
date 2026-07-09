"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Globe, BookOpen, Users, Code, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

interface Project {
  title: string;
  category: string;
  icon: LucideIcon;
  url: string;
  github?: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'TMU AI Counsellor',
    category: 'AI Integration',
    icon: Zap,
    url: 'https://counsellor.tmu.ac.in/',
    description: 'An AI-powered counselling chatbot built using N8N automation, Supabase, Webhooks, GPT & Gemini models. Custom prompts handle university queries effectively.',
    tech: ['N8N', 'Supabase', 'GPT', 'Gemini'],
  },
  {
    title: 'TMU ONE Admin',
    category: 'Dashboards',
    icon: Shield,
    url: 'https://admin.app.tmu.ac.in/sign-in',
    description: 'A comprehensive administrative dashboard designed for TMU, handling user management, access control, and analytics.',
    tech: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Teerthanker Mahaveer University',
    category: 'Web Portals',
    icon: Globe,
    url: 'https://www.tmu.ac.in/',
    description: 'The official flagship website for Teerthanker Mahaveer University, serving thousands of visitors with dynamic content.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Teerthanker Mahaveer University Online webapp',
    category: 'Web Portals',
    icon: Globe,
    url: 'https://tmuonline.ac.in/',
    description: 'A dedicated digital learning and admission portal for the university\'s online degree programs (MBA, MCA, BCA, BBA), featuring streamlined course exploration and student enrollment workflows.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Teerthanker Mahaveer Hospital website',
    category: 'Web Portals',
    icon: Globe,
    url: 'https://www.tmuhospital.com/',
    description: 'The official web portal for the 1000+ bed NABH-accredited multispeciality teaching hospital, featuring doctor directories, patient care services, and emergency support details.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'ICETCD Dental Conference',
    category: 'Conferences',
    icon: BookOpen,
    url: 'https://icetcd.tmu.ac.in/',
    description: 'Official conference website for the International Conference on Emerging Trends in Contemporary Dentistry, managing abstract submissions and event scheduling.',
    tech: ['Bootstrap', 'CSS', 'JavaScript'],
  },
  {
    title: 'ICDTIS 2026',
    category: 'Conferences',
    icon: BookOpen,
    url: 'https://icdtis.tmu.ac.in/',
    description: 'Official web platform for the 1st International Conference on Data Technology and Intelligent Systems, handling paper registrations and academic tracks.',
    tech: ['Laravel', 'PHP', 'Bootstrap'],
  },
  {
    title: 'SMART (2024 - 2026)',
    category: 'Conferences',
    icon: BookOpen,
    url: 'https://smart2026.tmu.ac.in/',
    description: 'Official websites for the SMART International Conference spanning multiple years, managing paper submissions and schedules.',
    tech: ['Laravel', 'PHP', 'Bootstrap'],
  },
  {
    title: 'NCMD (2023 & 2025)',
    category: 'Conferences',
    icon: BookOpen,
    url: 'https://ncmd2025.tmu.ac.in/',
    description: 'Official conference platform for the National Conference on Multidisciplinary Dimensions.',
    tech: ['Laravel', 'PHP', 'Bootstrap'],
  },
  {
    title: 'Readify Profile Generator',
    category: 'Personal Projects',
    icon: Code,
    url: 'https://readify-generator.vercel.app/',
    github: 'https://github.com/MathuR-A01/Readify-profile-generator',
    description: 'A dynamic and intuitive GitHub Profile README generator. Enables developers to craft beautiful, customized developer profiles featuring custom badges, social links, live stats, and custom layouts.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Markdown'],
  },
  {
    title: 'QueueFlow',
    category: 'Personal Projects',
    icon: Code,
    url: 'https://queueflow-webapp.vercel.app/',
    github: 'https://github.com/MathuR-A01/QueueFlow',
    description: 'QueueFlow is a premium tracker for external commitments. Unlike standard to-do lists, it tracks vendor approvals, client payments, and legal reviews. Features real-time latency calculation, an AI-powered nudge draft composer, and a beautiful dark-mode Kanban workspace.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Markdown'],
  }
];

const categories = ['All', 'Web Portals', 'Dashboards', 'Conferences', 'AI Integration', 'Personal Projects'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="relative py-32 bg-[#0F172A]/80 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,77,77,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-accent-orange font-mono text-sm tracking-widest uppercase mb-4 block">// Showcase</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sunset-gradient">Selected Works</h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "sunset-gradient text-white shadow-[0_0_20px_rgba(255,123,0,0.4)]"
                  : "bg-[#111827] text-white/60 hover:text-white hover:bg-white/10 border border-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative glass-panel rounded-3xl p-8 flex flex-col hover:border-accent-orange/50 hover:shadow-[0_0_30px_rgba(255,123,0,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* Animated Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 to-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <project.icon className="w-6 h-6 text-accent-yellow" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-accent-orange transition-colors" title="View Source Code">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-accent-orange transition-colors" title={project.url === '#' ? 'Coming Soon' : 'View Live Site'}>
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-medium text-white mb-3 group-hover:text-sunset-gradient transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-[#0F172A] text-white/70 text-xs font-mono border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
