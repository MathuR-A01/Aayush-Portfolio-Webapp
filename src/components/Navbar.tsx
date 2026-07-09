"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => setActive("Home")} className="text-2xl font-heading font-bold text-white tracking-wide group">
            Aayush<span className="text-accent-orange group-hover:text-accent-pink transition-colors">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-300",
                    active === link.name ? "text-accent-orange font-bold" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                </span>
                {active === link.name && (
                  <motion.div
                    layoutId="nav-indicator-desktop"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-orange rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050816]/90 flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white hover:rotate-90 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={36} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  onClick={() => {
                    setActive(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-3xl font-heading font-medium tracking-wide transition-colors duration-300",
                    active === link.name ? "text-transparent bg-clip-text sunset-gradient" : "text-white/60 hover:text-white"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
