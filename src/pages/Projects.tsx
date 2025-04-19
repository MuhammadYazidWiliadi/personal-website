
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 'webstudiow',
      title: 'WebStudiow',
      description: 'A full‑featured e‑commerce dashboard for managing products, orders, customers, and real‑time sales analytics.',
      tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'WordPress'],
    image: '/projects/webstudiow.png',
      link: 'https://example.com/ecommerce',
      github: 'private',
      category: 'fullstack'
    },
    {
      id: 'finance',
      title: 'Kopo Finance App',
      description: 'A mobile finance manager for tracking expenses, setting budgets, and viewing interactive charts of your spending habits.',
      tags: ['React Native', 'MySQL', 'Figma', 'TypeScript'],
      image: '/projects/kopo.png',
      link: 'https://manajemen-keuangan-client.vercel.app/dashboard',
      github: 'private',
      category: 'frontend'
    },
    {
      id: 'dbs',
      title: 'DBS Capstone App',
      description: 'A E-Commerce accommodation platform with sales analytics, user reviews, host dashboard, and integrated payment processing.',
      tags: ['Next.js', 'Tailwind CSS', 'Postgres', 'TypeScript'],
      image: '/projects/dbs.jpg',
      link: '#',
      github: 'https://github.com/MuhammadYazidWiliadi/dbs',
      category: 'frontend'
    },
    {
      id: 'cashier',
      title: 'Cashier App',
      description: 'A point‑of‑sale application for small businesses featuring product scanning, receipt printing, and daily sales reports.',
      tags: ['Laravel', 'MySQL', 'Tailwind CSS'],
      image: '/projects/cashier.png',
      link: '#',
      github: 'private',
      category: 'fullstack'
    },
    {
      id: 'library',
      title: 'Wikrama Library App',
      description: 'A library management system for Wikrama with book catalog, borrowing/return tracking, and member account management.',
      tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
      image: '/projects/perpus.png',
      link: '#',
      github: 'https://github.com/KevinIlpz/sistem_perpus',
      category: 'frontend'
    },
    {
      id: 'notes',
      title: 'Notes App',
      description: 'A simple note‑taking application with markdown support, CRUD operations, and data persistence via a RESTful API.',
      tags: ['Node.js', 'Express', 'MongoDB', 'API'],
      image: '/projects/notes.png',
      link: '#',
      github: 'https://github.com/MuhammadYazidWiliadi/dbs-notesApp-restfulAPI',
      category: 'backend'
    }
  ];
  

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.25em' }}
          animate={{ opacity: 1, letterSpacing: 'normal' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-cyan-soft mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work across various technologies and platforms. Each project represents
            a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category.value
                  ? 'bg-cyan-soft text-dark-slate'
                  : 'bg-dark-navy text-gray-400 hover:bg-dark-navy/70'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-glass rounded-lg overflow-hidden shadow-custom border-b-2 border-cyan-soft"
              >
                <div className="h-48 bg-dark-navy/50 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-xl font-serif mb-2 hover:text-cyan-soft transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-dark-navy/50 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-soft transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-soft text-sm link-underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
