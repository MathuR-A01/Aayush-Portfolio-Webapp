import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Calendar, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="about section" id="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">// Get to know me</span>
                    <h2 className="section-title">About Me</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="about-image-container">
                            <div className="about-image-frame">
                                <div className="about-avatar">
                                    <User size={80} />
                                </div>
                            </div>
                            <div className="about-image-decoration"></div>
                            <div className="about-image-dots"></div>
                        </div>

                        <div className="about-info-cards">
                            <div className="info-card">
                                <MapPin size={18} />
                                <span>Ghaziabad, UP, India</span>
                            </div>
                            <div className="info-card">
                                <Calendar size={18} />
                                <span>3+ Years Exp.</span>
                            </div>
                            <div className="info-card">
                                <Briefcase size={18} />
                                <span>Full Stack Dev & Tester</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <h3 className="about-heading">
                            Full Stack Web Developer & Software Tester building{' '}
                            <span className="text-gradient">scalable, secure digital solutions</span>
                        </h3>

                        <p className="about-text">
                            I'm Aayush Mathur, a Full Stack Developer and Software Tester with 3+ years of
                            experience across the complete software development lifecycle. I specialize in
                            designing, developing, testing, and maintaining scalable web applications that
                            solve real-world problems.
                        </p>

                        <p className="about-text">
                            My core expertise lies in <strong>Laravel, React.js, PHP, MySQL, JavaScript, HTML, and CSS</strong>.
                            I also have strong hands-on experience in manual testing, API testing, and defect
                            tracking to ensure top-notch application quality. I've worked in Agile environments
                            with a focus on deployment, production support, and delivering user-focused solutions.
                        </p>

                        <p className="about-text">
                            Currently at <strong>Teerthanker Mahaveer University</strong>, I've built and managed
                            everything from AI-powered counselling systems handling 1,000+ queries/month to
                            large-scale academic platforms, conference websites, and admin dashboards used across
                            the university ecosystem.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎯</div>
                                <div>
                                    <strong>Full Stack Development</strong>
                                    <span>Laravel, React.js, Next.js, PHP, MySQL</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">🧪</div>
                                <div>
                                    <strong>Software Testing</strong>
                                    <span>Manual, API, UI & Functional Testing</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">🤖</div>
                                <div>
                                    <strong>AI Integration</strong>
                                    <span>N8N, RAG-based AI, LLM Agents</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">⚙️</div>
                                <div>
                                    <strong>DevOps & Operations</strong>
                                    <span>Deployment, GitHub, SEO, Server Management</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
