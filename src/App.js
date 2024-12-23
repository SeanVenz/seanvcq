import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className='bg-main w-full h-full'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  );
}

export default App;
