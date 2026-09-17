import { motion } from "framer-motion";
import "./Timeline.css";
import timelineData from "./timelineData";
import LoveCounter from "../LoveCounter/LoveCounter";

export default function Timeline({ onNext }) {
  return (
    <section className="timeline">

      {/* Love Counter */}
      <LoveCounter />

      {/* Timeline Title */}
      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="timeline-title">
          ❤️ Our Journey ❤️
        </h1>

        <p className="timeline-subtitle">
          Every memory with you has become one of the most beautiful chapters
          of my life.
        </p>
      </motion.div>

      {/* Vertical Line */}
      <div className="timeline-line"></div>

      {/* Timeline Cards */}
      {timelineData.map((item, index) => (
        <motion.div
          key={item.id}
          className={`timeline-item ${
            index % 2 === 0 ? "left" : "right"
          }`}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -150 : 150,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="timeline-card">

            <div className="timeline-image">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                {item.date}
              </span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

            </div>

          </div>
        </motion.div>
      ))}

      {/* Ending Message */}
      <motion.div
        className="timeline-ending"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2>
          ❤️ And This Is Only The Beginning...
        </h2>

        <p>
          Thank you for every smile, every laugh, every hug,
          and every beautiful memory we've created together.
          I can't wait to make many more with you.
        </p>
      </motion.div>

      {/* Continue Button */}
      <motion.button
        className="next-btn"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(255,77,109,.6)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
      >
        Continue Our Story ❤️
      </motion.button>

    </section>
  );
}