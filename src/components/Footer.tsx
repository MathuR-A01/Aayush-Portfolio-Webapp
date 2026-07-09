"use client";

import { Heart, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050816] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-accent-orange/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Aayush Mathur<span className="text-accent-orange">.</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm mb-8">
              Full Stack Web Developer & Software Tester specializing in building scalable, secure, and performant digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/60 hover:text-accent-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-medium mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:mathur.aayush3780@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-accent-orange transition-colors duration-300 group">
                <Mail className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span>mathur.aayush3780@gmail.com</span>
              </a>
              <a href="tel:+917505800914" className="flex items-center gap-3 text-white/60 hover:text-accent-orange transition-colors duration-300 group">
                <Phone className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span>+91 7505800914</span>
              </a>
              <a href="https://maps.google.com/?q=Ghaziabad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-accent-orange transition-colors duration-300 group">
                <MapPin className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span>Ghaziabad, India</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-white/50 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Crafted with <Heart size={14} className="text-accent-red fill-accent-red" /> by Aayush Mathur
          </p>

          <div className="flex items-center gap-4">
            <a href="https://github.com/MathuR-A01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a href="https://linkedin.com/in/aayush-mathur-fs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110">
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-orange hover:bg-accent-orange/10 hover:border-accent-orange/50 transition-all hover:-translate-y-2"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
