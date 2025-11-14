import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import MeusCursos from './pages/MeusCursos';
import Categorias from './pages/Categorias';
import Favoritos from './pages/Favoritos';
import Configuracoes from './pages/Configuracoes';
import Logar from './pages/Logar';
import Layout from './pages/Layout';

function App() {
  const [startApp, setStartApp] = useState(false);

  return (
    <Router>
      {!startApp ? (
        <Landing onStart={() => setStartApp(true)} />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/meus-cursos" element={<MeusCursos />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/logar" element={<Logar />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;
