import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardProduto = ({ produto }) => {
  return (
    <div className="card h-100">
      <img src={produto.imagem} className="card-img-top" alt={produto.nome} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{produto.nome}</h5>
        <p className="card-text flex-grow-1">{produto.descricao}</p>
        <div className="mt-auto">
          <Link to="/materiais" className="btn btn-secondary btn-sm me-2">Ver Materiais</Link>
          <a href="https://wa.me/5547984357154?text=Olá%20Odair,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20biojoias." className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;