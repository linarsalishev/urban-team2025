import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const GuestPage = () => {
    const navigate = useNavigate(); // Хук для навигации
  
    return (
      <div className="main-page">
        <h1>Расписание</h1>
        <div className="button-container">
          {/* Кнопка "Редактировать" */}
          <button onClick={() => navigate('/recordpage')} className="main-button">
            Записаться на занятие
          </button>
  
          <button onClick={() => navigate('/studentedit')} className="main-button">
            Арендовать зал
          </button>
  
          {/* Кнопка "Обратная связь" */}
          <button onClick={() => navigate('/teacher')} className="main-button">
            Мероприятия
          </button>

          <button onClick={() => navigate('/')} className="main-button">
            Назад
          </button>
        </div>
      </div>
    );
  };


export default GuestPage;