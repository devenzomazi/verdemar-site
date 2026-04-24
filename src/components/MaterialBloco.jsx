import { useEffect, useRef, useState } from 'react';
import '../styles/MaterialBloco.css';

const MaterialBloco = ({ titulo, texto, imagem, invertido, verde }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`material-bloco ${verde ? 'verde' : ''} ${visible ? 'show' : ''}`}
    >
      <div className={`material-container ${invertido ? 'invertido' : ''}`}>

        <div className="material-img">
          <img src={imagem} alt={titulo} />
        </div>

        <div className="material-text">
          <h2>{titulo}</h2>
          <p>{texto}</p>
        </div>

      </div>
    </section>
  );
};

export default MaterialBloco;