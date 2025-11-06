import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './componentes/Topbar';
import Sidebar from './componentes/Sidebar';
import Home from './pages/Home';
import Venda from './pages/Venda';
import Doacao from './pages/Doacao';
import Troca from './pages/Troca';
import Perfil from './pages/Perfil';
import Contato from './pages/Contato';

export default function App(){
  return (
    <BrowserRouter>
      <div className="bt-shell">
        <Topbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venda" element={<Venda />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/troca" element={<Troca />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//npm i react-router-dom
//npm i -D @types/react-router-dom
