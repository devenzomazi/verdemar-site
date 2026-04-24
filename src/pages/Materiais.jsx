import '../styles/Materiais.css';

const materiais = [
  {
    titulo: 'Guarapuvu',
    texto: 'Árvore símbolo da cidade de Bombinhas, tem seu nome com origem no tupi ygara, que significa canoa, revelando seu uso na construção desse tipo de embarcação. A guarapuvu (ou Schizolobium parahyba) é também a árvore nativa brasileira com o crescimento mais rápido, chegando a 3 metros por ano.',
    imagem: '/materiais/guarapuvu.jpg'
  },
  {
    titulo: 'Olho de Cabra',
    texto: 'A Ormosia arbórea é uma árvore de copa grande e bastante folheada, endêmica do Brasil. Seu nome deriva do grego órmos, que significa “colar”, em referência a um dos usos de suas sementes. Essas sementes podem chegar a 1 cm de comprimento e são bastante usadas em artesanatos.Com sua cor vermelha e preta, representa um "olho atento" que vigia caminhos e protege contra inveja, mau-olhado e energias negativas.',
    imagem: '/materiais/Ormosia_arborea_olho de cabra.jpg'
  },
  {
    titulo: 'Jequiriti',
    texto: 'Também chamada de olho de pombo, a Sapindus saponaria é uma espécie de arbusto cujos frutos produzem espuma quando postos em água fervente, podendo substituir o sabão. As sementes são parecidas com as de Olho de Cabra, mas diferem por serem menores. Muito usadas em guias espirituais, não devem ser ingeridas, pois são tóxicas. É um forte amuleto contra inveja, mau-olhado e energias negativas.',
    imagem: '/materiais/jequiriti.jpg'
  },
  {
    titulo: 'Tento de Rosário',
    texto: 'Ou Lágrimas de Nossa Senhora, a Coix lacryma-jobi é uma espécia de gramínea cujo variedade selvagem é aplicada em terços, colares e outros objetos. É originária da Ásia, onde possui registros que chegam ao século X a.C.São associadas a momentos de profunda emoção, fé e humildade.',
    imagem: '/materiais/tento rosário.jpeg'
  }
];

const Materiais = () => {
  return (
    <div className="materiais-page">

      {/* INTRO */}
      <section className="materiais-intro">
        <div className="container-intro">
          <div className="intro-texto">
            <h1>Você conhece as Biojóias?</h1>
            <p>
              As biojoias são criadas a partir de elementos naturais, respeitando o tempo da natureza e transformando sementes em peças únicas.
            </p>
            <p>
              Cada material carrega uma história, um significado e uma conexão com o ambiente de onde foi coletado.
            </p>
          </div>

          <video
        className="video-intro"
        src="/Video Project 1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
        </div>
      </section>

      {/* LISTA DE MATERIAIS */}
      <section className="materiais-lista">
        {materiais.map((item, index) => (
          <div
            key={index}
            className={`material-item ${index % 2 !== 0 ? 'invertido' : ''}`}
          >
            <div className="material-container">

              <div className="material-img">
                <img src={item.imagem} alt={item.titulo} />
              </div>

              <div className="material-text">
                <h2>{item.titulo}</h2>
                <p>{item.texto}</p>
              </div>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Materiais;