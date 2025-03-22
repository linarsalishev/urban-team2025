import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const EditingPage = () => {
    const navigate = useNavigate(); // Хук для навигации
  
    return (
      <div className="main-page">
        <h1>Редактирование</h1>
        <div className="button-container">
          {/* Кнопка "Редактировать" */}
          <button onClick={() => navigate('/scheduleedit')} className="main-button">
            Расписание
          </button>
  
          <button onClick={() => navigate('/studentedit')} className="main-button">
            Ученики
          </button>
  
          {/* Кнопка "Обратная связь" */}
          <button onClick={() => navigate('/teacher')} className="main-button">
            Преподаватели
          </button>
  
          {/* Кнопка "Расписание филиалов" */}
          <button onClick={() => navigate('/abonementedit')} className="main-button">
            Абонемент
          </button>

          <button onClick={() => navigate('/adminpage')} className="main-button">
            Главное меню
          </button>

        </div>
      </div>
    );
  };


export default EditingPage;