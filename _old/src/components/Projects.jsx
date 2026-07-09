import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Shield, Code, Monitor, BookOpen, Users, Zap, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'TMU AI Counsellor',
        description: 'An AI-powered counselling chatbot built using N8N automation, Supabase, Webhooks, GPT & Gemini models. Handles 1,000+ university-related queries per month with secure, controlled prompts and RAG-based responses.',
        role: 'Developer & AI Integration',
        url: 'https://counsellor.tmu.ac.in/',
        tech: ['N8N', 'Supabase', 'Webhooks', 'GPT', 'Gemini'],
        category: 'ai',
        icon: <Zap size={20} />,
        status: 'Live',
        color: '#00E5FF',
    },
    {
        title: 'TMU ONE Admin Dashboard',
        description: 'Comprehensive administrative dashboard for TMU ONE platform featuring role-based access control, analytics visualization, user management, and real-time data monitoring across university operations.',
        role: 'Developer & Software Tester',
        url: 'https://admin.app.tmu.ac.in/sign-in',
        tech: ['React.js', 'REST API', 'Postman', 'CSS', 'Bootstrap'],
        category: 'dashboard',
        icon: <Monitor size={20} />,
        status: 'Live',
        color: '#7C3AED',
    },
    {
        title: 'TMU GYM Admin Dashboard',
        description: 'Feature-rich gym management dashboard with member tracking, subscription management, equipment inventory, attendance monitoring, and comprehensive reporting capabilities.',
        role: 'Software Tester',
        url: 'https://admin.gym.tmu.ac.in/sign-in',
        tech: ['Manual Testing', 'API Testing', 'ReactJs'],
        category: 'dashboard',
        icon: <Shield size={20} />,
        status: 'Live',
        color: '#FF4D9D',
    },
    {
        title: 'TMU Official Website',
        description: 'The flagship website for Teerthanker Mahaveer University — a large-scale, content-rich platform serving thousands of daily visitors with program information, admissions, news, and campus resources.',
        role: 'Developer & Operations Management',
        url: 'https://www.tmu.ac.in/',
        tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'HTML5', 'Javascript'],
        category: 'website',
        icon: <Globe size={20} />,
        status: 'Live',
        color: '#22D3EE',
    },
    {
        title: 'TMU Online Website',
        description: 'Digital learning portal enabling students to access online degree programs, courses, study materials, and virtual classroom experiences with seamless enrollment workflows.',
        role: 'Developer & Operations Management',
        url: 'https://www.tmuonline.ac.in/',
        tech: ['Laravel', 'PHP', 'MYSQL', 'Bootstrap', 'HTML5', 'CSS3'],
        category: 'website',
        icon: <BookOpen size={20} />,
        status: 'Live',
        color: '#00E5FF',
    },
    {
        title: 'SMART 2024 Conference',
        description: 'International conference website for SMART 2024 featuring paper submission portals, speaker profiles, schedule management, registration system, and real-time event updates.',
        role: 'Developer & Operations Management',
        url: 'https://smart2024.tmu.ac.in/',
        tech: ['Laravel', 'PHP', 'Bootstrap', 'HTML5', 'Javascript'],
        category: 'conference',
        icon: <Users size={20} />,
        status: 'Live',
        color: '#FF4D9D',
    },
    {
        title: 'SMART 2025 Conference',
        description: 'Enhanced international conference platform with improved UX, abstract submission workflow, committee management, and comprehensive event scheduling for the annual SMART series.',
        role: 'Developer & Operations Management',
        url: 'https://smart2025.tmu.ac.in/',
        tech: ['Laravel', 'PHP', 'Bootstrap', 'HTML5', 'Javascript'],
        category: 'conference',
        icon: <Users size={20} />,
        status: 'Live',
        color: '#FF4D9D',
    },
    {
        title: 'SMART 2026 Conference',
        description: 'Latest iteration of the international SMART conference series with modernized design, streamlined paper submission, reviewer assignment system, and automated communication workflows.',
        role: 'Developer & Operations Management',
        url: 'https://smart2026.tmu.ac.in/',
        tech: ['Laravel', 'PHP', 'Bootstrap', 'HTML5', 'Javascript'],
        category: 'conference',
        icon: <Users size={20} />,
        status: 'Live',
        color: '#7C3AED',
    },
    {
        title: 'NCMD 2026 Conference',
        description: 'National conference platform for NCMD 2026 featuring research paper management, delegate registration, session scheduling, and digital certificate generation.',
        role: 'Developer & Operations Management',
        url: 'https://ncmd2026.tmu.ac.in/',
        tech: ['Laravel', 'PHP', 'Bootstrap', 'HTML5', 'Javascript'],
        category: 'conference',
        icon: <Code size={20} />,
        status: 'Live',
        color: '#00E5FF',
    },
    {
        title: 'NCMD 2025 Conference',
        description: 'National conference website delivering seamless event management, abstract submission, peer review coordination, and participant communication for NCMD 2025.',
        role: 'Developer & Operations Management',
        url: 'https://ncmd2025.tmu.ac.in/',
        tech: ['Laravel', 'PHP', 'Bootstrap', 'HTML5', 'Javascript'],
        category: 'conference',
        icon: <Code size={20} />,
        status: 'Live',
        color: '#FF4D9D',
    },
    {
        title: 'RTIMPT 2025 Conference',
        description: 'Specialized national conference platform for RTIMPT 2025 with custom submission workflows, reviewer dashboards, program scheduling, and automated notification systems.',
        role: 'Developer & Operations Management',
        url: 'https://rtimpt2025.tmu.ac.in/',
        tech: ['Laravel', 'PHP', 'Bootstrap', 'HTML5', 'Javascript'],
        category: 'conference',
        icon: <Code size={20} />,
        status: 'Live',
        color: '#22D3EE',
    },
];

