import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации

const HomePage = () => {
  const navigate = useNavigate(); // Хук для навигации

  const handleClick = () => {
    navigate('/main'); // Переходим на страницу MainPage
  };

  return (
    <div className="home-page">
      <h1>URBAN-TEAM</h1>
      <p>Добро пожаловать! Нажмите "Зайти", чтобы начать.</p>
      {/* Кнопка "Зайти" */}
      <button onClick={handleClick} className="enter-button">
        Зайти
      </button>
    </div>
  );
};

export default HomePage;