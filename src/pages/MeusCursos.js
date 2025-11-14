import React from 'react';
import CourseCard from '../components/CourseCard';
import './Dashboard.css';

const myCourses = [
  {
    id: 1,
    title: "Curso de React",
    progress: "50%",
    preview:
      "Continue aprendendo React avançado, compondo projetos interativos para seu portfólio.",
  },
  {
    id: 2,
    title: "Curso de CSS Avançado",
    progress: "30%",
    preview:
      "Aprenda animações, layouts responsivos e técnicas modernas de CSS para dar vida aos seus sites.",
  },
  {
    id: 3,
    title: "Curso de JavaScript",
    progress: "70%",
    preview:
      "Domine JS do básico ao avançado, criando interações e integrando APIs.",
  },
];

const MeusCursos = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <br></br>
        <h2>Seus Cursos</h2>
        <br></br>
        <h3>
          Aqui você encontra todos os cursos que está acompanhando no EduVision.
          Continue seu aprendizado e desenvolva suas habilidades passo a passo.
        </h3>
        <h3>
          Clique em "Continuar Curso" para avançar nas aulas, ver material extra
          ou revisar conceitos importantes. Todos os cursos são interativos e
          adaptados para você evoluir de forma prática e moderna.
        </h3>
      </div>
        <br></br>
        <br></br>
      <div className="courses-grid">
        {myCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            preview={course.preview}
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default MeusCursos;
