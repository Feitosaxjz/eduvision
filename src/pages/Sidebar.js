import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // usa o mesmo CSS da dashboard

const Sidebar = ({ visible }) => {
  return (
    <div className={`sidebar ${visible ? 'visible' : ''}`}>
      <div className="sidebar-header">
        <h1 className="sidebar-title">EduVision</h1>
        <p className="sidebar-user">Olá, Estudante!</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/meus-cursos">Meus Cursos</Link></li>
          <li><Link to="/categorias">Categorias</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
          <li><Link to="/configuracoes">Configurações</Link></li>
          <li><Link to="/logar">Logar</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
