import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';
// import GitHubActivity from './components/GitHubActivity';

function App() {
  return (
    <main className='dark:bg-main bg-light-main w-full h-full transition-colors duration-300'>
      <ThemeToggle />
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <GitHubActivity/> */}
      <Experience/>
      <Contact/>
    </main>
  );
}

export default App;
