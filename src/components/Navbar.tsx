import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificate', path: '/certificate' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => 
    (path === '/' && location.pathname === '/') || 
    (path !== '/' && location.pathname.startsWith(path));

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-8 backdrop-blur-md bg-dark-slate/80">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-medium text-gray-100">
          Vlykz<span className="text-cyan-soft">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.path}
                className="relative py-1 px-2 text-gray-300 hover:text-cyan-soft transition-colors duration-300"
              >
                {isActive(item.path) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-dark-navy/30 rounded"
                    initial={false}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 ${isActive(item.path) ? 'text-cyan-soft' : ''}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-dark-slate/90 border-t border-cyan-soft/10"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-2 rounded text-gray-300 hover:text-cyan-soft transition-colors duration-300 ${
                    isActive(item.path) ? 'text-cyan-soft font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
