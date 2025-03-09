import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации

const HomePage = () => {
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    // Проверяем, запущено ли приложение внутри Telegram
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      tg.ready(); // Сообщаем Telegram, что приложение готово
      tg.expand(); // Разворачиваем приложение на весь экран

      // Настраиваем основную кнопку
      tg.MainButton.setText('Зайти'); // Текст на кнопке
      tg.MainButton.show(); // Показываем кнопку

      // Обработчик нажатия на кнопку
      tg.MainButton.onClick(() => {
        navigate('/booking'); // Переходим на страницу BookingPage
      });
    }
  }, [navigate]); // Добавляем navigate в зависимости useEffect

  return (
    <div className="home-page">
      <h1>URBAN-TEAM</h1>
      <p>Добро пожаловать! Нажмите "Зайти", чтобы начать.</p>
    </div>
  );
};

export default HomePage;