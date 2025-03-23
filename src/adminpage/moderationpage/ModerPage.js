import React from "react";
import { useNavigate } from "react-router-dom";

const ModerPage = () => {
    const navigate = useNavigate(); // Хук для навигации
  
    return (
      <div className="main-page">
        <h1>Модерация</h1>
        <div className="button-container">


          {/* Кнопка "Редактировать" */}
          <button onClick={() => navigate('/createstudent')} className="main-button">
            Ученики
          </button>
  
          <button onClick={() => navigate('/createteacher')} className="main-button">
            Преподаватели
          </button>
  
          {/* Кнопка "Обратная связь" */}
          <button onClick={() => navigate('/createabonement')} className="main-button">
            Абонементы
          </button>

          <button onClick={() => navigate('/moderpage')} className="main-button">
            Расписание
          </button>

          <button onClick={() => navigate('/directpage')} className="main-button">
            Филиалы, направления
          </button>

          <button onClick={() => navigate('/createanons')} className="main-button">
            Мероприятия
          </button>
          
        <button onClick={() => navigate('/main')} className="main-button">
            Главная страница
          </button>
        </div>
      </div>
    );
  };

export default ModerPage;