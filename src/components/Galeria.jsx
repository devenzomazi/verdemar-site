import '../styles/Galeria.css';
import { Link, useLocation } from 'react-router-dom';
const imagens = [
  '/materiais/prod1.jpg',
  '/materiais/prod2.jpg',
  '/materiais/prod3.jpg',
  '/materiais/prod4.jpg'
];

const Galeria = () => {
  return (
    <section className="galeria">
      <div className="container">
        <div className="galeria-grid">
          {imagens.map((img, index) => (
            <div className="galeria-item" key={index}>
              <img src={img} alt={`Produto ${index}`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/produtos" className="btn-vermais">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Galeria;