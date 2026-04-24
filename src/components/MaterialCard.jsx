import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MaterialCard = ({ material }) => {
  const [imgSrc, setImgSrc] = useState(material.imagem);

  const handleError = () => {
    setImgSrc('/placeholder.jpg'); // Placeholder image or neutral color
  };

  return (
    <div className="card h-100 shadow">
      <img src={imgSrc} className="card-img-top" alt={material.nome} style={{ height: '200px', objectFit: 'cover', width: '100%' }} onError={handleError} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{material.nome}</h5>
        <p className="card-text"><strong>Origem:</strong> {material.origem}</p>
        <p className="card-text"><strong>Época de Coleta:</strong> {material.epoca}</p>
        <p className="card-text"><strong>Significado:</strong> {material.significado}</p>
        {material.observacao && (
          <p className="card-text text-danger"><strong>Observação:</strong> {material.observacao}</p>
        )}
      </div>
    </div>
  );
};

export default MaterialCard;