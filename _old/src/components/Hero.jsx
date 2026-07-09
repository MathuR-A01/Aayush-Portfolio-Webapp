import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Terminal, Code2, Play, CheckCircle2, Cpu, Database, Settings } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('react');
    const [isRunningTests, setIsRunningTests] = useState(false);
    const [testLogs, setTestLogs] = useState([]);
    const heroRef = useRef(null);

    // Mouse coordinates spotlight tracking
    const handleMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        heroRef.current.style.setProperty('--mouse-x', `${x}px`);
        heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    // Simulated test runner logs
    const mockTestSteps = [
        { text: '> playwright test api.test.ts', type: 'system', delay: 100 },
        { text: '⠋ Booting headless Chromium cluster...', type: 'system', delay: 400 },
        { text: '✓ [API] POST /api/auth/login -> 200 OK (28ms)', type: 'success', delay: 800 },
        { text: '✓ [DB] Active connection pool verified (11ms)', type: 'success', delay: 1200 },
        { text: '✓ [Security] Auth Bearer JWT token validated', type: 'success', delay: 1600 },
        { text: '✓ [E2E] Form submission & email trigger -> PASSED', type: 'success', delay: 2000 },
        { text: '✨ SUCCESS: 4 spec files passed in 1.78s', type: 'accent', delay: 2400 }
    ];

    const runSimulatedTests = () => {
        if (isRunningTests) return;
        setIsRunningTests(true);
        setTestLogs([]);

        mockTestSteps.forEach((step) => {
            setTimeout(() => {
                setTestLogs((prev) => [...prev, step]);
                if (step.type === 'accent') {
                    setIsRunningTests(false);
                }
            }, step.delay);
        });
    };

    // Auto-run tests once when user opens QA tab for optimal engagement
    useEffect(() => {
        if (activeTab === 'qa' && testLogs.length === 0 && !isRunningTests) {
            runSimulatedTests();
        }
    }, [activeTab]);

    const getThemeClass = () => {
        if (activeTab === 'react') return 'glow-theme-react';
        if (activeTab === 'laravel') return 'glow-theme-laravel';
        if (activeTab === 'qa') return 'glow-theme-qa';
        return 'glow-theme-react';
    };

    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            className={`hero section ${getThemeClass()}`}
            id="home"
        >
            {/* Visual background grids */}
            <div className="hero-bg">
                <div className="hero-grid-mesh"></div>
                <div className="hero-spotlight"></div>
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="hero-content container">
                <div className="hero-grid">
                    {/* Left Column: Info Content */}
                    <motion.div
                        className="hero-info"
                        initial={{ opacity: 0, x: -45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <div className="hero-badge-container">
                            <motion.div
                                className="hero-badge"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                            >
                                <Sparkles size={14} className="badge-spark text-cyan" />
                                <span>Open for Full-time Roles & Freelance</span>
                            </motion.div>
                        </div>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Hi, I'm <span className="hero-name">Aayush Mathur</span>
                        </motion.h1>

                        <motion.div
                            className="hero-role-wrapper"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.45 }}
                        >
                            <h2 className="hero-role">
                                <span className="role-prefix">I am a </span>
                                <span className="role-highlight">
                                    <span className="typing-text">Full Stack Developer & Tester</span>
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            Full Stack Web Developer and Software Tester with 3+ years of experience in designing,
                            developing, testing, and maintaining scalable web applications. Delivering secure,
                            stable, and user-focused solutions with Laravel, React.js, and modern web technologies.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75 }}
                        >
                            <a href="#projects" className="btn btn-primary btn-glow-hover" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                View My Work
                                <ArrowDown size={18} />
                            </a>
                            <a href="/Aayush_Mathur_Resume.pdf" className="btn btn-secondary" download>
                                <Download size={18} />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Bento Stats Grid */}
                        <motion.div
                            className="bento-stats-grid"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            {/* Bento 1: Experience */}
                            <motion.div
                                className="bento-stat-card"
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <div className="bento-stat-main">
                                    <span className="bento-stat-number">3+</span>
                                    <span className="bento-stat-label">Years Exp</span>
                                </div>
                                <div className="bento-stat-visual">
                                    <div className="mini-chart">
                                        <div className="chart-bar filled" style={{ height: '30%' }}></div>
                                        <div className="chart-bar filled" style={{ height: '48%' }}></div>
                                        <div className="chart-bar filled" style={{ height: '65%' }}></div>
                                        <div className="chart-bar filled" style={{ height: '80%' }}></div>
                                        <div className="chart-bar filled" style={{ height: '100%' }}></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bento 2: Projects & Live Uptime */}
                            <motion.div
                                className="bento-stat-card"
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <div className="bento-stat-main">
                                    <span className="bento-stat-number">11+</span>
                                    <span className="bento-stat-label">Live Proj</span>
                                </div>
                                <div className="bento-stat-visual">
                                    <div className="server-dot-matrix">
                                        <div className="matrix-dot active"></div>
                                        <div className="matrix-dot"></div>
                                        <div className="matrix-dot pulsing"></div>
                                        <div className="matrix-dot"></div>
                                        <div className="matrix-dot"></div>
                                        <div className="matrix-dot active"></div>
                                        <div className="matrix-dot"></div>
                                        <div className="matrix-dot active"></div>
                                        <div className="matrix-dot pulsing"></div>
                                        <div className="matrix-dot"></div>
                                        <div className="matrix-dot"></div>
                                        <div className="matrix-dot active"></div>
                                        <div className="matrix-dot"></div>
                                        <div className="matrix-dot pulsing"></div>
                                        <div className="matrix-dot active"></div>
                                        <div className="matrix-dot"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bento 3: Tech Stack Clusters */}
                            <motion.div
                                className="bento-stat-card"
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <div className="bento-stat-main">
                                    <span className="bento-stat-number">15+</span>
                                    <span className="bento-stat-label">Techs</span>
                                </div>
                                <div className="bento-stat-visual">
                                    <div className="tech-cluster">
                                        <div className="tech-mini-logo" title="React">React</div>
                                        <div className="tech-mini-logo" title="Laravel">Laravel</div>
                                        <div className="tech-mini-logo" title="MySQL">MySQL</div>
                                        <div className="tech-mini-logo" title="QA Testing">QA</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Premium Interactive 3D IDE mock */}
                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, x: 45, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.85, delay: 0.4, ease: 'easeOut' }}
                    >
                        {/* Rotating cosmic tech rings */}
                        <div className="tech-ring-container">
                            <div className="tech-ring ring-outer"></div>
                            <div className="tech-ring ring-inner"></div>
                            <div className="tech-pulse-glow"></div>
                        </div>

                        {/* Interactive IDE Mockup */}
                        <motion.div
                            className="developer-window adaptive-glow"
                            whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <div className="window-header">
                                <div className="window-controls">
                                    <span className="dot dot-close"></span>
                                    <span className="dot dot-minimize"></span>
                                    <span className="dot dot-expand"></span>
                                </div>
                                <div className="window-tabs">
                                    <div
                                        className={`tab ${activeTab === 'react' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('react')}
                                    >
                                        <Code2 size={12} className="tab-icon-svg text-cyan" />
                                        <span>App.tsx</span>
                                    </div>
                                    <div
                                        className={`tab ${activeTab === 'laravel' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('laravel')}
                                    >
                                        <Settings size={12} className="tab-icon-svg text-red" />
                                        <span>deploy.json</span>
                                    </div>
                                    <div
                                        className={`tab ${activeTab === 'qa' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('qa')}
                                    >
                                        <Terminal size={12} className="tab-icon-svg text-pink" />
                                        <span>api.test.ts</span>
                                    </div>
                                </div>
                            </div>

                            <div className="window-editor">
                                <div className="editor-line-numbers">
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <span key={i}>{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                                    ))}
                                </div>
                                <div className="editor-code">
                                    <AnimatePresence mode="wait">
                                        {activeTab === 'react' && (
                                            <motion.div
                                                key="react"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="code-line"><span className="code-keyword">import</span> <span className="code-bracket">&#123;</span> <span className="code-variable">useState</span>, <span className="code-variable">useEffect</span> <span className="code-bracket">&#125;</span> <span className="code-keyword">from</span> <span className="code-string">'react'</span>;</div>
                                                <div className="code-line"><span className="code-keyword">import</span> <span className="code-bracket">&#123;</span> <span className="code-variable">motion</span> <span className="code-bracket">&#125;</span> <span className="code-keyword">from</span> <span className="code-string">'framer-motion'</span>;</div>
                                                <div className="code-line"></div>
                                                <div className="code-line"><span className="code-keyword">export</span> <span className="code-keyword">const</span> <span className="code-variable">DeveloperProfile</span> = () =&gt; <span className="code-bracket">&#123;</span></div>
                                                <div className="code-line indent-1"><span className="code-keyword">const</span> <span className="code-bracket">[</span><span className="code-variable">isMidDev</span>, <span className="code-variable">setRole</span><span className="code-bracket">]</span> = <span className="code-property">useState</span>(<span className="code-keyword">true</span>);</div>
                                                <div className="code-line indent-1"></div>
                                                <div className="code-line indent-1"><span className="code-keyword">return</span> (</div>
                                                <div className="code-line indent-2"><span className="code-tag">&lt;</span><span className="code-keyword">motion.div</span> <span className="code-property">className</span>=<span className="code-string">"full-stack-card"</span><span className="code-tag">&gt;</span></div>
                                                <div className="code-line indent-3"><span className="code-tag">&lt;</span><span className="code-keyword">LaravelController</span> <span className="code-property">secure</span>=<span className="code-bracket">&#123;</span><span className="code-keyword">true</span><span className="code-bracket">&#125;</span> <span className="code-tag">/&gt;</span></div>
                                                <div className="code-line indent-3"><span className="code-tag">&lt;</span><span className="code-keyword">CypressAutomation</span> <span className="code-property">coverage</span>=<span className="code-string">"98%"</span> <span className="code-tag">/&gt;</span></div>
                                                <div className="code-line indent-2"><span className="code-tag">&lt;/</span><span className="code-keyword">motion.div</span><span className="code-tag">&gt;</span></div>
                                                <div className="code-line indent-1">);</div>
                                                <div className="code-line"><span className="code-bracket">&#125;</span>;<span className="code-cursor"></span></div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'laravel' && (
                                            <motion.div
                                                key="laravel"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="code-line"><span className="code-bracket">&#123;</span></div>
                                                <div className="code-line indent-1"><span className="code-property">"host"</span>: <span className="code-string">"aayu-port.vercel.app"</span>,</div>
                                                <div className="code-line indent-1"><span className="code-property">"core_architectures"</span>: <span className="code-bracket">&#123;</span></div>
                                                <div className="code-line indent-2"><span className="code-property">"backend"</span>: <span className="code-string">"Laravel / PHP API Services"</span>,</div>
                                                <div className="code-line indent-2"><span className="code-property">"frontend"</span>: <span className="code-string">"React / Vite / HSL Styles"</span>,</div>
                                                <div className="code-line indent-2"><span className="code-property">"databases"</span>: <span className="code-string">"MySQL Relational Architecture"</span></div>
                                                <div className="code-line indent-1"><span className="code-bracket">&#125;</span>,</div>
                                                <div className="code-line indent-1"><span className="code-property">"ci_cd"</span>: <span className="code-bracket">&#123;</span></div>
                                                <div className="code-line indent-2"><span className="code-property">"pipeline"</span>: <span className="code-string">"GitHub Actions to Production"</span>,</div>
                                                <div className="code-line indent-2"><span className="code-property">"coverage"</span>: <span className="code-string">"JUnit Automated Suite / passing"</span></div>
                                                <div className="code-line indent-1"><span className="code-bracket">&#125;</span></div>
                                                <div className="code-line"><span className="code-bracket">&#125;</span>;<span className="code-cursor"></span></div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'qa' && (
                                            <motion.div
                                                key="qa"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="qa-terminal-header">
                                                    <div className="terminal-badge">
                                                        <span className={`terminal-status-indicator ${isRunningTests ? 'ready' : ''}`}></span>
                                                        <span>playwright test runner</span>
                                                    </div>
                                                    <button
                                                        className={`terminal-run-btn ${isRunningTests ? 'running' : ''}`}
                                                        onClick={runSimulatedTests}
                                                        disabled={isRunningTests}
                                                    >
                                                        <Play size={10} />
                                                        {isRunningTests ? 'Executing...' : 'Run Spec'}
                                                    </button>
                                                </div>

                                                <div className="console-output-block">
                                                    {testLogs.length === 0 ? (
                                                        <div className="console-line console-system">// Click "Run Spec" to compile integration tests</div>
                                                    ) : (
                                                        testLogs.map((log, index) => (
                                                            <div key={index} className={`console-line console-${log.type}`}>
                                                                {log.type === 'success' && <CheckCircle2 size={11} className="console-success" />}
                                                                {log.text}
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                                {/* cursor spacer */}
                                                {!isRunningTests && <span className="code-cursor" style={{ marginTop: '8px' }}></span>}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating elements & interactive badges */}
                        <motion.div
                            className="floating-badge badge-react"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="badge-glow glow-cyan"></div>
                            <div className="badge-logo react-color">
                                <Cpu size={16} />
                            </div>
                            <div className="badge-text">
                                <span className="badge-title">React / Frontend</span>
                                <span className="badge-desc">90fps Motion</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="floating-badge badge-laravel"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div className="badge-glow glow-red"></div>
                            <div className="badge-logo laravel-color">
                                <Database size={16} />
                            </div>
                            <div className="badge-text">
                                <span className="badge-title">Laravel / PHP</span>
                                <span className="badge-desc">Secure DB & APIs</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="floating-badge badge-qa"
                            animate={{ y: [0, -7, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="badge-glow glow-green"></div>
                            <div className="badge-logo qa-color">
                                <Settings size={16} />
                            </div>
                            <div className="badge-text">
                                <span className="badge-title">Automated QA</span>
                                <span className="badge-desc">100% Green Pipeline</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Mouse Indicator */}
            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
