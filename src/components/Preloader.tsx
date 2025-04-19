import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const greetings = ["Hello", "Hola", "Bonjour", "Annyeong", "Konnichiwa"];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(i => i + 1);
      }, 300); // 300ms per greeting (100ms fadeIn + 100ms show + 100ms fadeOut)
      return () => clearTimeout(timer);
    } else {
      // selesai semua sapaan → panggil onComplete setelah 400ms untuk zoom-out
      const finishTimer = setTimeout(onComplete, 400);
      return () => clearTimeout(finishTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence initial={false} mode="wait">
      {currentIndex < greetings.length && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#DBDBDB] min-h-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2, transition: { duration: 0.4 } }}
        >
          <AnimatePresence initial={false}>
            <motion.h1
              key={currentIndex}
              className="text-6xl font-serif text-[#2c3e50] absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1 }}
            >
              {greetings[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
