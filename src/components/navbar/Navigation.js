import "./Nav.scss";
import logo from '../../images/logo.png'

function Navigation() {
  return (
    <div className="navigation">
      <div className="link">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
      </div>
    </div>
  );
}

export default Navigation;