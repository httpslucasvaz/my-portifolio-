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
          <button class="cta">
            <span class="hover-underline-animation"> linkedin </span>
            <SiLinkedin className="icon" />
          </button>

          <button class="cta">
            <span class="hover-underline-animation"> github </span>
            <SiGithub className="icon" />
          </button>
        </div>
      </nav>
    </div>
  );
}



