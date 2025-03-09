import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации

const MainPage = () => {
  const navigate = useNavigate(); // Хук для навигации

  return (
    <div className="main-page">
      <h1>URBAN-TEAM</h1>
      <div className="button-container">
        {/* Кнопка "Запись на занятие" */}
        <button onClick={() => navigate('/booking')} className="main-button">
          Запись на занятие
        </button>

        {/* Кнопка "Покупка абонемента" */}
        <button onClick={() => navigate('/subscription')} className="main-button">
          Покупка абонемента
        </button>

        {/* Кнопка "Расписание филиалов" */}
        <button onClick={() => navigate('/schedule')} className="main-button">
          Расписание филиалов
        </button>

        {/* Кнопка "Консультация" */}
        <button onClick={() => navigate('/consultation')} className="main-button">
          Консультация
        </button>
      </div>
    </div>
  );
};

export default MainPage;