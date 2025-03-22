import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации

const HomePage = () => {
  const navigate = useNavigate(); // Хук для навигации

  return (
    <div className="main-page">
      <h1>Добро пожаловать!</h1>
      <p>URBAN-TEAM</p>
      {/* Кнопка "Зайти" */}
      <div className="button-container">
          {/* Кнопка "Редактировать" */}
          <button onClick={() => navigate('/guestpage')} className="main-button">
            Гость
          </button>
  
          <button onClick={() => navigate('/studentpage')} className="main-button">
            Ученик
          </button>
  
          {/* Кнопка "Обратная связь" */}
          <button onClick={() => navigate('/teacherpage')} className="main-button">
           Преподаватель
          </button>

          <button onClick={() => navigate('/adminpage')} className="main-button">
           Администратор
          </button>
        </div>

    </div>
  );
};

export default HomePage;