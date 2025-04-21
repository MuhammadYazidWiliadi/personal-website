import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code,
  PaintBucket,
  GitBranch,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const [skills] = useState([
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Laravel', level: 88 }
  ]);

  const tools = [
    { name: 'VSCode', icon: Code },
    { name: 'Figma', icon: PaintBucket },
    { name: 'Git', icon: GitBranch },
    { name: 'Unity', icon: Layers },
    { name: 'Terminal', icon: Terminal },
    { name: 'Docker', icon: Cpu }
  ];

  const { scrollYProgress } = useScroll();
  const opacitySection2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const opacitySection3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <div className="pt-24">
      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div
              initial={{ rotate: 180, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-64 h-64 flex-shrink-0"
            >
              <div className="w-full h-full rounded-xl overflow-hidden border-2 border-dark-navy/50 filter brightness-95 shadow-custom">
                <img
                  src="/gwehj.jpg"
                  alt="Yazid Wiliadi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-4xl font-serif mb-4 animate-letter-spacing">
                  About Me
                </h1>
                <div className="w-20 h-1 bg-cyan-soft mb-6"></div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 mb-4 leading-relaxed"
                >
                  I'm a passionate frontend developer with a keen eye for design
                  and user experience. With years of experience in building
                  responsive and interactive web applications, I strive to
                  create digital experiences that are both functional and
                  visually appealing.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  My approach to web development focuses on clean code,
                  attention to detail, and staying up-to-date with the latest
                  web technologies and best practices.
                </motion.p>

                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="border-l-3 border-cyan-soft pl-4 italic text-gray-400 my-6"
                >
                  "Good design is like a refrigerator—when it works, no one
                  notices, but when it doesn't, it sure stinks."
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <SocialLinks className="mt-8" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section
        style={{ opacity: opacitySection2 }}
        className="py-16 bg-dark-navy/20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-serif mb-4">Skills</h2>
            <div className="w-20 h-1 bg-cyan-soft"></div>
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-soft to-blue-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tools Section */}
      <motion.section
        style={{ opacity: opacitySection3 }}
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-serif mb-4">
              Tools & Technologies
            </h2>
            <div className="w-20 h-1 bg-cyan-soft"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-4 rounded-lg card-glass"
              >
                <tool.icon className="text-gray-400 mb-3 h-10 w-10" />
                <span className="text-gray-300 text-sm">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
