import React, { useState, useEffect } from 'react';
import "./Nav.scss";
import logo from "../../images/logo.png";

function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="navigation">
      <div className="link">
        <a href="#">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#">
          <img src={logo} alt="logo" style={{height: scrollPosition > 200 ? '50px' : '100px', width: scrollPosition > 200 ? '50px' : '100px'}} />
        </a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
      </div>
    </div>
  );
}

export default Navigation;
