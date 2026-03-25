import { useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroSplash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const splashes = [
    "splash-1",
    "splash-2",
    "splash-3",
    "splash-4",
    "splash-5",
    "splash-6",
    "splash-7",
    "splash-8",
  ];

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(10px)",
        transition: { duration: 0.9, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="intro-glow"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="boba-wrap"
        initial={{ scale: 0.72, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="boba-main"
          animate={{
            scale: [1, 1.06, 1],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: 1,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="boba-highlight"
          animate={{ opacity: [0.2, 0.55, 0.25] }}
          transition={{ duration: 1.2, repeat: 1 }}
        />

        <motion.div
          className="crack-line"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.22, ease: "easeOut" }}
        />

        <motion.div
          className="shell-left"
          initial={{ x: 0, rotate: 0 }}
          animate={{ x: -58, rotate: -24, y: -6 }}
          transition={{ delay: 1.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="shell-right"
          initial={{ x: 0, rotate: 0 }}
          animate={{ x: 58, rotate: 24, y: -6 }}
          transition={{ delay: 1.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="explosion-core"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 2.2], opacity: [0, 1, 0] }}
          transition={{ delay: 1.42, duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {splashes.map((cls, i) => (
        <motion.div
          key={cls}
          className={`ink-splash ${cls}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.5],
            opacity: [0, 1, 0.92],
          }}
          transition={{
            delay: 1.5 + i * 0.04,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      <motion.div
        className="splash-overlay"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1.8], opacity: [0, 0.95, 1] }}
        transition={{ delay: 1.58, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="intro-logo-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0], y: [20, 0, -10] }}
        transition={{ delay: 0.45, duration: 1.6, ease: "easeOut" }}
      >
        Moshi Moshi
      </motion.div>
    </motion.div>
  );
}