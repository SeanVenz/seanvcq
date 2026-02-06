import { useScroll } from 'framer-motion';
import SideNav from './components/SideNav';
import ScrollProgress from './components/ScrollProgress';
import ParticleField from './components/ParticleField';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Work from './components/Work';
import Experience from './components/Experience';
import References from './components/References';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <main className='bg-void w-full min-h-screen relative'>
      {/* Global ambient particles */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <ParticleField />
      </div>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <SideNav />
      <div className="relative z-[1]">
        <Hero />
        <AboutSection />
        <Work />
        <Experience />
        <References />
        <Contact />
      </div>
    </main>
  );
}

export default App;
