import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SpecialMessage.css";
const SECRET_PASSWORD = "heyabe!1998+AB";

export default function SpecialMessage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const videoRef = useRef(null);

  const handleUnlock = (event) => {
    event.preventDefault();

    if (
      password.trim().toLowerCase() ===
      SECRET_PASSWORD.toLowerCase()
    ) {
      setError("");
      setUnlocked(true);
    } else {
      setError("That's not our secret ❤️ Try again.");
      setPassword("");
    }
  };

  return (
    <section className="special-message">

      {/* Floating Hearts */}

      <div className="special-hearts">
        <span>❤️</span>
        <span>💕</span>
        <span>💗</span>
        <span>💖</span>
        <span>❤️</span>
        <span>💞</span>
      </div>

      <AnimatePresence mode="wait">

        {/* ==========================
            PASSWORD SCREEN
        ========================== */}

        {!unlocked && (
          <motion.div
            key="password"
            className="password-container"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1.1,
              y: -30,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <motion.div
              className="lock-icon"
              animate={{
                y: [0, -8, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              🔐
            </motion.div>

            <span className="special-label">
              A LITTLE SECRET FOR YOU
            </span>

            <h1>
              Something Special 💌
            </h1>

            <p>
              There is something waiting for you...
              <br />
              But only you can unlock it. ❤️
            </p>

            <form
              className="password-form"
              onSubmit={handleUnlock}
            >

              <label htmlFor="secret-password">
                Enter our secret password
              </label>

              <input
                id="secret-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                placeholder="Our secret..."
                autoComplete="off"
              />

              <AnimatePresence>
                {error && (
                  <motion.div
                    className="password-error"
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                className="unlock-button"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                Unlock My Surprise ❤️
              </motion.button>

            </form>

            <p className="secret-hint">
              Hint: It's something special to us... 🤫
            </p>

          </motion.div>
        )}

        {/* ==========================
            VIDEO SCREEN
        ========================== */}

        {unlocked && (
          <motion.div
            key="video"
            className="video-surprise-container"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >

            <motion.div
              className="success-heart"
              initial={{
                scale: 0,
              }}
              animate={{
                scale: [0, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
              }}
            >
              ❤️
            </motion.div>

            <span className="special-label">
              YOU UNLOCKED MY SURPRISE
            </span>

            <h1>
              This Is For You, Heyabe 💕
            </h1>

            <p className="video-intro">
              I made this little video just for you.
              <br />
              Every moment in it means something to me. ❤️
            </p>

            {/* VIDEO */}

       <motion.div
  className="special-video-wrapper"
  initial={{
    opacity: 0,
    scale: 0.9,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    delay: 0.5,
    duration: 0.8,
  }}
>
  <video
    ref={videoRef}
    className="special-video"
    controls
    playsInline
    preload="metadata"
  >
    <source
      src="/videos/meses.mp4"
      type="video/mp4"
    />

    Your browser does not support this video.
  </video>
</motion.div>

            <motion.p
              className="video-footer"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
            >
              One year down... and so many beautiful memories
              still waiting for us. ❤️
            </motion.p>

            <motion.div
              className="forever-message"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Abenet ❤️ Heyabe
            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}