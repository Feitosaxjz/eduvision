import React, { useEffect, useState } from 'react';
import './CourseCard.css';

const CourseCard = ({ title, preview, progress }) => {
  const [fill, setFill] = useState('0%');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFill(progress);
    }, 200); 
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{preview}</p>

      {progress && (
        <div className="progress-container">
          <div className="progress-bar" style={{ width: fill }}></div>
          <span className="progress-text" title={`Você completou ${fill} do curso`}>{fill}</span>
        </div>
      )}

      <button className="continue-btn">Continuar Curso</button>
    </div>
  );
};

export default CourseCard;
