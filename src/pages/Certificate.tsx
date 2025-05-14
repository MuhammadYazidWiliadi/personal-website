import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Footer from '@/components/Footer';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
  date: string;
  category: 'Coding' | 'Religious' | 'Others';
}

const certificates: Certificate[] = [
  // Coding Certificates
  { id: 1, title: "Backend Development", issuer: "CyberLabs", image: "/certicates/code/cer1.png", date: "November 2023", category: 'Coding' },
  { id: 2, title: "Data Science with Python", issuer: "DQ Lab", image: "/certicates/code/cer2.png", date: "August 2023", category: 'Coding' },
  { id: 3, title: "Intro to Python", issuer: "Dicoding", image: "/certicates/code/cer3.png", date: "December 2023", category: 'Coding' },
  { id: 4, title: "Programming Fundamentals", issuer: "Dicoding", image: "/certicates/code/cer4.png", date: "December 2023", category: 'Coding' },
  { id: 5, title: "Basic Programmer Training", issuer: "Dicoding", image: "/certicates/code/cer5.png", date: "January 2025", category: 'Coding' },
  { id: 6, title: "Programming Logic", issuer: "Dicoding", image: "/certicates/code/cer6.png", date: "January 2025", category: 'Coding' },
  { id: 7, title: "Learning SQL", issuer: "Dicoding", image: "/certicates/code/cer7.png", date: "December 2023", category: 'Coding' },
  { id: 8, title: "Intro to Data Science", issuer: "Dicoding", image: "/certicates/code/cer8.png", date: "November 2023", category: 'Coding' },
  { id: 9, title: "Frontend Development", issuer: "Wantek", image: "/certicates/code/cer9.jpg", date: "November 2023", category: 'Coding' },
  { id: 10, title: "Internship Program", issuer: "Wesclic Indonesia", image: "/certicates/code/cer10.png", date: "June 2024", category: 'Coding' },
  { id: 11, title: "React", issuer: "MySkill", image: "/certicates/code/cer11.png", date: "March 2025", category: 'Coding' },
  { id: 12, title: "Completed DBS", issuer: "DBS & Dicoding", image: "/certicates/code/cer12.png", date: "May 2025", category: 'Coding' },


  // Religious certicates
  { id: 16, title: "MQK Saffinah", issuer: "Al-Riyadl", image: "/certicates/religion/ser1.jpg", date: "March 2021", category: 'Religious' },
  { id: 17, title: "Tahfidz Do'a Harian", issuer: "Al-Riyadl", image: "/certicates/religion/ser2.jpg", date: "March 2020", category: 'Religious' },
  { id: 18, title: "Top 3", issuer: "Al-Riyadl", image: "/certicates/religion/ser3.jpg", date: "May 2022", category: 'Religious' },
  { id: 19, title: "Top 3", issuer: "Al-Riyadl", image: "/certicates/religion/ser4.jpg", date: "December 2021", category: 'Religious' },
  { id: 20, title: "LCC", issuer: "SMK Wikrama Bogor", image: "/certicates/religion/ser5.jpg", date: "October 2023", category: 'Religious' },
  { id: 21, title: "Tahfidz Fathul Athfal", issuer: "Al-Riyadl", image: "/certicates/religion/ser6.jpg", date: "March 2021", category: 'Religious' },
  { id: 22, title: "MQK", issuer: "Al-Riyadl", image: "/certicates/religion/ser7.jpg", date: "May 2022", category: 'Religious' },
  { id: 23, title: "Tahfidz Al-Waqi'ah", issuer: "Al-Riyadl", image: "/certicates/religion/ser8.jpg", date: "May 2022", category: 'Religious' },
  { id: 24, title: "Tahfidz Fathul Athfal", issuer: "Al-Riyadl", image: "/certicates/religion/ser9.jpg", date: "May 2022", category: 'Religious' },
  { id: 25, title: "Lulus Amsilati", issuer: "Al-Riyadl", image: "/certicates/religion/ser10.jpg", date: "February 2021", category: 'Religious' },
  { id: 26, title: "Olimpiadi PAIBP", issuer: "SMK Wikrama Bogor", image: "/certicates/religion/ser11.png", date: "November 2023", category: 'Religious' },

  // others certificates
  { id: 30, title: "Basic English", issuer: "MySKill", image: "/certicates/others/cer1.png", date: "April 2025", category: 'Others' },
  { id: 31, title: "TOEFL ITP", issuer: "MySKill", image: "/certicates/others/cer2.png", date: "April 2025", category: 'Others' },
  { id: 32, title: "TOEFL IBT", issuer: "MySKill", image: "/certicates/others/cer3.png", date: "April 2025", category: 'Others' },
  { id: 33, title: "English Discoveries", issuer: "ETS & Edusoft", image: "/certicates/others/cer4.jpg", date: "November 2024", category: 'Others' },
  { id: 34, title: "Guitar", issuer: "Yousician", image: "/certicates/others/cer5.jpg", date: "April 2025", category: 'Others' },
];



const categories = ['Coding', 'Religious', 'Others'] as const;

const Certificate: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('Coding');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Escape key closes modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCertificate(null);
    };
    if (selectedCertificate) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedCertificate]);

  // variants for grid & cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // filter by selected category
  const filtered = certificates.filter(c => c.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-28 pb-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-100 mb-4">
            Certificates
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
          A curated showcase of academic, technical, spiritual, and personal achievement certificates across various domains.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-full font-medium
                ${selectedCategory === cat
                  ? 'bg-cyan-soft text-dark-navy'
                  : 'bg-dark-navy/30 text-gray-400 hover:bg-dark-navy/50'}
                transition
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map(certificate => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 6px 12px rgba(6,182,212,0.1)',
                borderColor: '#06B6D4'
              }}
              className="card-glass rounded-xl border border-dark-navy/30 overflow-hidden cursor-pointer transition-all duration-300 hover:border-2 hover:border-cyan-soft"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-cyan-soft">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-100 mb-2">
                  {certificate.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {certificate.issuer} · {certificate.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12"
              onClick={() => setSelectedCertificate(null)}
            >
              <div className="absolute inset-0 bg-dark-slate/95 backdrop-blur-md" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative bg-dark-overlay border border-dark-navy/30 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto z-10"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-cyan-soft transition-colors duration-300"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                <div className="p-8">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto rounded-md mb-6"
                  />

                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-100 mb-2">
                      {selectedCertificate.title}
                    </h2>
                    <p className="text-cyan-soft mb-4">
                      {selectedCertificate.issuer}
                    </p>
                    <p className="text-gray-400">
                      {selectedCertificate.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificate;
