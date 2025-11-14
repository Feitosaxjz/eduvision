import React from 'react';
import './Landing.css';
// -----------------------------------------------------
// 1. REMOVA A LINHA DE IMPORTAÇÃO DA LOGO
// -----------------------------------------------------

const Landing = ({ onStart }) => {
  return (
    <div className="landing-container">
      {/* 2. ALTERE O SRC: O caminho /logo.png busca o arquivo na pasta public/ */}
      <img src="/logo.png" alt="EduVision" className="landing-logo" />
      <h1 className="landing-title">EduVision</h1>
      <p className="landing-subtitle">
        Sua plataforma de cursos online moderna e interativa
      </p>
      <button className="landing-button" onClick={onStart}>
        Começar
      </button>
    </div>
  );
};

export default Landing;