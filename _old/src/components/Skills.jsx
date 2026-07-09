import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './Skills.css';

const skillCategories = [
    {
        id: 'frontend',
        title: 'Frontend Ecosystem',
        tag: 'SYS.UI',
        description: 'Analyzing visual rendering paradigms, responsive architectures, and client-side computational logic.',
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'JavaScript', level: 88 },
            { name: 'HTML / CSS', level: 95 },
            { name: 'Tailwind CSS', level: 88 },
            { name: 'Bootstrap', level: 90 },
            { name: 'Responsive UI', level: 95 },
        ]
    },
    {
        id: 'backend',
        title: 'Backend & Database',
        tag: 'SYS.DB',
        description: 'Evaluating server-side algorithms, relational data structures, and secure API bridge networks.',
        skills: [
            { name: 'Laravel', level: 90 },
            { name: 'PHP', level: 88 },
            { name: 'MySQL', level: 85 },
            { name: 'PostgreSQL', level: 75 },
            { name: 'REST APIs', level: 85 },
        ]
    },
    {
        id: 'testing',
        title: 'Testing & QA',
        tag: 'SYS.TEST',
        description: 'Synthesizing quality assurance protocols and automated software testing lifecycle paradigms.',
        skills: [
            { name: 'Manual Testing', level: 90 },
            { name: 'API Testing', level: 85 },
            { name: 'SDLC', level: 88 },
            { name: 'Git / GitHub', level: 85 },
        ]
    },
    {
        id: 'operations',
        title: 'Operations & AI Tools',
        tag: 'SYS.OPS',
        description: 'Orchestrating workflow management, team leadership, AI integrations, and optimization strategies.',
        skills: [
            { name: 'Communication', level: 95 },
            { name: 'Team Lead', level: 90 },
            { name: 'Project Management', level: 85 },
            { name: 'Coordination', level: 90 },
            { name: 'On-page SEO', level: 82 },
            { name: 'N8N Automation', level: 80 },
        ]
    }
];

const techIcons = [
    'Laravel', 'React.js', 'JavaScript', 'PHP', 'MySQL', 'HTML5',
    'CSS3', 'Bootstrap', 'Git', 'Postman', 'N8N', 'REST APIs',
    'Supabase', 'PostgreSQL', 'Webhooks', 'GPT', 'Gemini',
    'ASP.NET', 'Flutter', 'Agile', 'SDLC', 'SEO', 'Automation Tools',
    'Manual Testing', 'Operations Management'
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [activeTab, setActiveTab] = useState(0);

    // Typing effect for description
    const [displayedDesc, setDisplayedDesc] = useState('');

    useEffect(() => {
        const fullText = skillCategories[activeTab].description;
        setDisplayedDesc('');
        let i = 0;

        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayedDesc(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 25);

        return () => clearInterval(typingInterval);
    }, [activeTab]);

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">// Systems Analysis</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-description">
                        Deep dive into the operational tech stack, analyzing core competencies and frameworks.
                    </p>
                </motion.div>

                {/* Data Stream Marquee */}
                <motion.div
                    className="data-stream-marquee"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <div className="marquee-track">
                        {[...techIcons, ...techIcons].map((tech, i) => (
                            <div key={i} className="stream-node">
                                <span className="node-hex">0x{Math.floor(Math.random() * 90 + 10).toString(16).toUpperCase()}</span>
                                <span className="node-label">{tech}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Research Matrix Terminal */}
                <div className="research-matrix">

                    {/* Left Panel: Navigation Clusters */}
                    <motion.div
                        className="matrix-clusters"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {skillCategories.map((category, index) => (
                            <div
                                key={category.id}
                                className={`cluster-tab ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="cluster-indicator"></div>
                                <div className="cluster-info">
                                    <span className="cluster-tag">{category.tag}</span>
                                    <h3 className="cluster-title">{category.title}</h3>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right Panel: Data Analysis */}
                    <motion.div
                        className="matrix-analysis glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="analysis-content"
                            >
                                <div className="analysis-header">
                                    <div className="header-glitch-bar"></div>
                                    <h3 className="active-cluster-title">{skillCategories[activeTab].title}</h3>
                                    <p className="terminal-desc">
                                        <span className="prompt-arrow">&gt; </span>
                                        {displayedDesc}
                                        <span className="cursor-blink">_</span>
                                    </p>
                                </div>

                                <div className="data-modules-grid">
                                    {skillCategories[activeTab].skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            className="data-module"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="module-top">
                                                <span className="module-name">{skill.name}</span>
                                                <span className="module-value">
                                                    [<span className="value-number">{skill.level}</span>%]
                                                </span>
                                            </div>
                                            <div className="module-visualizer">
                                                <motion.div
                                                    className="segmented-bar"
                                                    initial={{ '--fill-width': '0%' }}
                                                    animate={{ '--fill-width': `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
