import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '../constants/constant';
import SectionReveal from './SectionReveal';

function Experience() {
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.8'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
            Experience
          </span>
          <h2 className="text-h1 font-extralight text-primary mb-16">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </SectionReveal>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-border">
            <motion.div
              className="w-full bg-accent origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience entries */}
          <div className="flex flex-col gap-12">
            {experience.map((exp, id) => (
              <SectionReveal key={id} delay={id * 0.1}>
                <div
                  className="relative pl-10 cursor-pointer group"
                  onClick={() => setExpandedId(expandedId === id ? null : id)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5">
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        expandedId === id
                          ? 'bg-accent border-accent shadow-glow-sm'
                          : 'bg-void border-border group-hover:border-accent'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="text-lg font-medium text-primary group-hover:text-accent transition-colors">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-tertiary font-mono">{exp.date}</span>
                    </div>

                    <div className="flex items-center gap-2 text-secondary text-sm mb-1">
                      <span>{exp.company}</span>
                      <span className="text-tertiary">·</span>
                      <span className="text-tertiary">{exp.location}</span>
                    </div>

                    {exp.note && (
                      <p className="text-xs text-accent/70 font-mono mb-3">{exp.note}</p>
                    )}

                    {/* Expandable details */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedId === id ? 'auto' : 0,
                        opacity: expandedId === id ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      {exp.description && (
                        <ul className="space-y-2 mb-4 mt-2">
                          {exp.description.map((desc, descId) => (
                            <li key={descId} className="text-secondary text-sm font-light leading-relaxed flex gap-2">
                              <span className="text-accent mt-1.5 shrink-0">·</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.skills && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.skills.map((skill, skillId) => (
                            <span
                              key={skillId}
                              className="px-2.5 py-1 text-mono font-mono bg-surface-alt rounded-md text-tertiary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>

                    {/* Expand hint */}
                    <div className="flex items-center gap-1 mt-2">
                      <motion.span
                        className="text-xs text-tertiary"
                        animate={{ rotate: expandedId === id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▾
                      </motion.span>
                      <span className="text-xs text-tertiary">
                        {expandedId === id ? 'Collapse' : 'Expand'}
                      </span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
