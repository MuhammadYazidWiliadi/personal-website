import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('enEb5OSHBEG2fjEdG');
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('service_m2kxyvk', 'template_j7xxmzi', emailParams)
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  const inputClasses = "w-full bg-transparent border-b border-gray-600 py-3 px-1 text-gray-300 focus:outline-none focus:border-image-linear-gradient focus:border-cyan-soft transition-colors";
  const errorClasses = "animate-shake text-red-400 text-sm mt-1";

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, letterSpacing: '0.25em' }} animate={{ opacity: 1, letterSpacing: 'normal' }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center mb-12">
            <h1 className="text-4xl font-serif mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-cyan-soft mx-auto mb-6"></div>
            <p className="text-gray-400">Have a question or want to work together? Feel free to contact me!</p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="space-y-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={inputClasses} />
              {errors.name && <p className={errorClasses}>{errors.name}</p>}
            </div>

            <div>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={inputClasses} />
              {errors.email && <p className={errorClasses}>{errors.email}</p>}
            </div>

            <div>
              <input type="text" name="subject" placeholder="Subject (Optional)" value={formData.subject} onChange={handleChange} className={inputClasses} />
            </div>

            <div>
              <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`}></textarea>
              {errors.message && <p className={errorClasses}>{errors.message}</p>}
            </div>

            <div className="pt-4">
              <button type="submit" disabled={isSubmitting} className="btn-gradient px-8 py-3 rounded-lg w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-70">
                {isSubmitting ? (<><Loader className="animate-spin h-5 w-5" /><span>Sending...</span></>) : (<><span>Send Message</span><Send size={16} /></>)}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-dark-navy p-6 rounded-lg shadow-xl border border-cyan-soft/30 shadow-custom">
              <div className="flex flex-col items-center">
                <svg className="w-16 h-16 text-cyan-soft mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-serif mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-center">Thank you for your message. I'll get back to you soon.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
