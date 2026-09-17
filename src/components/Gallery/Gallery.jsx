import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Gallery.css";
import galleryData from "./galleryData";

export default function Gallery({ onNext }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedMemory =
    selectedIndex !== null ? galleryData[selectedIndex] : null;

  // ==============================
  // OPEN MEMORY
  // ==============================

  const openMemory = (index) => {
    setSelectedIndex(index);
  };

  // ==============================
  // CLOSE MEMORY
  // ==============================

  const closeMemory = () => {
    setSelectedIndex(null);
  };

  // ==============================
  // NEXT MEMORY
  // ==============================

  const nextMemory = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (current + 1) % galleryData.length;
    });
  };

  // ==============================
  // PREVIOUS MEMORY
  // ==============================

  const previousMemory = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current - 1 + galleryData.length) %
        galleryData.length
      );
    });
  };

  // ==============================
  // KEYBOARD CONTROLS
  // ==============================

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeMemory();
      }

      if (event.key === "ArrowRight") {
        nextMemory();
      }

      if (event.key === "ArrowLeft") {
        previousMemory();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [selectedIndex]);

  return (
    <section className="gallery">

      {/* =================================
          HEADER
      ================================= */}

      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span className="gallery-small-title">
          A COLLECTION OF US
        </span>

        <h1 className="gallery-title">
          📸 Our Memories ❤️
        </h1>

        <p className="gallery-subtitle">
          Every picture holds a moment,
          <br />
          and every moment holds a piece of our story.
        </p>
      </motion.div>

      {/* =================================
          GALLERY
      ================================= */}

      <div className="gallery-grid">

        {galleryData.map((item, index) => (

          <motion.div
            key={item.id}
            className={`polaroid polaroid-${index + 1}`}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              y: -15,
              zIndex: 20,
            }}
            onClick={() => openMemory(index)}
          >

            {/* Media */}

            <div className="polaroid-media">

              {item.type === "image" ? (

                <img
                  src={item.src}
                  alt={item.title}
                />

              ) : (

                <div className="video-preview">

                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />

                  <div className="video-play">
                    ▶
                  </div>

                </div>

              )}

              {/* Video badge */}

              {item.type === "video" && (
                <span className="video-badge">
                  ▶ VIDEO
                </span>
              )}

            </div>

            {/* Polaroid Caption */}

            <div className="polaroid-caption">

              <h3>
                {item.title}
              </h3>

              <p>
                {item.caption}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {/* =================================
          GALLERY END MESSAGE
      ================================= */}

      <motion.div
        className="gallery-ending"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="ending-heart">
          ❤️
        </div>

        <h2>
          Every Memory With You Is Precious
        </h2>

        <p>
          These pictures may capture moments,
          but they could never capture how much
          those moments mean to me.
        </p>

      </motion.div>

      {/* =================================
          CONTINUE BUTTON
      ================================= */}

      <motion.button
        className="gallery-next-btn"
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onNext}
      >
        Open Massage from AB 💌
      </motion.button>

      {/* =================================
          FULLSCREEN LIGHTBOX
      ================================= */}

      <AnimatePresence>

        {selectedMemory && (

          <motion.div
            className="lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeMemory}
          >

            {/* Close */}

            <button
              className="lightbox-close"
              onClick={closeMemory}
              aria-label="Close gallery"
            >
              ✕
            </button>

            {/* Previous */}

            <button
              className="lightbox-arrow lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                previousMemory();
              }}
              aria-label="Previous memory"
            >
              ‹
            </button>

            {/* Content */}

            <motion.div
              key={selectedMemory.id}
              className="lightbox-content"
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >

              <div className="lightbox-media">

                {selectedMemory.type === "image" ? (

                  <img
                    src={selectedMemory.src}
                    alt={selectedMemory.title}
                  />

                ) : (

                  <video
                    src={selectedMemory.src}
                    controls
                    autoPlay
                    playsInline
                  />

                )}

              </div>

              <div className="lightbox-info">

                <span>
                  {selectedMemory.type === "video"
                    ? "🎥 VIDEO MEMORY"
                    : "📸 PHOTO MEMORY"}
                </span>

                <h2>
                  {selectedMemory.title}
                </h2>

                <p>
                  {selectedMemory.caption}
                </p>

                <small>
                  {selectedIndex + 1} / {galleryData.length}
                </small>

              </div>

            </motion.div>

            {/* Next */}

            <button
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                nextMemory();
              }}
              aria-label="Next memory"
            >
              ›
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}