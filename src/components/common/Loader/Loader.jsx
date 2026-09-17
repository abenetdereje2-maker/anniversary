import { motion } from "framer-motion";
import "./Loader.css";
import Background from "../Background/Background";
export default function Loader() {
  return (
    <div className="loader">
        <Background />
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5, duration: 1 }}
      >
        Forever One
      </motion.h1>

      <motion.h2
        className="names"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Abenet ❤️ Heyabe
      </motion.h2>

      <div className="loading-bar">
        <div className="progress"></div>
      </div>

    </div>
  );
}