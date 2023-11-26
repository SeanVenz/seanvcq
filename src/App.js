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
// import React, { useState, useEffect } from 'react';
// import Loader from './components/Loader';


function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   window.onload = () => {
  //     setIsLoading(false);
  //   };
  // }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }
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