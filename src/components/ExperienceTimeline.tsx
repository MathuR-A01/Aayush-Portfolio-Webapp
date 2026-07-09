"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Teerthanker Mahaveer University (TMU)",
    period: "2023 - Present",
    description: "Designing, developing, and maintaining scalable full-stack web applications. Built AI-powered counselling system handling 1,000+ queries/month. Developed TMU ONE Admin Dashboard with RBAC. Performed manual and API testing for web and mobile applications."
  },
  {
    title: "Associate Software Engineer",
    company: "Knocial India Limited",
    period: "2022 - 2023",
    description: "Designed and developed responsive, user-friendly web interfaces ensuring cross-browser compatibility. Implemented dynamic UI components and client-side validations."
  },
  {
    title: "BCA Computer Applications",
    company: "Teerthanker Mahaveer University",
    period: "2019 - 2022",
    description: "Completed Bachelor's degree with a strong foundation in computer science, software development, data structures, algorithms, and web technologies."
  }
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate timeline height based on scroll
  const timelineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 bg-black" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-24">Experience</h2>

        <div className="relative flex">
          {/* Sticky Left Rail for Desktop */}
          <div className="hidden md:block w-32 shrink-0">
            <div className="sticky top-32">
              <span className="text-sm font-mono text-white/30 uppercase tracking-widest">Timeline</span>
            </div>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-[7px] md:left-[140px] top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div 
              className="w-full bg-white/30 origin-top"
              style={{ height: timelineHeight }}
            />
          </div>

          {/* Items */}
          <div className="flex flex-col gap-16 pl-12 md:pl-24 w-full pb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                {/* Node */}
                <div className="absolute -left-[54px] md:-left-[102px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-white transition-colors duration-300 z-10" />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-medium text-white">{exp.title}</h3>
                  <span className="text-sm font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-lg text-white/70 mb-4">{exp.company}</h4>
                <p className="text-white/50 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
