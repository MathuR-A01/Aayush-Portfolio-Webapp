"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend & UI",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript / TS", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML & CSS", level: 95 },
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "PHP", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 90 },
    ]
  },
  {
    category: "Testing & QA",
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "API Testing", level: 90 },
      { name: "UI/UX Validation", level: 85 },
      { name: "Defect Tracking", level: 90 },
    ]
  },
  {
    category: "DevOps & AI",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Deployment", level: 80 },
      { name: "N8N Automation", level: 75 },
      { name: "RAG & LLM Agents", level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#050816]/80 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,79,216,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-accent-pink font-mono text-sm tracking-widest uppercase mb-4 block">// Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sunset-gradient">Technical Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-panel p-8 md:p-10 rounded-[2rem] hover:border-accent-pink/50 transition-colors duration-500 group relative overflow-hidden"
            >
              {/* Subtle animated gradient background inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="relative z-10 text-2xl font-heading font-medium text-white mb-8 border-b border-white/10 pb-4">
                {category.category}
              </h3>

              <div className="relative z-10 flex flex-col gap-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-accent-orange font-mono text-sm">{skill.level}%</span>
                    </div>
                    {/* Progress bar container */}
                    <div className="h-2 w-full bg-[#050816] rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full sunset-gradient rounded-full relative"
                      >
                        {/* Glow effect on the bar tip */}
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
