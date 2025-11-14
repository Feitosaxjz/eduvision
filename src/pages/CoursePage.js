import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CoursePage.css";

function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="course-page-container">
      <h2 className="course-title">Curso {id}</h2>
      <p className="course-desc">
        Aqui você terá acesso a todas as aulas, materiais e atividades do curso {id}.
      </p>
      <button className="btn" onClick={() => navigate("/dashboard")}>
        Voltar para Dashboard
      </button>
    </div>
  );
}

export default CoursePage;
