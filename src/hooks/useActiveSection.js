import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, options = {}) => {
  const { threshold = 0.3, rootMargin = '-80px 0px -40% 0px' } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
};

export default useActiveSection;
