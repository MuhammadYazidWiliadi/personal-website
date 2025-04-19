
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  texts, 
  speed = 100, 
  pause = 1500 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setIsVisible(false);
        
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          setIsVisible(true);
        }, 500); // Time between words
      } else {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText === text) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentTextIndex, isDeleting, pause, speed, texts]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="inline-flex"
        >
          <span>{currentText}</span>
          <span className="typing-cursor">&nbsp;</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TypingEffect;
