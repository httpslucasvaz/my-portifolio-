import "./header.css";

import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export function Header() {
  return (
    <div id="container">
      <nav className="header">
        <div className="logo-container">
          <img className="logo" src="/logo.svg" /> <h2>&lt; lucas vaz /&gt;</h2>
        </div>
        <div className="logo-container">
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



