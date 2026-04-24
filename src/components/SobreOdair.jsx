import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SobreOdair.css';

const SobreOdair = () => {
  return (
    <section className="sobre-odair">
      <div className="container">
        <div className="row align-items-center gy-5">
          
          {/* TEXTO */}
          <div className="col-12 col-lg-6">
            <div className="conteudo-texto">
              <h2>Sobre Odair</h2>

              <p>
                Há três anos fundei a <strong>VerdeMar</strong>, onde foco no desenvolvimento de biojóias exclusivas.
              </p>

              <p>
                Meu trabalho é um processo de paciência e conexão com a natureza: eu mesmo coleto sementes de Garapuvu e outras espécies nativas, transformando-as em verdadeiras jóias.
              </p>

              <p>
                Venha conhecer meu trabalho e veja de perto a transformação da semente em arte!
              </p>

              <Link to="/sobre" className="btn btn-odair">
                Minha história
              </Link>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="col-12 col-lg-6 text-center">
            <div className="imagem-wrapper">
              <img src="/odair.jpg" alt="Odair" className="img-odair" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreOdair;