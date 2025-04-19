
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [pageName, setPageName] = useState('');
  
  React.useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
      
      // Extract page name from path
      const pathSegments = location.pathname.split('/');
      const newPageName = pathSegments[pathSegments.length - 1] || 'Home';
      setPageName(newPageName.charAt(0).toUpperCase() + newPageName.slice(1));
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('typing');
      setTimeout(() => {
        setDisplayLocation(location);
        setTimeout(() => {
          setTransitionStage('fadeIn');
        }, 600); // Time for typing animation
      }, 100);
    }
  };

  const variants = {
    fadeIn: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    fadeOut: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    typing: {
      opacity: 1,
      transition: {
        duration: 0.1,
      }
    }
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {transitionStage === 'typing' && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-dark-slate/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden">
              <motion.div
                className="text-4xl font-bold text-cyan-soft" 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={typewriterVariants}
              >
                {pageName}
                <span className="typing-cursor">&nbsp;</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={displayLocation.pathname}
        variants={variants}
        initial="fadeIn" 
        animate={transitionStage} 
        onAnimationComplete={handleAnimationEnd}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
