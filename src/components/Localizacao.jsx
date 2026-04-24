import '../styles/Localizacao.css';
import { Link, useLocation } from 'react-router-dom';

const Localizacao = () => {
  return (
    <section className="localizacao">
      <div className="container">
        <h3>Você pode me encontrar em Bombinhas!</h3>

        <div className="localizacao-content">
          
          {/* INFO */}
          <div className="local-info">
            <h5>Feira de Artesanato de Bombas</h5>

            <p>De dd/mm/aa a dd/mm/aa</p>

            <p>
              Rua R. Gaturamo - Bombas, <br />
              Bombinhas - SC, 88215-000
            </p>

            <Link to="/contato-agenda" className="btn-agenda">
              Agenda Completa
            </Link>
          </div>

          {/* MAPA */}
          <div className="local-mapa">
            <iframe
              src="https://www.google.com/maps?q=Feira+de+Artesanato+de+Bombas&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Localizacao;