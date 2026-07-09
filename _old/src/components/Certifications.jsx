import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, Building2 } from 'lucide-react';
import './Certifications.css';

const certifications = [
    {
        name: 'React JS Certification',
        issuer: 'HackerRank',
        date: '2026-01-29',
        color: '#00E5FF',
        icon: '⚛️',
        description: 'Validated proficiency in React.js including component architecture, hooks, state management, and building modern single-page applications.',
    },
    {
        name: 'Software Testing',
        issuer: 'Simplilearn',
        date: '2026-01-31',
        color: '#22D3EE',
        icon: '🧪',
        description: 'Covered software testing methodologies, test case design, manual testing techniques, and quality assurance best practices for applications.',
    },
    {
        name: 'AI Tools Workshop',
        issuer: 'Be10X',
        date: '2025-12-21',
        color: '#7C3AED',
        icon: '🤖',
        description: 'Hands-on workshop on leveraging AI tools for productivity, workflow automation, and integrating artificial intelligence into projects.',
    },
    {
        name: 'Multi Agent AI Tools Workshop',
        issuer: 'Coding Ninjas',
        date: '2025-12-10',
        color: '#FF4D9D',
        icon: '⚡',
        description: 'Explored multi-agent AI systems, advanced prompt engineering techniques, and building intelligent solutions with modern AI frameworks.',
    },
    {
        name: 'CSS Certification',
        issuer: 'HackerRank',
        date: '2022-07-12',
        color: '#FF4D9D',
        icon: '🎨',
        description: 'Validated expertise in CSS including responsive design, Flexbox, Grid layouts, animations, and modern styling techniques.',
    },
    {
        name: 'Industrial Training in Web Development',
        issuer: 'Internshala',
        date: '2021-08-22',
        color: '#00E5FF',
        icon: '💻',
        description: 'Comprehensive web development training covering frontend and backend technologies, project workflows, and industry-standard practices.',
    },
];

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="certifications section" id="certifications">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">// Verified Credentials</span>
                    <h2 className="section-title">Certifications & Licenses</h2>
                    <p className="section-description">
                        Professional certifications that validate my expertise across development,
                        testing, and emerging technologies
                    </p>
                </motion.div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name + index}
                            className="cert-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                            style={{ '--cert-color': cert.color }}
                        >
                            <div className="cert-card-glow"></div>
                            <div className="cert-card-inner">
                                {/* Ribbon */}
                                <div className="cert-ribbon" style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}aa)` }}>
                                    <Award size={14} />
                                    <span>Certified</span>
                                </div>

                                {/* Icon */}
                                <div className="cert-icon-wrapper">
                                    <span className="cert-icon">{cert.icon}</span>
                                </div>

                                {/* Content */}
                                <h3 className="cert-name">{cert.name}</h3>
                                <p className="cert-description">{cert.description}</p>

                                {/* Meta */}
                                <div className="cert-meta">
                                    {cert.issuer && (
                                        <div className="cert-meta-item">
                                            <Building2 size={14} />
                                            <span>{cert.issuer}</span>
                                        </div>
                                    )}
                                    {cert.date && (
                                        <div className="cert-meta-item">
                                            <Calendar size={14} />
                                            <span>{cert.date}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
