import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HeroSection.css';
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Jóias que te conectam com a natureza</h1>
        <p className="hero-subtitle">Artesanato feito com sementes</p>
        <Link to="/materiais" className="btn btn-light btn-lg">
          Conheça as Biojóias
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;