import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Produtos.css';
import Localizacao from '../components/Localizacao';

const Produtos = () => {
  return (
    <div className="produtos-page">

      {/* INTRO */}
      <section className="produtos-intro">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-5 text-center mb-4 mb-lg-0">
              <img src="/odair.jpg" alt="Odair" className="img-produtos" />
            </div>

            <div className="col-lg-7">
              <h1>Olá,<br />sou Odair Doretti</h1>

              <p>
                Minha história com o artesanato começou de forma inesperada, há cinco anos. Durante muito tempo trabalhei como padeiro, barman e garçom, mas foi no silêncio reflexivo da terapia e no isolamento da pandemia que descobri minha verdadeira vocação.
              </p>

              <p>
                O que começou com nós de macramê, transformou-se em uma paixão profunda pelas riquezas da nossa terra.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="produtos-processo">
        <div className="container text-center">

          <h2>Como são feitas as Biojóias?</h2>

          <p>
            Realizo pessoalmente a coleta urbana de sementes, como as de Garapuvu, respeitando o tempo necessário para a secagem e cura de cada material.
          </p>

          <p>
            O diferencial das minhas peças está no rigor técnico: utilizo micro-retíficas para furações precisas e finalizo cada item com óleos essenciais.
          </p>

        </div>
      </section>

      {/* IMAGEM FINAL */}
      <section className="produtos-imagem"></section>

      {/* LOCALIZAÇÃO */}
      <Localizacao />

    </div>
  );
};

export default Produtos;