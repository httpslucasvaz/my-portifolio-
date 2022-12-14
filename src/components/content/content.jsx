import "./content.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export function Content() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className="wrapper">
      <div className="container">
        <img className="illustration" src="/illustration.svg"  />

        <div className="container-text">
          <div className="text">
            <div
              className="greet"
              data-aos="fade-left"
            >
              HELLO, 👋
            </div>
            <span
              className="text-body"
              data-aos="fade-left"
            >
              EU SOU O CARA QUE CRIA SITES!
            </span>

            <a href="profile.pdf" download>
              <button className="cssbuttons-io-button" data-aos="zoom-out-left">
                MEU CURRÍCULO
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
