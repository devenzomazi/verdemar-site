import 'bootstrap/dist/css/bootstrap.min.css';

const Calendar = ({ eventos }) => {
  return (
    <div>
      <h3>Próximos Eventos</h3>
      <ul className="list-group">
        {eventos.map(evento => (
          <li key={evento.id} className="list-group-item">
            <h5>{evento.nome}</h5>
            <p><strong>Data:</strong> {new Date(evento.data).toLocaleDateString('pt-BR')}</p>
            <p><strong>Local:</strong> {evento.local}</p>
            <p>{evento.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;