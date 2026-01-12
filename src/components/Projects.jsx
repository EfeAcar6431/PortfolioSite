import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "VerifyWise",
      description: "Open-source AI governance platform supporting ISO 42001, EU AI Act, and NIST AI RMF. Built the LLM Evals module — a production-ready evaluation system with judge orchestration, multi-provider abstraction (OpenAI, Anthropic, Google), and async pipelines enabling continuous AI model evaluation without custom infrastructure.",
      tags: ["Python", "LLM Eval", "DeepEval", "TypeScript", "FastAPI"],
      github: "https://github.com/bluewave-labs/verifywise",
      featured: true,
      number: "01"
    },
    {
      title: "AssistAI",
      description: "Production multi-tenant RAG platform with a 7-stage pipeline achieving <10s end-to-end latency and 95%+ retrieval accuracy. Built hybrid search combining E5-Large dense embeddings with BM25 lexical matching via RRF fusion. Features entity-aware anti-hallucination filtering, 5 isolated Qdrant collections per tenant, PostgreSQL RLS, and real-time streaming via SSE.",
      tags: ["FastAPI", "RAG", "Qdrant", "PostgreSQL", "GPT-4", "Redis"],
      github: "https://github.com/altugacar/AsistAI",
      link: "https://miventoassist.ai",
      featured: true,
      number: "02"
    },
    {
      title: "Stock Picker Bot",
      description: "An AI-powered trading assistant built for the Finovate hackathon. Uses real-time market data and a custom reward-based algorithm to identify optimal stock selections based on historical performance patterns and market trends.",
      tags: ["Python", "AI/ML", "Finance", "API"],
      github: "https://github.com/EfeAcar6431/StockPickerBot",
      featured: true,
      number: "03"
    }
  ]

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I've <span>built</span>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="project-number">{project.number}</div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Live Demo"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View on GitHub"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-decoration">
                <div className="decoration-line" />
                <div className="decoration-dot" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://github.com/EfeAcar6431"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View All Projects on GitHub
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
