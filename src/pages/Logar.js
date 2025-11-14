import React, { useState } from 'react';
import './Login.css';

const Logar = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    alert(`Email: ${email}\nSenha: ${senha}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
        />
        <button onClick={handleLogin}>Entrar</button>
        <p>Não tem conta? <a href="/criar-conta">Criar</a></p>
      </div>
    </div>
  );
};

export default Logar;
