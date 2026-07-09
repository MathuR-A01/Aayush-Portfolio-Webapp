import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin, Phone, Code } from 'lucide-react';
import './Footer.css';

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
];

const moreLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

const techStack = [
    'Laravel', 'React.js', 'PHP', 'MySQL', 'JavaScript',
    'Bootstrap', 'N8N', 'Supabase', 'Git', 'Postman',
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-accent">&lt;</span>
                            Aayush Mathur
                            <span className="logo-accent"> /&gt;</span>
                        </a>
                        <p className="footer-tagline">
                            Full Stack Developer & Software Tester — crafting high-performance web applications and ensuring quality through rigorous testing.
                        </p>

                        {/* Contact snippets */}
                        <div className="footer-contact-snippets">
                            <a href="mailto:mathur.aayush3780@gmail.com" className="footer-contact-item">
                                <Mail size={14} />
                                <span>mathur.aayush3780@gmail.com</span>
                            </a>
                            <a href="tel:+917505800914" className="footer-contact-item">
                                <Phone size={14} />
                                <span>+91 7505800914</span>
                            </a>
                            <div className="footer-contact-item">
                                <MapPin size={14} />
                                <span>Ghaziabad, UP, India</span>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="footer-social">
                            <a href="https://github.com/MathuR-A01" className="footer-social-link" title="GitHub" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                            <a href="https://in.linkedin.com/in/aayush-mathur-76153a1b8" className="footer-social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                            <a href="mailto:mathur.aayush3780@gmail.com" className="footer-social-link" title="Email" target="_blank" rel="noopener noreferrer"><Mail size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-nav">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map(link => (
                                <li key={link.name}><a href={link.href}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* More Links */}
                    <div className="footer-nav">
                        <h4>More</h4>
                        <ul>
                            {moreLinks.map(link => (
                                <li key={link.name}><a href={link.href}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="footer-tech">
                        <h4>Tech Stack</h4>
                        <div className="footer-tech-tags">
                            {techStack.map(tech => (
                                <span key={tech} className="footer-tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Aayush Mathur. Made with <Heart size={14} className="heart-icon" /> All rights reserved.
                    </p>
                    <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
