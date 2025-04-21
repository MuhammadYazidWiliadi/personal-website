import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-slate/90 backdrop-blur-md border-t border-cyan-soft/10 text-gray-300 py-8 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm md:text-base text-gray-400"
        >
          © {currentYear} — All rights reserved. Coded by <span className="text-gray-200 font-medium">Yazid Wiliadi</span>.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
