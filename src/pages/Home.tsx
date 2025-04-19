import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from '@/components/TypingEffect';
import SocialLinks from '@/components/SocialLinks';
import { ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const projectData = [
    {
      title: 'WebStudiow',
      description: 'A full‑featured Website Development Services dashboard for managing products, orders, customers, and real‑time sales analytics.',
      image: '/projects/webstudiow.png',
      tags: ['Laravel', 'Tailwind CSS', 'Mysql'],
      link: 'https://Wesclic.studio'
    },
    {
      title: 'Kopo Finance App',
      description: 'A finance manager for tracking expenses, setting budgets, and viewing interactive charts of your spending habits.',
      image: '/projects/kopo.png',
      tags: ['React Native', 'Mysql', 'Python'],
      link: 'https://manajemen-keuangan-client.vercel.app/dashboard'
    },
    {
      title: 'DBS Capstone App',
      description: 'A E-Commerce accommodation platform with sales analytics, user reviews, host dashboard, and integrated payment processing.',
      image: '/projects/dbs.jpg',
      tags: ['TypeScript', 'Tailwind CSS', 'Next.js'],  
      link: '#'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-medium text-gray-100 font-serif mb-4">
                I'm Yazid Wiliadi
              </h1>
              <div className="text-3xl text-cyan-soft font-light h-12 mb-4">
                <TypingEffect 
                  texts={["Hai", "Hello", "Bonjour", "Konnichiwa", "Annyeong"]} 
                  speed={100} 
                  pause={1500}
                />
              </div>
              <p className="text-lg text-gray-400 mb-8">Frontend Developer</p>
              
              <SocialLinks />
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Link 
                  to="/about" 
                  className="btn-gradient px-6 py-3 rounded-lg inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <ArrowDownCircle size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Tech Graphic Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="absolute inset-0 bg-dark-navy/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full bg-dark-navy/20 rounded-full border border-cyan-soft/30 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-dark-navy/10 rounded-full flex items-center justify-center">
                    <motion.div 
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-1/2 h-1/2 bg-cyan-soft/20 rounded-full flex items-center justify-center"
                    >
                      <div className="w-1/3 h-1/3 bg-cyan-soft/40 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.5, 0.7, 0.5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-cyan-soft/30 rounded-full animate-spin-slow"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-24 bg-dark-slate/80">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-serif mb-4 font-medium">Featured Projects</h2>
            <div className="w-20 h-1 bg-cyan-soft"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
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
                  <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-dark-navy/50 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={project.link} className="link-underline text-cyan-soft text-sm">
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link 
              to="/projects" 
              className="inline-block px-6 py-3 border border-cyan-soft/50 text-cyan-soft rounded-lg hover:bg-cyan-soft/10 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
