import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Nav.scss";
import logo from "../../images/logo.png";

function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const menuItems = (
    <>
      <a className="menu-item" href="#home">HOME</a>
      <a className="menu-item" href="#about">ABOUT ME</a>
      
      <img src={logo} alt="logo" className={`nav-logo ${scrollPosition > 200 ? 'small' : 'large'}`} />
      <a className="menu-item" href="#skills">SKILLS</a>
      <a className="menu-item" href="#projects">PROJECTS</a>
    </>
  );

  const phoneItems = (
    <>
      <a className="menu-item" href="#home">HOME</a>
      <a className="menu-item" href="#about">ABOUT ME</a>
      <a className="menu-item" href="#skills">SKILLS</a>
      <a className="menu-item" href="#projects">PROJECTS</a>
    </>
  );

  return (
    <div className="navigation">
      <Menu right width={ '280px' }>
        {phoneItems}
      </Menu>
      <div className="desktop-menu">
        {menuItems}
      </div>
    </div>
  );
}

export default Navigation;
