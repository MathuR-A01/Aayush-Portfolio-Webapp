"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = "mathur.aayush3780@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative bg-black pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-matrix opacity-50 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-heading font-medium text-white mb-6 tracking-tight">
            Let&apos;s build <br className="hidden md:block" />
            <span className="text-white/40">something great.</span>
          </h2>
          
          <button 
            onClick={handleCopy}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 active:scale-95"
          >
            <span className="text-lg md:text-xl font-medium text-white">{email}</span>
            {copied ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            )}
          </button>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Aayush Mathur. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/MathuR-A01" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/aayush-mathur-fs" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors">
              LinkedIn
            </a>
            <a href="tel:+917505800914" className="text-white/40 hover:text-white text-sm transition-colors">
              Call Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
