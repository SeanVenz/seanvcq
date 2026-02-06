import { motion } from 'framer-motion';
import { characterReference } from '../constants/constant';
import SectionReveal from './SectionReveal';

function References() {
  return (
    <section id="references" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
            References
          </span>
          <h2 className="text-h1 font-extralight text-primary mb-16">
            People I've <span className="text-gradient">worked with</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characterReference.map((ref, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                className="p-6 rounded-xl border border-border bg-surface card-glow transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                    <img
                      src={ref.image}
                      alt={ref.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-primary text-sm font-medium">{ref.name}</h3>
                    <p className="text-tertiary text-xs">{ref.position}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-2 text-secondary text-xs hover:text-accent transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="truncate">{ref.email}</span>
                  </a>
                  <a
                    href={`tel:${ref.phoneNumber}`}
                    className="flex items-center gap-2 text-secondary text-xs hover:text-accent transition-colors group"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>{ref.phoneNumber}</span>
                  </a>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default References;
