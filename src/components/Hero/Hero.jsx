import { motion } from "framer-motion";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import Petals from "../Petals/Petals";
export default function Hero({ onNext }) {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 1 }}
    >
        <Petals />
      {/* Left Side */}
      <motion.div
        className="hero-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.3,
        }}
      >
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Happy First Anniversary ❤️
        </motion.h1>

       <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 1,
    duration: 1,
  }}
>
  Every love story is beautiful,
  <br />
  but ours is my favorite.
</motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
        >
          Abenet ❤️ Heyabe
        </motion.h3>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 30px rgba(255,77,109,.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
        >
          Begin Our Journey ❤️
        </motion.button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hero-image"
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [-10, 10, -10],
        }}
        transition={{
          x: {
            duration: 1,
            delay: 0.5,
          },
          opacity: {
            duration: 1,
            delay: 0.5,
          },
          y: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src="/images/Ab-heyab.jpg"
          alt="Abenet and Heyabe"
        />
      </motion.div>

      {/* Decorative Glow */}
      <div className="hero-glow"></div>
    </motion.section>
  );
}