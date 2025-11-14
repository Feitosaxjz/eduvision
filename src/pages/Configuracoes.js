import React from 'react';
import './Configuracoes.css';

const Configuracoes = () => {
  return (
    <div className="config-container">
      <h2>Configurações da Conta</h2>
      <p>
        Ajuste suas preferências, perfil, segurança e pagamentos de forma simples e moderna.
      </p>

      <section className="config-section">
        <h3>Perfil</h3>
        <p>Atualize seu nome, foto e informações pessoais. Personalize sua conta e mantenha seus dados sempre atualizados.</p>
        <button className="action-btn">Editar Perfil</button>
      </section>

      <section className="config-section">
        <h3>Preferências</h3>
        <p>Configure tema, notificações e idioma do EduVision para uma experiência personalizada.</p>
        <button className="action-btn">Ajustar Preferências</button>
      </section>

      <section className="config-section">
        <h3>Segurança</h3>
        <p>Altere sua senha, configure autenticação de dois fatores e garanta que sua conta esteja sempre protegida.</p>
        <button className="action-btn">Gerenciar Segurança</button>
      </section>

      <section className="config-section">
        <h3>Pagamentos</h3>
        <p>Gerencie métodos de pagamento, histórico de compras e assinaturas de cursos com facilidade.</p>
        <button className="action-btn">Ver Pagamentos</button>
      </section>
    </div>
  );
};

export default Configuracoes;
