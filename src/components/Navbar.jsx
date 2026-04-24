import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Collapse } from 'bootstrap';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const collapseRef = useRef(null);

  const isHome = location.pathname === '/';

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    if (collapseRef.current) {
      const collapse = Collapse.getInstance(collapseRef.current);
      if (collapse) {
        collapse.hide();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar 
      ${isHome ? (scrolled ? 'scrolled' : 'transparent') : 'solid'}`}
    >
      <div className="container">

        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          VerdeMar Biojóias
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">

            <li>
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>

            <li>
              <Link className={`nav-link ${isActive('/produtos') ? 'active' : ''}`} to="/produtos" onClick={closeMenu}>
                Produtos
              </Link>
            </li>

            <li>
              <Link className={`nav-link ${isActive('/materiais') ? 'active' : ''}`} to="/materiais" onClick={closeMenu}>
                Materiais
              </Link>
            </li>

            <li>
              <Link className={`nav-link ${isActive('/sobre') ? 'active' : ''}`} to="/sobre" onClick={closeMenu}>
                Sobre
              </Link>
            </li>

            <li>
              <Link className={`nav-link ${isActive('/contato-agenda') ? 'active' : ''}`} to="/contato-agenda" onClick={closeMenu}>
                Agenda e Contato
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;