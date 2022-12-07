import "./header.css";

export function Header() {
  return (
    <div id="container">
      <nav className="header">
        <div className="logo-container">
          <img className="logo" src="/logo.svg" /> <h2>&lt; lucas vaz /&gt;</h2>
        </div>
        <div className="logo-container">
          <h2>facebook</h2>
          <h2>instagram</h2>
        </div>
      </nav>
    </div>
  );
}
