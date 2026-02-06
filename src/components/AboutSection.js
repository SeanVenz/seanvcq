import { about, skillsData } from '../constants/constant';
import SectionReveal from './SectionReveal';

function SkillsTicker({ items, reverse = false }) {
  const doubled = [...items, ...items];
  const animClass = reverse ? 'animate-ticker-reverse' : 'animate-ticker';

  return (
    <div className="overflow-hidden py-3 group">
      <div className={`flex gap-6 ${animClass} ticker-pause w-max`}>
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-surface-alt/50 hover:border-accent-subtle hover:bg-surface-hover transition-all duration-300 shrink-0"
          >
            <span className="w-5 h-5 [&_svg]:w-5 [&_svg]:h-5">{skill.logo}</span>
            <span className="text-sm text-secondary font-medium whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  const halfIndex = Math.ceil(skillsData.length / 2);
  const firstRow = skillsData.slice(0, halfIndex);
  const secondRow = skillsData.slice(halfIndex);

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* About Text */}
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
                About
              </span>
              <h2 className="text-h1 font-extralight text-primary mb-8">
                A bit about <span className="text-gradient">me</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed font-light">
                {about[0].text}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-border bg-surface/50">
                  <span className="text-3xl font-extralight text-accent">2+</span>
                  <p className="text-secondary text-sm mt-2">Years Experience</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface/50">
                  <span className="text-3xl font-extralight text-accent">15+</span>
                  <p className="text-secondary text-sm mt-2">Projects Delivered</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface/50">
                  <span className="text-3xl font-extralight text-accent">20+</span>
                  <p className="text-secondary text-sm mt-2">Technologies</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-surface/50">
                  <span className="text-3xl font-extralight text-accent">3+</span>
                  <p className="text-secondary text-sm mt-2">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Skills Ticker */}
        <SectionReveal delay={0.2}>
          <div className="mt-20">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6 block text-center">
              Tech Stack
            </span>
            <div className="space-y-3">
              <SkillsTicker items={firstRow} />
              <SkillsTicker items={secondRow} reverse />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default AboutSection;
