import '../styles/Galeria2.css';

// 🔥 IMPORT AUTOMÁTICO DAS IMAGENS
const imagens = Object.values(
  import.meta.glob('../assets/galeria/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
);

const Sobre = () => {
  return (
    <div className="galeria-page">

      <div className="galeria-header">
        <h1>Galeria</h1>
        <p>Produtos a pronta entrega ou por encomenda. Entre em contato!</p>
      </div>

      <div className="galeria-grid">
        {imagens.map((img, index) => (
          <div key={index} className="galeria-item">
            <img src={img} alt={`Imagem ${index}`} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Sobre;