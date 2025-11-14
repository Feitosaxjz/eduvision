import React from 'react';
import CourseCard from '../components/CourseCard';
import './Dashboard.css';

const courses = [
  {
    id: 1,
    title: "Curso de React",
    preview: "Aprenda React do zero ao avançado, criando projetos reais e interativos para portfólio.",
  },
  {
    id: 2,
    title: "Curso de CSS Avançado",
    preview: "Domine animações, layouts responsivos e técnicas modernas de CSS para deixar seus sites incríveis.",
  },
  {
    id: 3,
    title: "Curso de JavaScript",
    preview: "Aprenda JS completo, desde fundamentos até manipulação do DOM e integração com APIs.",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <br></br>
        <h2>Bem-vindo ao EduVision!</h2>
        <br></br>
        <h3>Aprenda de forma moderna e interativa</h3>
        <h3>
          Explore cursos em tecnologia, design, programação e muito mais. Cada curso foi desenvolvido por especialistas com aulas práticas e exemplos reais.
        </h3>
        <h3>
          Navegue pelos cursos abaixo, conheça os detalhes de cada um e comece a sua jornada de aprendizado. Seja parte de uma comunidade que evolui junto. Aproveite para explorar, praticar e desenvolver suas habilidades. O EduVision é para todos os níveis, tornando o estudo fluido, intuitivo e moderno.
        </h3>
      </div>
      <br></br>
      <br></br>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            preview={course.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
