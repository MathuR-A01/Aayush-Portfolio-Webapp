"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Teerthanker Mahaveer University (TMU)",
    period: "Feb, 2023 - Present",
    type: "Work",
    description: "Designing, developing, and maintaining scalable full-stack web applications. Built AI-powered counselling system handling 1,000+ queries/month. Developed TMU ONE Admin Dashboard with RBAC. Performed manual and API testing for web and mobile applications.",
    tags: ["React.js", "Next.js", "Laravel", "PHP", "MySQL", "REST APIs", "N8N Automation", "RAG & LLMs", "API Testing", "Tailwind CSS"]
  },
  {
    title: "Associate Software Engineer",
    company: "Knocial India Limited",
    period: "April, 2022 - Jan, 2023",
    type: "Work",
    description: "Designed and developed responsive, user-friendly web interfaces ensuring cross-browser compatibility. Implemented dynamic UI components and client-side validations.",
    tags: ["JavaScript / TS", "HTML & CSS", "Bootstrap", "UI/UX Validation", "Git / GitHub"]
  },
  {
    title: "BCA Computer Applications",
    company: "Teerthanker Mahaveer University",
    period: "2019 - 2022",
    type: "Education",
    description: "Completed Bachelor's degree with a strong foundation in computer science, software development, data structures, algorithms, and web technologies.",
    tags: ["Degree", "Computer Science"]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 bg-[#050816]/80 overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-yellow/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-4 block">// Journey</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sunset-gradient">My Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[20px] md:left-[50px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-accent-orange origin-top"
              style={{ height: timelineHeight }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 md:pl-28 group"
              >
                {/* Glowing Node */}
                <div className="absolute left-[13px] md:left-[43px] top-1.5 w-4 h-4 rounded-full bg-[#050816] border-2 border-white/30 group-hover:border-accent-orange group-hover:shadow-[0_0_15px_rgba(255,123,0,0.8)] transition-all duration-300 z-10" />

                <div className="glass-panel p-6 md:p-8 rounded-3xl hover:border-accent-orange/30 hover:bg-[#111827] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-sunset-gradient transition-colors">
                        {exp.title}
                      </h3>
                      <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-accent-orange font-mono text-sm border border-white/5">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-white/80 mb-4 font-medium">{exp.company}</h4>
                    
                    <p className="text-white/60 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-[#050816] text-white/50 text-xs font-mono border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
