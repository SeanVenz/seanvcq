import { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navigation from './components/navbar/Navigation';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Interests from './components/about/interest';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [backgroundChanged, setBackgroundChanged] = useState(false);
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Interests></Interests>
      <Skills  />
      <Projects  />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;