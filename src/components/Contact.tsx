"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "mathur.aayush3780@gmail.com",
    href: "mailto:mathur.aayush3780@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7505800914",
    href: "tel:+917505800914"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ghaziabad, Uttar Pradesh, India",
    href: "https://maps.google.com/?q=Ghaziabad"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'bb5b2009-6fe3-4a10-aafd-578c3bafb661',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormState('idle'), 4000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 4000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#0F172A]/80 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,123,0,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-accent-red font-mono text-sm tracking-widest uppercase mb-4 block">// Let&apos;s Connect</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sunset-gradient mb-4">Let&apos;s Work Together</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-heading font-medium text-white mb-6">Let&apos;s talk about your next project</h3>
              <p className="text-white/60 mb-12 leading-relaxed max-w-md">
                Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-8">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 flex-shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-orange/50 group-hover:bg-accent-orange/10 transition-colors">
                      <info.icon className="w-6 h-6 text-white/50 group-hover:text-accent-orange transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-1">{info.title}</h4>
                      <p className="text-white group-hover:text-accent-orange transition-colors font-medium text-lg break-all sm:break-normal">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">Follow me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/MathuR-A01" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,123,0,0.3)] hover:-translate-y-1">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/aayush-mathur-fs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,123,0,0.3)] hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-[2rem] flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#050816] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#050816] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    placeholder="Project Proposal"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#050816] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#050816] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all resize-none"
                  />
                </div>

                 <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="mt-4 w-full relative overflow-hidden rounded-xl sunset-gradient text-white font-semibold py-4 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(255,123,0,0.5)] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none shadow-lg cursor-pointer group"
                >
                  {/* Subtle hover white reflection */}
                  <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 transition-colors duration-300 font-semibold tracking-wide text-white">
                    {formState === 'idle' && 'Send Message'}
                    {formState === 'submitting' && 'Sending...'}
                    {formState === 'success' && '✓ Message Sent!'}
                    {formState === 'error' && '✕ Failed. Try again'}
                  </span>
                  
                  {formState === 'idle' && (
                    <Send className="relative z-10 w-4.5 h-4.5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
