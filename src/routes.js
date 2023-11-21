import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio/index.js'
import SobreMim from './paginas/sobreMim/index.js'
import Menu from './componentes/menu/index.js'
import Rodape from './componentes/rodape/index.js';
import PaginaPadrao from './componentes/paginaPadrao/index.js';
import Post from './componentes/post/index.js';
import NaoEncotrada from './paginas/naoEncontrada/index.js';
import ScrollToTop from './componentes/scrollToTop/index.js';

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post/>} />

        <Route path="*" element={<NaoEncotrada/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
