import "./header.css";
import Aos from "aos";
import 'aos/dist/aos.css'


import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { useEffect } from "react";

export function Header() {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div id="container">
      <nav className="header">
        <div className="logo-container" data-aos="fade-right" >
          <img className="logo" src="/logo.svg" /> <h2>&lt; lucas vaz <span className="color">/</span>&gt;</h2>
        </div>
        <div className="logo-container" data-aos="fade-left">
          <button className="cta">
            <span className="hover-underline-animation"><a href="https://www.linkedin.com/in/lucasvazz/" target='_blank'> linkedin </a> </span>
            <SiLinkedin className="icon" />
          </button>

          <button className="cta">
            <span className="hover-underline-animation"><a href="https://github.com/httpslucasvaz" target='_blank'> github</a> </span>
            <SiGithub className="icon" />
          </button>
        </div>
      </nav>
    </div>
  );
}



