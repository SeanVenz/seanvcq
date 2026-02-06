import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../constants/constant';
import useActiveSection from '../hooks/useActiveSection';

const sectionIds = ['hero', ...navItems.map(item => item.id)];

function SideNav() {
  const activeSection = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* SQ Monogram - Top Left */}
      <motion.button
        className="fixed top-6 left-6 z-40 text-primary font-sans font-semibold text-lg tracking-tight hover:text-accent transition-colors"
        onClick={handleScrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        SQ
      </motion.button>

      {/* Desktop Side Nav - Right */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-6" aria-label="Section navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Navigate to ${item.label}`}
          >
            <span
              className={`text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-accent opacity-100 translate-x-0'
                  : 'text-secondary opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {item.label}
            </span>
            <span className="relative flex items-center justify-center">
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'w-3 h-3 bg-accent shadow-glow-sm'
                    : 'w-2 h-2 bg-border group-hover:bg-secondary'
                }`}
              />
              {activeSection === item.id && (
                <motion.span
                  className="absolute w-3 h-3 rounded-full border border-accent/30"
                  layoutId="activeNav"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{ width: 20, height: 20 }}
                />
              )}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger - Top Right */}
      <motion.button
        className="md:hidden fixed top-6 right-6 z-50 p-2 rounded-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            className="block w-6 h-[2px] bg-primary rounded-full origin-left"
            animate={isMenuOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-4 h-[2px] bg-primary rounded-full"
            animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-primary rounded-full origin-left"
            animate={isMenuOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </motion.button>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-void/95 backdrop-blur-lg z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`text-2xl font-light tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-secondary hover:text-primary'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideNav;
