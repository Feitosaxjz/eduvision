import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import './Favoritos.css';

const favoritos = [
  {
    id: 1,
    title: "Curso de React",
    preview: "Aprenda React do zero ao avançado com projetos reais.",
    progress: "50%",
    details: {
      aulas: 20,
      duracao: "8h 30min"
    }
  },
  {
    id: 2,
    title: "Curso de CSS Avançado",
    preview: "Domine layouts, animações e técnicas modernas de CSS.",
    progress: "35%",
    details: {
      aulas: 15,
      duracao: "5h 45min"
    }
  },
  {
    id: 3,
    title: "Curso de JavaScript",
    preview: "Aprenda JS completo e prático, do básico ao avançado.",
    progress: "70%",
    details: {
      aulas: 25,
      duracao: "10h 15min"
    }
  },
];

const Favoritos = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="favoritos-container">
      <br></br>
      <h2>Seus Cursos Favoritos</h2>
      <br></br>
      <p>
        Aqui estão os cursos que você marcou como favoritos. Acompanhe seu progresso, revise o conteúdo sempre que quiser e continue aprendendo de forma fluida e moderna.
      </p>
      <br></br>
      <br></br>
      <div className="favoritos-grid">
        {favoritos.map((curso) => (
          <div 
            key={curso.id} 
            className="favorito-card-wrapper"
            onMouseEnter={() => setHovered(curso.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <CourseCard
              title={curso.title}
              preview={curso.preview}
              progress={curso.progress}
            />
            {hovered === curso.id && (
              <div className="favorito-card-overlay">
                <p>Aulas: {curso.details.aulas}</p>
                <p>Duração: {curso.details.duracao}</p>
                <button className="remove-btn">Remover dos Favoritos</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
