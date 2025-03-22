import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации

const MainPage = () => {
  const navigate = useNavigate(); // Хук для навигации

  return (
    <div className="main-page">
      <h1>URBAN-TEAM</h1>
      <div className="button-container">

        {/* Кнопка "Покупка абонемента" */}
        <button onClick={() => navigate('/gallery')} className="main-button">
          Покупка абонемента
        </button>

        {/* Кнопка "Расписание филиалов" */}
        <button onClick={() => navigate('/schedule')} className="main-button">
          Расписание филиалов
        </button>

        {/* Кнопка "Контакты" */}
        <button onClick={() => navigate('/consultation')} className="main-button">
          Консультация
        </button>

        <button onClick={() => navigate('/')} className="main-button">
          Страница входа
        </button>
      </div>
    </div>
  );
};

export default MainPage;