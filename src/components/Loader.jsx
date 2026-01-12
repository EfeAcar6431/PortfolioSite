import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="loader-content">
        <motion.div
          className="loader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="loader-name">EFE ACAR</span>
        </motion.div>
        <motion.div
          className="loader-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Loader
