import React from 'react';
import './Landing.css';


const Landing = ({ onStart }) => {
  return (
    <div className="landing-container">
      
      <img 
        src={process.env.PUBLIC_URL + '/logo.png'} 
        alt="EduVision" 
        className="landing-logo" 
      />
      
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