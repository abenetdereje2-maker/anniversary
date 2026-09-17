import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/common/Loader/Loader";
import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import Timeline from "./components/Timeline/Timeline";
import Gallery from "./components/Gallery/Gallery";
import SpecialMessage from "./components/Surprise/SpecialMessage";

function App() {
  const [loading, setLoading] = useState(true);
  const [chapter, setChapter] = useState("hero");

  // ==============================
  // LOADER
  // ==============================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // ==============================
  // SHOW LOADER
  // ==============================

  if (loading) {
    return <Loader />;
  }

  // ==============================
  // MAIN EXPERIENCE
  // ==============================

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={chapter}
        initial={{
          opacity: 0,
          scale: 1.02,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.98,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >

        {/* =========================
            HERO
        ========================= */}

        {chapter === "hero" && (
          <Hero
            onNext={() => setChapter("story")}
          />
        )}

        {/* =========================
            STORY
        ========================= */}

        {chapter === "story" && (
          <Story
            onNext={() => setChapter("timeline")}
          />
        )}

        {/* =========================
            TIMELINE
        ========================= */}

        {chapter === "timeline" && (
          <Timeline
            onNext={() => setChapter("gallery")}
          />
        )}

        {/* =========================
            GALLERY
        ========================= */}

        {chapter === "gallery" && (
          <Gallery
            onNext={() => setChapter("special")}
          />
        )}

        {/* =========================
            SPECIAL MESSAGE
        ========================= */}

        {chapter === "special" && (
          <SpecialMessage />
        )}

      </motion.div>

    </AnimatePresence>
  );
}

export default App;