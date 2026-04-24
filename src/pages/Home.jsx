import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '../components/HeroSection';
import SobreOdair from '../components/SobreOdair';
import SobreBiojoias from '../components/SobreBiojoias';
import Destaque from '../components/Destaque';
import Galeria from '../components/Galeria';
import Localizacao from '../components/Localizacao';

const Home = () => {
  return (
    <>
      {/* HERO FULL WIDTH */}
      <HeroSection />

      {/* RESTO CENTRALIZADO */}
      <div className="container">
        <SobreOdair />
        <Destaque />
        <Galeria />
        <Localizacao />
      </div>
    </>
  );
};

export default Home;