const categories = [
    { key: 'all', label: 'All Datasets' },
    { key: 'website', label: 'Web Portals' },
    { key: 'dashboard', label: 'Dashboards' },
    { key: 'conference', label: 'Conferences' },
    { key: 'ai', label: 'AI Models' },
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section className="projects section" id="projects">
            {/* Ambient Background */}
            <div className="blueprint-bg-grid"></div>

            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-subtitle">// Architectural Logs</span>
                    <h2 className="section-title">Research & Projects</h2>
                    <p className="section-description">
                        An archive of successfully deployed systems, analyzing UI/UX integrity,
                        AI automation workflows, and high-load university architectures.
                    </p>
                </motion.div>

                {/* Analytical Stats Bar */}
                <motion.div
                    className="analytical-stats"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <div className="stat-module">
                        <span className="stat-label">TOTAL SYSTEMS</span>
                        <span className="stat-value">{projects.length}</span>
                    </div>
                    <div className="stat-module">
                        <span className="stat-label">ACTIVE NODES</span>
                        <span className="stat-value">{projects.filter(p => p.status === 'Live').length}</span>
                    </div>
                    <div className="stat-module">
                        <span className="stat-label">USER VOLUME</span>
                        <span className="stat-value">10K+</span>
                    </div>
                </motion.div>

                {/* Cyber Filter Tabs */}
                <motion.div
                    className="cyber-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 }}
                >
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            className={`cyber-filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat.key)}
                        >
                            <span className="btn-hex-code">0x{Math.floor(Math.random() * 90 + 10).toString(16).toUpperCase()}</span>
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Blueprint Projects Grid */}
                <motion.div className="blueprint-grid" layout>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="blueprint-card"
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                layout
                            >
                                <div className="card-brackets">
                                    <div className="bracket tl"></div>
                                    <div className="bracket tr"></div>
                                    <div className="bracket bl"></div>
                                    <div className="bracket br"></div>
                                </div>
                                
                                <div className="scanner-line"></div>
                                
                                <div className="blueprint-inner">
                                    <div className="blueprint-header">
                                        <div className="blueprint-icon-ring" style={{ '--ring-color': project.color }}>
                                            {project.icon}
                                        </div>
                                        <div className="blueprint-status">
                                            <span className={`status-indicator ${project.status === 'Live' ? 'live' : ''}`}></span>
                                            {project.status === 'Live' ? 'SYS.ONLINE' : 'SYS.ARCHIVED'}
                                        </div>
                                    </div>
                                    
                                    <div className="blueprint-content">
                                        <span className="project-role-mono">ROLE // {project.role.toUpperCase()}</span>
                                        <h3 className="blueprint-title">{project.title}</h3>
                                        <p className="blueprint-desc">{project.description}</p>
                                    </div>

                                    <div className="blueprint-tech">
                                        {project.tech.map(t => (
                                            <span key={t} className="tech-node" style={{ '--node-color': project.color }}>
                                                {t.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <a 
                                        href={project.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="blueprint-link" 
                                        style={{ '--link-color': project.color }}
                                    >
                                        <span>INITIALIZE LINK</span>
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
