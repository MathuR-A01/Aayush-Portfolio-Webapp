import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const contactInfo = [
    {
        icon: <Mail size={20} />,
        label: 'Email',
        value: 'mathur.aayush3780@gmail.com',
        href: 'mailto:mathur.aayush3780@gmail.com',
    },
    {
        icon: <Phone size={20} />,
        label: 'Phone',
        value: '+91 7505800914',
        href: 'tel:+917505800914',
    },
    {
        icon: <MapPin size={20} />,
        label: 'Location',
        value: 'Ghaziabad, Uttar Pradesh, India',
        href: null,
    },
];

const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/MathuR-A01', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/aayush-mathur-76153a1b8', label: 'LinkedIn' },
];

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

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
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">// Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-description">
                        Have a project in mind? Let's work together to bring your ideas to life
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="contact-info-title">Let's talk about everything!</h3>
                        <p className="contact-info-text">
                            Don&apos;t like forms? Send me an email directly or reach out on social media.
                            I typically respond within 24 hours.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map(item => (
                                <div key={item.label} className="contact-detail-item">
                                    <div className="contact-detail-icon">{item.icon}</div>
                                    <div>
                                        <span className="contact-detail-label">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="contact-detail-value">{item.value}</a>
                                        ) : (
                                            <span className="contact-detail-value">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact-social">
                            <h4>Follow me</h4>
                            <div className="social-links">
                                {socialLinks.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="btn-icon"
                                        title={link.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="contact-form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project Discussion"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary form-submit ${status !== 'idle' ? status : ''}`}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' && <>Sending...</>}
                            {status === 'success' && <>✓ Message Sent!</>}
                            {status === 'error' && <>✕ Failed. Try again</>}
                            {status === 'idle' && (
                                <>
                                    Send Message
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
