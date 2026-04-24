import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Materiais from './pages/Materiais';
import Sobre from './pages/Sobre';
import ContatoAgenda from './pages/ContatoAgenda';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Produtos />} />
      <Route path="/materiais" element={<Materiais />} />
      <Route path="/produtos" element={<Sobre />} />
      <Route path="/contato-agenda" element={<ContatoAgenda />} />
    </Routes>
  );
};

export default AppRoutes;