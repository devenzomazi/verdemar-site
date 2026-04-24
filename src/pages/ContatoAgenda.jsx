import { eventos } from '../data/eventos';
import Calendar from '../components/Calendar';
import { useState } from 'react';
import '../styles/ContatoAgenda.css';

const ContatoAgenda = () => {

  const [copiado, setCopiado] = useState('');

  const copiarTexto = (texto, tipo) => {
    navigator.clipboard.writeText(texto);
    setCopiado(tipo);

    setTimeout(() => setCopiado(''), 2000);
  };

  return (
    <div className="contato-page">

      {/* HEADER */}
      <section className="contato-header fade-in">
        <h1>Agenda e Contato</h1>
        <p>Entre em contato ou veja onde me encontrar pessoalmente.</p>
      </section>

      <div className="contato-container">

        {/* CONTATO */}
        <div className="contato-box fade-in">

          <h2>Fale comigo</h2>

          <div className="contato-item">
            <span>Telefone</span>
            <div>
              (47) 9 8435-7154
              <button onClick={() => copiarTexto('(47984357154)', 'tel')}>
                {copiado === 'tel' ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="contato-item">
            <span>Email</span>
            <div>
              derettiodair713@gmail.com
              <button onClick={() => copiarTexto('derettiodair713@gmail.com', 'email')}>
                {copiado === 'email' ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="contato-item">
            <span>Instagram</span>
            <div>
              <a
                href="https://instagram.com/verdemar_biojoias"
                target="_blank"
                rel="noopener noreferrer"
              >
                @verdemar_biojoias
              </a>
            </div>
          </div>

          {/* CTA WHATSAPP */}
          <a
            href="https://wa.me/5547984357154?text=Olá%20Odair,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20biojoias."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Falar no WhatsApp
          </a>

          {/* MAPA */}
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps?q=Bombinhas,SC&output=embed"
              loading="lazy"
              title="Mapa"
            />
          </div>

          {/* ROTA */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Bombinhas,SC"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rota"
          >
            Ver rota no Google Maps
          </a>

        </div>

        {/* AGENDA */}
        <div className="agenda-box fade-in">
          <h2>Agenda</h2>
          <Calendar eventos={eventos} />
        </div>

      </div>

    </div>
  );
};

export default ContatoAgenda;