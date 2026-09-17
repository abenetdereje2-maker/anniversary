import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LoveCounter.css";

export default function LoveCounter() {
  // 👇 Replace with your real relationship start date
  const startDate = new Date("2025-08-12T00:00:00");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();

      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(diff / (1000 * 60 * 60));

      const minutes = Math.floor(diff / (1000 * 60));

      const seconds = Math.floor(diff / 1000);

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCounter();

    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="love-counter">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ❤️ We've Been Together ❤️
      </motion.h2>

      <div className="counter-grid">

        <motion.div
          className="counter-card"
          whileHover={{ scale: 1.05 }}
        >
          <h1>{time.days}</h1>
          <span>Days</span>
        </motion.div>

        <motion.div
          className="counter-card"
          whileHover={{ scale: 1.05 }}
        >
          <h1>{time.hours}</h1>
          <span>Hours</span>
        </motion.div>

        <motion.div
          className="counter-card"
          whileHover={{ scale: 1.05 }}
        >
          <h1>{time.minutes}</h1>
          <span>Minutes</span>
        </motion.div>

        <motion.div
          className="counter-card"
          whileHover={{ scale: 1.05 }}
        >
          <h1>{time.seconds}</h1>
          <span>Seconds</span>
        </motion.div>

      </div>

    </section>
  );
}