import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import './Categorias.css';

<br></br>
const allCourses = [
  { id: 1, title: "Curso de React", preview: "Aprenda React do zero ao avançado..." },
  { id: 2, title: "Curso de CSS Avançado", preview: "Domine animações, layouts responsivos..." },
  { id: 3, title: "Curso de JavaScript", preview: "Aprenda JS completo, integração com APIs..." },
  { id: 4, title: "Curso de Python", preview: "Do básico à automação e análise de dados..." },
  { id: 5, title: "Curso de Node.js", preview: "Crie servidores, APIs e aplicações backend..." },
  { id: 6, title: "Curso de UI/UX Design", preview: "Design de interfaces modernas e interativas..." },
];

const displayCount = 3;
<br></br>
const Categorias = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide contínuo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % allCourses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + allCourses.length) % allCourses.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % allCourses.length);
  };

  const getVisibleCourses = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      visible.push(allCourses[(currentIndex + i + allCourses.length) % allCourses.length]);
    }
    return visible;
  };

  const visibleCourses = getVisibleCourses();

  return (
    <div className="categories-container">
      <h2>Categorias de Cursos</h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={handlePrev}>&lt;</button>
        <div className="courses-carousel-3d">
          {visibleCourses.map((course, idx) => (
            <div
              key={course.id}
              className={`card-wrapper-3d position-${idx}`}
            >
              <CourseCard title={course.title} preview={course.preview} />
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Categorias;
