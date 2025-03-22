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
          Редактирование
        </button>

        <button onClick={() => navigate('/guestpage')} className="main-button">
          Воронка продаж
        </button>

        {/* Кнопка "Покупка абонемента" */}
        <button onClick={() => navigate('/gallery')} className="main-button">
          Обратная связь
        </button>

        {/* Кнопка "Расписание филиалов" */}
        <button onClick={() => navigate('/schedule')} className="main-button">
          Расписание филиалов
        </button>

        {/* Кнопка "Контакты" */}
        <button onClick={() => navigate('/consultation')} className="main-button">
          Консультация
        </button>
      </div>
    </div>
  );
};

export default MainPage;