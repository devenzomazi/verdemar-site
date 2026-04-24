import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Destaque.css';

const Destaque = () => {
  return (
    <section className="destaque">
      <div className="container">
        <div className="destaque-box">
          <h2>
            Cada peça conta uma história única.
            <br />
            Encontre a sua.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Destaque;