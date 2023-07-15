import "./Nav.scss";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div className="navigation">
      <div className="link">
        <a href="#home">
          <Link to="home" smooth={true} duration={500}>
            HOME
          </Link>
        </a>
        <a href="#about">
          <Link to="about" smooth={true} duration={500}>
            ABOUT ME
          </Link>
        </a>
        <a href="#home">
          <img src={logo} alt="logo" />
          <Link to="home" smooth={true} duration={500}></Link>
        </a>
        <a href="#skills">
          <Link to="skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </a>
        <a href="#projects">
          <Link to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Navigation;