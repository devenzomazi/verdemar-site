import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ESQUERDA */}
        <div className="footer-left">
          <a href="#top">Voltar ao Topo</a>
        </div>

        {/* CENTRO */}
        <div className="footer-center">
          <h4>VerdeMar Biojóias</h4>
          <p>© Copyright 2026 VerdeMar - Todos os direitos reservados.</p>
        </div>

        {/* DIREITA */}
        <div className="footer-right">
          <div>@verdemar_biojoias</div>
          <div>(47) 9 8435-7154</div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;