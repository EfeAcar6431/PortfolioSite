import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const firstName = "EFE"
  const lastName = "ACAR"

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="label-line" />
          <span>AI & Software Engineer</span>
        </motion.div>

        <div className="hero-name">
          <div className="name-row">
            {firstName.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="name-letter"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="name-row">
            {lastName.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i + firstName.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="name-letter outline"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          CS student at Northeastern University building with LLMs and 
          crafting intelligent solutions through code. Passionate about AI, 
          algorithms, and software that makes a difference.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="scroll-indicator">
            <div className="scroll-dot" />
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="stat">
          <span className="stat-number">3+</span>
          <span className="stat-label">Years Coding</span>
        </div>
        <div className="stat">
          <span className="stat-number">10+</span>
          <span className="stat-label">Projects Built</span>
        </div>
        <div className="stat">
          <span className="stat-number">8+</span>
          <span className="stat-label">Technologies</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
