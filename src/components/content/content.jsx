import "./content.css";

export function Content() {
  return (
    <main className="wrapper">
      <div className="container">
        <img className="illustration" src="/illustration.svg" />

        <div className="container-text">
          <div className="text">
            <span className="greet">HELLO, 👋 </span>
            <span className="text-body">EU SOU O CARA QUE CRIA SITES!</span>

            <button class="cssbuttons-io-button">
               MEU CURRÍCULO
              <div class="icon">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  height="24"
  width="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="feather feather-download"
>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="7 10 12 15 17 10"></polyline>
  <line x1="12" y1="15" x2="12" y2="3"></line>
</svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}


