import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdministraionPage = () => {
    const navigate = useNavigate(); // Хук для навигации
  
    return (
      <div className="main-page">
        <h1>ADMIN-URBAN</h1>
        <div className="button-container">


          {/* Кнопка "Редактировать" */}
          <button onClick={() => navigate('/editingpage')} className="main-button">
            Редактирование
          </button>
  
          <button onClick={() => navigate('/guestbuy')} className="main-button">
            Воронка продаж
          </button>
  
          {/* Кнопка "Обратная связь" */}
          <button onClick={() => navigate('/moderpage')} className="main-button">
            Модерация
          </button>

          
        <button onClick={() => navigate('/main')} className="main-button">
            Главная страница
          </button>
        </div>
      </div>
    );
  };

export default AdministraionPage;