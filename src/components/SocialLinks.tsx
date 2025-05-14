
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  const socialItems = [
    { icon: Github, href: 'https://github.com/MuhammadYazidWiliadi', ariaLabel: 'GitHub Profile' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/wiliadi/', ariaLabel: 'LinkedIn Profile' },
    { icon: Instagram, href: 'https://www.instagram.com/vlykz_/', ariaLabel: 'Twitter Profile' },
    { icon: Mail, href: 'mailto:contact@wiliadiyaziiid@gmail.com', ariaLabel: 'Email Contact' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    },
  };

  return (
    <motion.div 
      className={`flex space-x-5 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialItems.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className="text-gray-400 hover:text-cyan-soft transition-all duration-300 hover:translate-y-[-3px] hover:drop-shadow-[0_0_8px_#06B6D4]"
          variants={item}
          whileHover={{ scale: 1.1 }}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
