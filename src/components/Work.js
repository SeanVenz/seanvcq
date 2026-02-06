import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '../constants/constant';
import SectionReveal from './SectionReveal';

const categories = ['all', 'work', 'personal', 'internship'];

function Work() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectData
    : projectData.filter(p => p.category === activeCategory);

  const featured = filteredProjects.filter(p => p.featured);
  const others = filteredProjects.filter(p => !p.featured);

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
            Work
          </span>
          <h2 className="text-h1 font-extralight text-primary mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-secondary text-lg font-light mb-12 max-w-xl">
            A collection of projects I've built and contributed to across different roles.
          </p>
        </SectionReveal>

        {/* Category Filter */}
        <SectionReveal delay={0.1}>
          <div className="flex gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-void'
                    : 'bg-surface-alt text-secondary hover:text-primary hover:bg-surface-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Featured Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {featured.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {featured.map((project, i) => (
                  <FeaturedCard key={project.title} project={project} index={i} />
                ))}
              </div>
            )}

            {/* Other Projects List */}
            {others.length > 0 && (
              <div className="border-t border-border">
                {others.map((project, i) => (
                  <ProjectRow key={project.title} project={project} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeaturedCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative block rounded-xl border border-border bg-surface overflow-hidden card-glow transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-surface-alt">
        <motion.img
          src={project.img}
          alt={project.alt}
          className="w-full h-full object-cover object-top"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-medium text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <motion.svg
            className="w-4 h-4 text-secondary group-hover:text-accent shrink-0 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ x: isHovered ? 3 : 0, y: isHovered ? -3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </motion.svg>
        </div>
        <p className="text-secondary text-sm font-light leading-relaxed mb-4 line-clamp-2">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-mono font-mono bg-surface-alt rounded-md text-tertiary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function ProjectRow({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-surface/50 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="flex items-center gap-4 min-w-0">
        <h4 className="text-primary text-sm font-medium group-hover:text-accent transition-colors whitespace-nowrap">
          {project.title}
        </h4>
        <span className="text-tertiary text-xs capitalize hidden sm:inline">
          {project.category}
        </span>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <div className="hidden md:flex gap-2">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[11px] font-mono bg-surface-alt rounded text-tertiary"
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.svg
          className="w-4 h-4 text-tertiary group-hover:text-accent transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ x: 4 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </div>
    </motion.a>
  );
}

export default Work;
