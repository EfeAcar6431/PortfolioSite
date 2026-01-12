import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiFastapi,
  SiPostgresql, SiRedis, SiDocker, SiGit, SiLinux,
  SiOpenai, SiPytorch
} from 'react-icons/si'
import { 
  HiCpuChip, HiCircleStack, HiCommandLine, HiCube,
  HiBeaker, HiSparkles, HiMagnifyingGlass, HiCloud
} from 'react-icons/hi2'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillGroups = [
    {
      title: "Languages",
      icon: <HiCommandLine />,
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Java", icon: null },
        { name: "C/C++", icon: null },
        { name: "SQL", icon: null },
      ]
    },
    {
      title: "RAG & Search",
      icon: <HiMagnifyingGlass />,
      skills: [
        { name: "Qdrant", icon: <HiCircleStack /> },
        { name: "LangChain", icon: null },
        { name: "Vector Embeddings", icon: null },
        { name: "BM25 / Hybrid Search", icon: null },
        { name: "Sentence Transformers", icon: null },
        { name: "Chunking Strategies", icon: null },
        { name: "Re-ranking (MMR, RRF)", icon: null },
      ]
    },
    {
      title: "LLMs & AI",
      icon: <HiSparkles />,
      skills: [
        { name: "OpenAI GPT-4", icon: <SiOpenai /> },
        { name: "LLaMA / Ollama", icon: null },
        { name: "Prompt Engineering", icon: null },
        { name: "Streaming (SSE)", icon: null },
        { name: "DeepEval", icon: <HiBeaker /> },
        { name: "Judge Orchestration", icon: null },
        { name: "Anti-Hallucination", icon: null },
      ]
    },
    {
      title: "Backend",
      icon: <HiCube />,
      skills: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "SQLAlchemy", icon: null },
        { name: "Async/Await", icon: null },
        { name: "REST APIs", icon: null },
      ]
    },
    {
      title: "Frontend",
      icon: <HiCpuChip />,
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Vite", icon: null },
        { name: "TanStack Query", icon: null },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <HiCloud />,
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Nginx", icon: null },
        { name: "CI/CD", icon: null },
      ]
    },
  ]

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technical <span>toolkit</span>
          </h2>
        </motion.div>

        <div className="skills-bento">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              className={`skill-card skill-card-${groupIndex + 1}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + groupIndex * 0.08 }}
            >
              <div className="skill-card-header">
                <span className="skill-card-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.3 + groupIndex * 0.08 + skillIndex * 0.03 
                    }}
                  >
                    {skill.icon && <span className="skill-tag-icon">{skill.icon}</span>}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-highlight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="highlight-content">
            <span className="highlight-label">Specialization</span>
            <p>Production AI Systems · RAG Architectures · LLM Evaluation Pipelines · Multi-Tenant SaaS</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
