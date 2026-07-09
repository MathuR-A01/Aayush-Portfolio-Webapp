import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        type: 'work',
        title: 'Full Stack Developer & Software Tester',
        company: 'Teerthanker Mahaveer University (TMU)',
        location: 'Moradabad, Uttar Pradesh, India',
        period: '02/2023 - Present',
        description: 'Designing, developing, and maintaining scalable full-stack web applications using HTML, CSS, JavaScript, Bootstrap, React.js, Laravel, and MySQL. Built AI-powered counselling system handling 1,000+ queries/month. Developed TMU ONE Admin Dashboard with RBAC, announcements, and feedback modules. Performed manual and API testing for web and mobile applications.',
        tech: ['Laravel', 'React.js', 'MySQL', 'N8N Tool', 'Operations Management', 'Software Testing', 'Github', 'AI Tools'],
    },
    {
        type: 'work',
        title: 'Associate Software Engineer',
        company: 'Knocial India Limited',
        location: 'Gurugram, Haryana',
        period: '05/2022 - 12/2022',
        description: 'Designed and developed responsive, user-friendly web interfaces using HTML, CSS, JavaScript, Bootstrap, and ASP.NET ensuring cross-browser compatibility. Implemented dynamic UI components and client-side validations. Performed UI testing, bug fixing, and layout optimization.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'ASP.NET', 'Php', 'Mysql'],
    },
];

const education = [
    {
        type: 'education',
        title: "Bachelor's of Computer Applications",
        company: 'Teerthanker Mahaveer University',
        location: 'Moradabad, Uttar Pradesh, India',
        period: '08/2019 - 07/2022',
        description: 'Completed BCA with strong foundation in computer science, software development, data structures, algorithms, and web technologies.',
    },
];

const TimelineItem = ({ item, index, isInView }) => (
    <motion.div
        className={`timeline-item ${item.type}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
    >
        <div className="timeline-marker">
            <div className="timeline-dot">
                {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
            </div>
        </div>
        <div className="timeline-content glass-card">
            <span className="timeline-period">{item.period}</span>
            <h3 className="timeline-title">{item.title}</h3>
            <h4 className="timeline-company">{item.company}</h4>
            {item.location && <p className="timeline-location">{item.location}</p>}
            <p className="timeline-description">{item.description}</p>
            {item.tech && (
                <div className="timeline-tech">
                    {item.tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                    ))}
                </div>
            )}
        </div>
    </motion.div>
);

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">// My Journey</span>
                    <h2 className="section-title">Experience & Education</h2>
                    <p className="section-description">
                        A timeline of my professional experience and academic journey
                    </p>
                </motion.div>

                <div className="experience-grid">
                    {/* Work Experience */}
                    <div className="timeline-section">
                        <motion.h3
                            className="timeline-section-title"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <Briefcase size={20} />
                            Work Experience
                        </motion.h3>
                        <div className="timeline">
                            {experiences.map((item, index) => (
                                <TimelineItem key={item.title + item.company} item={item} index={index} isInView={isInView} />
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="timeline-section">
                        <motion.h3
                            className="timeline-section-title"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <GraduationCap size={20} />
                            Education
                        </motion.h3>
                        <div className="timeline">
                            {education.map((item, index) => (
                                <TimelineItem key={item.title} item={item} index={index} isInView={isInView} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
