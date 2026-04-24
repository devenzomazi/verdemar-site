import 'bootstrap/dist/css/bootstrap.min.css';

const Cuidados = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Cuidados com suas Biojoias</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Evite exposição prolongada ao sol para preservar a cor natural dos materiais.</li>
            <li className="list-group-item">Não use produtos químicos agressivos na limpeza; prefira água morna e sabão neutro.</li>
            <li className="list-group-item">Guarde as peças em local fresco e seco, longe de umidade excessiva.</li>
            <li className="list-group-item text-warning">⚠️ Não mergulhe as biojoias em água, pois alguns materiais podem absorver umidade e danificar.</li>
            <li className="list-group-item">Para limpeza, use um pano macio e seco; evite atrito excessivo.</li>
            <li className="list-group-item text-danger">⚠️ Atenção: Materiais como sementes podem ser tóxicos se ingeridos; mantenha fora do alcance de crianças e animais.</li>
            <li className="list-group-item">Em caso de dúvidas sobre cuidados específicos, consulte o artesão.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cuidados;