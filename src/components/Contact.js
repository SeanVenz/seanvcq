import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contact, socialLinks } from '../constants/constant';
import { sendEmail } from '../actions';
import SectionReveal from './SectionReveal';

function Contact() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const year = new Date().getFullYear();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await sendEmail(templateParams, setSuccess, setError);

      if (response) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
            Contact
          </span>
          <h2 className="text-h1 font-extralight text-primary mb-16">
            Let's <span className="text-gradient">connect</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <SectionReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary text-sm placeholder:text-tertiary focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary text-sm placeholder:text-tertiary focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary text-sm placeholder:text-tertiary focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-emerald-400 text-sm"
                  >
                    {success}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isLoading}
                className={`px-8 py-3 rounded-full border border-accent text-accent text-sm font-medium tracking-wide hover:bg-accent hover:text-void transition-all duration-300 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!isLoading ? { scale: 1.03 } : {}}
                whileTap={!isLoading ? { scale: 0.97 } : {}}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={0.2}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-primary text-lg font-medium mb-6">Get in touch</h3>
                <div className="space-y-4 mb-10">
                  {contact.map((con, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-accent [&_svg]:w-4 [&_svg]:h-4">{con.icon}</span>
                      <span className="text-secondary text-sm">{con.text}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-primary text-sm font-medium mb-4">Follow me</h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link, id) => (
                    <motion.a
                      key={id}
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all duration-300 [&_svg]:w-4 [&_svg]:h-4"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {link.logo}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-tertiary text-xs">
            &copy; {year} Sean Venz Quijano. All rights reserved.
          </p>
          <p className="text-tertiary text-xs">
            Designed & Built with care
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
