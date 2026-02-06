import { useState, useEffect, useRef } from 'react';

const useActiveSection = (sectionIds, options = {}) => {
  const { threshold = 0.2, rootMargin = '-10% 0px -60% 0px' } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const visibleSections = useRef(new Set());

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.current.add(id);
          } else {
            visibleSections.current.delete(id);
          }

          // Pick the first visible section in DOM order
          const current = sectionIds.find((s) => visibleSections.current.has(s));
          if (current) {
            setActiveSection(current);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      visibleSections.current.clear();
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
};

export default useActiveSection;
