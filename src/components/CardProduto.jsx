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
          <a href="https://wa.me/5581999999999" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;