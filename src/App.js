import About from './components/About';
import CharacterReference from './components/CharacterReference';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import MovingBackground from './components/MovingBackground';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <main className='dark:bg-main bg-light-main w-full h-full transition-colors duration-300'>
      <MovingBackground />
      <ThemeToggle className='hidden md:block fixed top-4 right-4' />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CharacterReference />
      <Contact />
    </main>
  );
}

export default App;
