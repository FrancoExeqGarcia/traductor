import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <h1>Traductor</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/translate">Traducir</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
