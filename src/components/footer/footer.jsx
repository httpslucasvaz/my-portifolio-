import "./footer.css";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  console.log(year);
  return (
    <footer className='container-footer'>
        <div className='copyright'>
      <span>
        <p> © {year} // lucasvaz.com </p>
      </span>
      <span className="powered-by">
        <p>Powered by</p> <img className="powered-by-logo" src="/logo.svg" />
      </span>
      </div>
    </footer>
  );
}
