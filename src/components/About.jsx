import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiCpuChip, HiRocketLaunch } from 'react-icons/hi2'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      role: "AI Eval Engineer",
      company: "Verifywise",
      period: "2025",
      description: "Built LLM Evals — a production-ready evaluation system with judge orchestration, multi-provider abstraction, and async pipelines enabling teams to continuously evaluate AI models without custom infrastructure."
    },
    {
      role: "AI Engineer",
      company: "Mivento Solutions",
      period: "2025",
      description: "Architected AssistAI — a multi-tenant RAG platform with hybrid search (BM25 + dense vectors), serving 3+ enterprise clients with 95%+ retrieval accuracy and sub-10s response times."
    },
    {
      role: "Tech Contributor",
      company: "Youth Dream Canada",
      period: "2023",
      description: "Developed educational technology tools to support youth programs."
    },
    {
      role: "Research Analyst",
      company: "Keiretsu Forum",
      period: "2023",
      description: "Conducted market research and analysis for startup investments."
    }
  ]

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">
            Building the future with <span>AI</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a Computer Science student at <strong>Northeastern University</strong> with 
              a focus on Artificial Intelligence and software engineering. I've seen firsthand 
              how AI can create entirely new solutions that save people time, energy, and 
              fundamentally improve how they work and live.
            </p>
            <p>
              Through building production AI systems — from LLM evaluation pipelines to 
              RAG-based knowledge systems — I've developed the skills to turn complex AI 
              capabilities into real products that deliver value. I build systems that work 
              in the real world, not just in demos.
            </p>
            <p>
              My goal is to create new AI-powered systems that solve problems people didn't 
              even know could be solved. The technology is here — it's about building the 
              right applications on top of it.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon"><HiAcademicCap /></span>
                <span>Northeastern University</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon"><HiCpuChip /></span>
                <span>AI & LLM Systems</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon"><HiRocketLaunch /></span>
                <span>Production Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-experience"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Experience</h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="exp-header">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <span className="exp-company">{exp.company}</span>
                  <p className="exp-description">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
