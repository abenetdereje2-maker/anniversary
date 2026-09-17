import { motion } from "framer-motion";
import "./Story.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Story({ onNext }) {
  return (
    <motion.section 
      className="story-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="story-card">
        <motion.div className="heart-badge" variants={itemVariants}>
          ❤️
        </motion.div>

        <motion.h1 variants={itemVariants} className="story-title">
          Our Story
        </motion.h1>

        <div className="story-text-group">
          <motion.p variants={itemVariants} className="story-line">
            One year ago...
          </motion.p>

          <motion.p variants={itemVariants} className="story-line">
            Two strangers met.
          </motion.p>

          <motion.p variants={itemVariants} className="story-line">
            One conversation became thousands.
          </motion.p>

          <motion.p variants={itemVariants} className="story-line highlight">
            One smile became countless memories.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="button-wrapper">
          <motion.button
            className="continue-btn"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(255, 107, 129, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
          >
            <span>Continue</span>
            <span className="btn-heart">❤️</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}